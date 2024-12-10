"use client";
import Image from 'next/image';
import Link from 'next/link';
import CodeBlock from './CodeBlock';

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
  // Custom components
  pre: ({ children }) => children,
  // Inline code
  code: ({ className, children }) => {
    // Jika ada className, berarti ini code block
    if (className) {
      return <CodeBlock className={className}>{children}</CodeBlock>;
    }
    // Jika tidak ada className, berarti ini inline code
    return (
      <code className="px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 
        text-neutral-800 dark:text-neutral-200 text-sm">
        {children}
      </code>
    );
  },
};

export default MDXComponents; 