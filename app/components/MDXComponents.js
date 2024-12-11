"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

// Create a proper React component for pre
const PreBlock = ({ children, ...props }) => {
  const [copied, setCopied] = useState(false);
  const preRef = useRef(null);

  const handleCopy = async () => {
    // Gunakan ref untuk mengakses elemen pre yang spesifik
    const codeElement = preRef.current?.querySelector('code');
    const textToCopy = codeElement?.textContent || '';
    
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative group">
      <pre ref={preRef} {...props}>{children}</pre>
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 p-2 rounded-md 
          bg-neutral-100 dark:bg-neutral-800 
          text-neutral-600 dark:text-neutral-400
          opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copy code"
      >
        {copied ? (
          <FiCheck className="w-4 h-4 text-green-500" />
        ) : (
          <FiCopy className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};

const MDXComponents = {
  // Basic elements
  img: (props) => (
    <Image
      {...props}
      width={800}
      height={400}
      className="my-8 rounded-lg"
      loading="lazy"
      alt={props.alt || ''}
    />
  ),
  a: ({ href, children }) => (
    <Link href={href} className="text-blue-500 hover:text-blue-600">
      {children}
    </Link>
  ),
  pre: PreBlock,
  code: ({ children, className }) => {
    return (
      <code className={className}>
        {children}
      </code>
    );
  }
};

export default MDXComponents; 