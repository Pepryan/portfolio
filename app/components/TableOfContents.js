"use client";
import { useEffect, useState, memo } from 'react';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';

export default memo(function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const getHeadings = () => {
      const lines = content.split('\n');
      const headings = [];
      let insideCodeBlock = false;
      
      lines.forEach(line => {
        if (line.trim().startsWith('```')) {
          insideCodeBlock = !insideCodeBlock;
          return;
        }
        
        if (!insideCodeBlock) {
          const match = line.match(/^(#{1,6})\s+(.+)$/);
          if (match && !line.trim().startsWith('# ')) {
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
      const headers = article.querySelectorAll('h1, h2, h3, h4, h5, h6');
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
  }, [content]);

  const scrollToHeading = (slug) => {
    const element = document.getElementById(slug);
    if (element) {
      const headerOffset = 100; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveId(slug);
      history.pushState(null, null, `#${slug}`);
    }
  };

  return (
    <div className="bg-gray-50/50 dark:bg-gray-800/50 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="font-semibold text-gray-900 dark:text-gray-100">
          Table of Contents
        </h2>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        >
          {isExpanded ? <FiChevronDown size={14} /> : <FiChevronRight size={14} />}
        </button>
      </div>
      
      {isExpanded && (
        <nav className="mt-2 space-y-0.5 max-h-[60vh] overflow-y-auto pr-2 text-sm">
          {headings.map((heading, index) => (
            <button
              key={index}
              onClick={() => scrollToHeading(heading.slug)}
              className={`
                block w-full text-left py-1 px-2 rounded-md text-sm
                ${heading.level === 1 ? 'font-medium' : 'font-normal'}
                ${heading.level > 1 ? `ml-${(heading.level-1)*2}` : ''}
                ${activeId === heading.slug 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                }
                transition-colors duration-150
              `}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.content === nextProps.content;
}); 