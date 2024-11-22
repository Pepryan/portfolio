"use client";
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import sql from 'react-syntax-highlighter/dist/cjs/languages/prism/sql';

// Register languages
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('sql', sql);

const CodeBlock = ({ children, className }) => {
  const [copied, setCopied] = useState(false);
  const { darkMode } = useTheme();
  const language = className ? className.replace('language-', '') : 'text';
  const code = children.trim();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className={`
          absolute top-2 right-2 p-2 rounded-md text-sm z-10
          ${darkMode 
            ? 'bg-gray-700/50 hover:bg-gray-700 text-gray-300' 
            : 'bg-gray-100/50 hover:bg-gray-200 text-gray-700'
          }
          opacity-0 group-hover:opacity-100 transition-all duration-200
        `}
      >
        {copied ? <FiCheck className="w-4 h-4" /> : <FiCopy className="w-4 h-4" />}
      </button>
      <SyntaxHighlighter
        language={language}
        style={darkMode ? oneDark : oneLight}
        customStyle={{
          margin: 0,
          borderRadius: '0.5rem',
          padding: '1rem',
          backgroundColor: darkMode ? '#1f2937' : '#f8fafc',
        }}
        showLineNumbers={true}
        wrapLines={true}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const MDXComponents = {
  pre: ({ children }) => children,
  code: ({ children, className }) => {
    if (className) {
      return <CodeBlock className={className}>{children}</CodeBlock>;
    }
    return (
      <code 
        className={`
          px-1.5 py-0.5 rounded-md text-sm
          ${darkMode 
            ? 'bg-gray-800 text-gray-200' 
            : 'bg-gray-100 text-gray-800'
          }
        `}
      >
        {children}
      </code>
    );
  },
};

export default MDXComponents; 