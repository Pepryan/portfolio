import { getPosts } from '../../lib/getPosts';
import ArchivePageClient from './ArchivePageClient';

export const metadata = {
  title: 'Blog Archive | Febryan Portfolio',
  description: 'Browse all blog posts organized by date. Find technical articles about cloud engineering, DevOps, infrastructure, and automation.',
  keywords: ['blog archive', 'cloud engineering', 'devops', 'infrastructure', 'automation', 'tutorials', 'technical articles'],
  authors: [{ name: 'Febryan Ramadhan', url: 'https://pepryan.github.io/portfolio' }],
  creator: 'Febryan Ramadhan',
  publisher: 'Febryan Portfolio',
  openGraph: {
    title: 'Blog Archive | Febryan Portfolio',
    description: 'Browse all blog posts organized by date. Find technical articles about cloud engineering, DevOps, infrastructure, and automation.',
    url: 'https://pepryan.github.io/portfolio/blog/archive',
    siteName: 'Febryan Portfolio',
    images: [
      {
        url: 'https://pepryan.github.io/portfolio/images/default-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Febryan Portfolio Blog Archive',
      }
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Archive | Febryan Portfolio',
    description: 'Browse all blog posts organized by date. Find technical articles about cloud engineering, DevOps, infrastructure, and automation.',
    images: ['https://pepryan.github.io/portfolio/images/default-og-image.png'],
    creator: '@pepryan',
    site: '@pepryan',
  },
  alternates: {
    canonical: 'https://pepryan.github.io/portfolio/blog/archive',
  },
  other: {
    'twitter:domain': 'pepryan.github.io',
    'twitter:url': 'https://pepryan.github.io/portfolio/blog/archive',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ArchivePage() {
  const posts = getPosts();
  
  // Group posts by year and month
  const groupedPosts = posts.reduce((acc, post) => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    
    if (!acc[year]) {
      acc[year] = {};
    }
    if (!acc[year][month]) {
      acc[year][month] = [];
    }
    acc[year][month].push(post);
    
    return acc;
  }, {});

  return <ArchivePageClient groupedPosts={groupedPosts} />;
}