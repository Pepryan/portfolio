"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Create a proper React component for pre
const PreBlock = ({ children, ...props }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const code = children.props.children;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="relative group">
      <pre {...props}>{children}</pre>
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 p-2 rounded bg-neutral-800/30 
          opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copy code"
      >
        {copied ? 'Copied!' : 'Copy'}
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