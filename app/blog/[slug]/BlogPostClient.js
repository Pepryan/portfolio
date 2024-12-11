"use client";
import { useMemo } from 'react';
import Link from 'next/link';
import { useTheme } from '../../context/ThemeContext';
import { FiCalendar, FiClock, FiTag, FiArrowLeft } from 'react-icons/fi';
import TableOfContents from '../../components/TableOfContents';
import Header from '../../components/Header';
import PostMetadata from '../../components/PostMetadata';
import TagList from '../../components/TagList';
import ShareButtons from '../../components/ShareButtons';
import BlogPostContent from './BlogPostContent';
import RelatedPosts from '../../components/RelatedPosts';
import ReadingProgress from '../../components/ReadingProgress';
// import DisqusComments from '../../components/DisqusComments';

export default function BlogPostClient({ content, frontmatter, allPosts }) {
  const { darkMode } = useTheme();
  
  const { readingTime, wordCount } = frontmatter;

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-neutral-900' : 'bg-white'}`}>
      <Header />
      <ReadingProgress />
      
      <main className="max-w-7xl mx-auto px-4 pt-24">
        {/* Back to blog */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 mb-8 text-neutral-600 dark:text-neutral-400 
            hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to all posts
        </Link>

        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-8">
          {/* Main content */}
          <article className="prose dark:prose-invert max-w-none">
            {/* Title */}
            <h1 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
              {frontmatter.title}
            </h1>

            {/* Metadata */}
            <div className="mb-8">
              <PostMetadata
                date={frontmatter.date}
                updated={frontmatter.updated}
                readingTime={readingTime}
                wordCount={wordCount}
              />
            </div>

            {/* Tags */}
            <div className="mb-8">
              <TagList tags={frontmatter.tags} />
            </div>

            {/* Share buttons */}
            <div className="mb-8">
              <ShareButtons 
                title={frontmatter.title} 
                url={typeof window !== 'undefined' ? window.location.href : ''}
              />
            </div>

            {/* Mobile ToC */}
            <div className="mb-8 lg:hidden">
              <TableOfContents 
                content={frontmatter.rawContent} 
                defaultExpanded={false}
              />
            </div>

            {/* Content */}
            <div className="mt-8">
              <BlogPostContent content={content} />
            </div>
          </article>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 w-[280px]">
              <TableOfContents 
                content={frontmatter.rawContent}
                defaultExpanded={true}
              />
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        <RelatedPosts 
          currentPost={frontmatter}
          posts={allPosts}
        />
      </main>
    </div>
  );
} 