"use client";
import { useEffect, useState, memo } from 'react';
import { FiChevronRight, FiChevronDown, FiList } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

// Mobile TOC Button
const MobileTOCButton = ({ onClick, isExpanded }) => (
    <motion.button
      onClick={onClick}
      className="fixed z-50 bottom-4 left-4 p-3 rounded-full shadow-lg bg-white dark:bg-neutral-900/95 backdrop-blur-sm border border-neutral-200/30 dark:border-neutral-800/30 hover:bg-neutral-50 dark:hover:bg-neutral-800/90 transition-colors"
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        rotate: isExpanded ? 90 : 0
      }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 20,
        rotate: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
          duration: 0.2
        }
      }}
    >
      <FiList className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
    </motion.button>
);

// Mobile TOC Content
const MobileTOCContent = ({ isExpanded, children }) => (
  <AnimatePresence>
    {isExpanded && (
      <motion.div
        className="fixed z-40 bottom-16 left-4 right-4 sm:left-4 sm:right-auto sm:w-[320px] max-h-[60vh] bg-white dark:bg-neutral-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-neutral-200/30 dark:border-neutral-800/30 overflow-y-auto"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

const TableOfContents = memo(function TableOfContents({ content, defaultExpanded = true }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  useEffect(() => {
    // Extract headings from content
    const getHeadings = () => {
      const lines = content.split('\n');
      const headings = [];
      let insideCodeBlock = false;
      
      lines.forEach(line => {
        // Skip code blocks
        if (line.trim().startsWith('```')) {
          insideCodeBlock = !insideCodeBlock;
          return;
        }
        
        if (!insideCodeBlock) {
          const match = line.match(/^(#{2,6})\s+(.+)$/); // Start from h2
          if (match) {
            const level = match[1].length;
            const text = match[2];
            const slug = text
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-+|-+$/g, '');
            
            headings.push({ level, text, slug });
          }
        }
      });
      
      return headings;
    };

    setHeadings(getHeadings());

    // Add IDs to headings in the document
    const article = document.querySelector('article');
    if (article) {
      const headers = article.querySelectorAll('h2, h3, h4, h5, h6');
      headers.forEach(header => {
        if (!header.id) {
          const id = header.textContent
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
          header.id = id;
        }
      });
    }

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0% -80% 0%',
        threshold: 1.0,
      }
    );

    document.querySelectorAll('article h2, article h3, article h4, article h5, article h6')
      .forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [content]);

  const scrollToHeading = (slug) => {
    const element = document.getElementById(slug);
    if (element) {
      // Jika di mobile, collapse dulu baru scroll
      if (window.innerWidth < 1024) {
        setIsExpanded(false);
        // Tunggu animasi collapse selesai baru scroll
        setTimeout(() => {
          const headerOffset = 80; // Kurangi offset karena ToC sudah collapse
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100); // Delay 100ms untuk animasi collapse
      } else {
        // Di desktop langsung scroll
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      
      setActiveId(slug);
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className={`not-prose
      lg:static lg:border lg:border-neutral-200/70 lg:dark:border-neutral-800/80 lg:rounded-lg
      lg:bg-white/50 lg:dark:bg-neutral-900/50 lg:backdrop-blur-sm lg:shadow-sm
      `}>
      {/* Desktop Header */}
      <div className="hidden lg:block px-3 py-2 border-b border-neutral-200/70 dark:border-neutral-800/80">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center w-full p-2.5 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 rounded-md transition-colors"
        >
          <h2 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            On this page
          </h2>
          <FiChevronDown
            className={`w-4 h-4 ml-2 text-neutral-700 dark:text-neutral-300 transition-transform duration-150 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>
      
      {/* Desktop TOC Content */}
      {isExpanded && (
        <div className="overflow-y-auto lg:px-3 lg:py-2 lg:max-h-[calc(100vh-8rem)] hidden lg:block">
          <ul className="space-y-1 text-sm">
            {headings.map((heading, index) => (
              <li
                key={index}
                style={{ paddingLeft: `${(heading.level - 2) * 0.75}rem` }}
              >
                <button
                  onClick={() => {
                    scrollToHeading(heading.slug);
                    // Collapse handled only by button click
                  }}
                  className={`
                    group flex items-center gap-1 w-full text-left py-1 px-2 rounded-md
                    ${activeId === heading.slug
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-500/5'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                    }
                    transition-colors duration-150 text-[13px] leading-tight
                  `}
                >
                  <FiChevronRight
                    className={`w-3 h-3 flex-shrink-0 transition-transform duration-150 opacity-60
                      ${activeId === heading.slug ? 'rotate-90' : 'group-hover:rotate-90'}
                    `}
                  />
                  <span className="truncate">{heading.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Mobile Components */}
      <div className="lg:hidden">
        <MobileTOCButton
          onClick={() => setIsExpanded(!isExpanded)}
          isExpanded={isExpanded}
        />
        
        <MobileTOCContent isExpanded={isExpanded}>
          <div className="p-3">
            <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3 border-b border-neutral-200 dark:border-neutral-700 pb-2">
              On this page
            </h3>
            <ul className="space-y-1 text-sm">
              {headings.map((heading, index) => (
                <li
                  key={index}
                  style={{ paddingLeft: `${(heading.level - 2) * 0.75}rem` }}
                >
                  <button
                    onClick={() => {
                      scrollToHeading(heading.slug);
                      setIsExpanded(false);
                    }}
                    className={`
                      group flex items-center gap-1 w-full text-left py-1.5 px-2 rounded-md
                      ${activeId === heading.slug
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-500/5'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                      }
                      transition-colors duration-150 text-[13px] leading-tight
                    `}
                  >
                    <FiChevronRight
                      className={`w-3 h-3 flex-shrink-0 transition-transform duration-150 opacity-60
                        ${activeId === heading.slug ? 'rotate-90' : 'group-hover:rotate-90'}
                      `}
                    />
                    <span className="truncate">{heading.text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </MobileTOCContent>
      </div>
    </nav>
  );
});

export default TableOfContents;