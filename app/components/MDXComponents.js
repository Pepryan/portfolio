"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { FiCopy, FiCheck, FiX } from 'react-icons/fi';
import { createPortal } from 'react-dom';

// Create a proper React component for pre
const PreBlock = ({ children, ...props }) => {
  const [copied, setCopied] = useState(false);
  const preRef = useRef(null);

  const handleCopy = async () => {
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

// Add ImageWithLightbox component
const ImageWithLightbox = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <span 
        role="button"
        tabIndex={0}
        className="inline-block"
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setIsOpen(true);
        }}
      >
        <Image
          {...props}
          width={800}
          height={400}
          style={{ height: 'auto' }}
          priority={true}
          className="my-8 rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
          alt={props.alt || ''}
        />
      </span>

      {isOpen && isMounted && createPortal(
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button 
            className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            aria-label="Close image preview"
          >
            <FiX className="w-6 h-6" />
          </button>
          
          <Image
            {...props}
            width={1200}
            height={800}
            style={{ height: 'auto', maxHeight: '90vh', width: 'auto', maxWidth: '90vw' }}
            className="rounded-lg"
            loading="lazy"
            alt={props.alt || ''}
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </>
  );
};

const MDXComponents = {
  // Basic elements
  img: (props) => <ImageWithLightbox {...props} />,
  a: ({ href, children }) => (
    <Link href={href} className="text-blue-500 hover:text-blue-600">
      {children}
    </Link>
  ),
  pre: PreBlock,
  // Add a custom component for code blocks with titles
  // codeBlock: ({ title, children }) => (
  //   <figure className="my-4">
  //     {title && <h3 className="text-lg font-semibold mb-1">{title}</h3>}
  //     <pre className="bg-gray-100 p-4 rounded-md">{children}</pre>
  //   </figure>
  // ),
  // code: ({ children, className }) => {
  //   return (
  //     <code className={className}>
  //       {children}
  //     </code>
  //   );
  // }
};

export default MDXComponents; 