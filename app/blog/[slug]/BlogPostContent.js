"use client";
import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '../../components/MDXComponents';

export default function BlogPostContent({ content }) {
  if (!content?.compiledSource) return null;

  return (
    <MDXRemote 
      {...content}
      components={{
        ...MDXComponents,
      }}
    />
  );
} 