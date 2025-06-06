import { getPosts } from '../lib/getPosts';
import BlogList from './BlogList';

export const metadata = {
  title: 'Blog | Febryan Portfolio',
  description: 'Technical blog posts about cloud engineering, DevOps, infrastructure, automation, and modern web development by Febryan Ramadhan.',
  keywords: ['blog', 'cloud engineering', 'devops', 'infrastructure', 'automation', 'kubernetes', 'docker', 'aws', 'tutorials'],
  openGraph: {
    title: 'Blog | Febryan Portfolio',
    description: 'Technical blog posts about cloud engineering, DevOps, infrastructure, automation, and modern web development.',
    url: 'https://pepryan.github.io/portfolio/blog',
    siteName: 'Febryan Portfolio',
    images: [
      {
        url: 'https://pepryan.github.io/portfolio/images/default-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Febryan Portfolio Blog',
      }
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Febryan Portfolio',
    description: 'Technical blog posts about cloud engineering, DevOps, infrastructure, automation, and modern web development.',
    images: ['https://pepryan.github.io/portfolio/images/default-og-image.png'],
    creator: '@pepryan',
    site: '@pepryan',
  },
  other: {
    'twitter:domain': 'pepryan.github.io',
    'twitter:url': 'https://pepryan.github.io/portfolio/blog',
  },
};

export default function BlogPage() {
  const posts = getPosts();
  return <BlogList posts={posts} />;
}