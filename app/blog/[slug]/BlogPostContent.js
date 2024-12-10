"use client";
import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '../../components/MDXComponents';
import CodeBlock from '../../components/CodeBlock';

export default function BlogPostContent({ content }) {
  if (!content?.compiledSource) return null;

  return (
    <MDXRemote 
      {...content}
      components={{
        ...MDXComponents,
        CodeBlock,
        // Override pre component untuk menghindari nested pre elements
        pre: ({ children }) => children,
      }}
    />
  );
} 