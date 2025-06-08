"use client";
import { useMemo } from 'react';
import Link from 'next/link';
import { useTheme } from '../../context/ThemeContext';
import { FiCalendar, FiClock, FiTag, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import TableOfContents from '../../components/TableOfContents';
import Header from '../../components/Header';
import PostMetadata from '../../components/PostMetadata';
import TagList from '../../components/TagList';
import ShareButtons from '../../components/ShareButtons';
import BlogPostContent from './BlogPostContent';
import RelatedPosts from '../../components/RelatedPosts';
import ReadingProgress from '../../components/ReadingProgress';
import GiscusComments from '../../components/GiscusComments';
import StructuredData from '../../components/StructuredData';
import CustomHead from '../../components/CustomHead';
import { useBlogPostMetadata } from '../../hooks/useMetadata';

export default function BlogPostClient({ content, frontmatter, allPosts }) {
  const { darkMode } = useTheme();

  const { readingTime, wordCount } = frontmatter;
  const baseUrl = 'https://pepryan.github.io/portfolio';

  // Generate metadata for CustomHead
  const blogMetadata = useBlogPostMetadata(frontmatter, baseUrl);

  // Get current post index and adjacent posts
  const currentIndex = allPosts.findIndex(post => post.slug === frontmatter.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <>
      <CustomHead {...blogMetadata} />
      <StructuredData post={frontmatter} baseUrl={baseUrl} />
      <div className={`min-h-screen ${darkMode ? 'dark bg-neutral-900' : 'bg-white'}`}>
      <Header />
      <ReadingProgress />
      
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-16 mt-8">
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
                slug={frontmatter.slug}
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
        <div className="mt-16 mb-16">
          <RelatedPosts 
            currentPost={frontmatter}
            posts={allPosts}
          />
        </div>

        {/* Disqus Comments */}
        <div className="mt-16 mb-16">
          <GiscusComments 
            slug={frontmatter.slug}
            title={frontmatter.title}
          />
        </div>

        {/* Post Navigation */}
        <nav className="border-t border-neutral-200 dark:border-neutral-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8">
            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                data-prev-post
                className="group p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl 
                  hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                  <FiArrowLeft className="w-4 h-4" />
                  <span>Previous Post</span>
                </div>
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100 
                  line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {prevPost.title}
                </h4>
              </Link>
            )}
            
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                data-next-post
                className={`group p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl 
                  hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors
                  ${!prevPost ? 'sm:col-start-2' : ''}`}
              >
                <div className="flex items-center justify-end gap-2 text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                  <span>Next Post</span>
                  <FiArrowRight className="w-4 h-4" />
                </div>
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100 text-right
                  line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {nextPost.title}
                </h4>
              </Link>
            )}
           </div>
         </nav>
       </main>
       </div>
     </>
   );
}
