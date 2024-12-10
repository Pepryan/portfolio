"use client";
import { useEffect, useState, memo } from 'react';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';

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
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveId(slug);
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="not-prose rounded-lg border border-neutral-200/70 dark:border-neutral-800/80 
      bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-sm">
      <div className="px-3 py-2 border-b border-neutral-200/70 dark:border-neutral-800/80">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full py-1"
        >
          <h2 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            On this page
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-500">
              {isExpanded ? 'Collapse' : 'Expand'}
            </span>
            <FiChevronDown 
              className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                isExpanded ? 'transform rotate-180' : ''
              }`}
            />
          </div>
        </button>
      </div>
      
      {isExpanded && (
        <div className="px-3 py-2 max-h-[calc(100vh-16rem)] lg:max-h-[calc(100vh-8rem)] overflow-y-auto">
          <ul className="space-y-1 text-sm">
            {headings.map((heading, index) => (
              <li 
                key={index} 
                style={{ paddingLeft: `${(heading.level - 2) * 0.75}rem` }}
              >
                <button
                  onClick={() => {
                    scrollToHeading(heading.slug);
                    if (window.innerWidth < 1024) {
                      setIsExpanded(false);
                    }
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
    </nav>
  );
});

export default TableOfContents; 