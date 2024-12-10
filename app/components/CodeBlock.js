"use client";
import { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

export default function CodeBlock({ children, className, title }) {
  const [copied, setCopied] = useState(false);
  
  // Ekstrak kode dari children dengan cara yang lebih robust
  const extractCode = (node) => {
    if (typeof node === 'string') return node;
    if (!node) return '';
    
    // Handle array
    if (Array.isArray(node)) {
      return node.map(extractCode).join('');
    }
    
    // Handle object dengan children
    if (node.props?.children) {
      return extractCode(node.props.children);
    }
    
    return '';
  };

  const code = extractCode(children);
  
  // Handle berbagai format className yang mungkin diterima
  const language = className?.split(' ')
    .find(cls => cls.startsWith('language-'))
    ?.replace('language-', '') || 'text';

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-6 overflow-hidden rounded-xl bg-[#1e1f22] dark:bg-[#1e1f22]">
      {/* Header with language and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#2a2b2e] dark:bg-[#2a2b2e]">
        <div className="flex items-center gap-2">
          {title && (
            <span className="text-sm text-neutral-300">{title}</span>
          )}
          <span className="text-xs text-neutral-400 font-mono">
            {language}
          </span>
        </div>
        <button
          onClick={copyCode}
          className="flex items-center gap-1 text-xs text-neutral-400 hover:text-neutral-200 
            transition-colors"
        >
          {copied ? (
            <>
              <FiCheck className="w-4 h-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <FiCopy className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm leading-6">
          <code className={`language-${language}`}>
            {code.split('\n').map((line, i) => (
              <span key={i} className="block">
                <span className="mr-4 inline-block w-4 text-right text-neutral-600 select-none">
                  {i + 1}
                </span>
                <span className="text-neutral-200">{line || '\n'}</span>
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
} 