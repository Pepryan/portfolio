import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
import LayoutWrapper from './components/LayoutWrapper';

export const metadata = {
  metadataBase: new URL('https://pepryan.github.io/portfolio'),
  title: {
    default: 'Febryan Portfolio - Cloud Engineer & DevOps Specialist',
    template: '%s | Febryan Portfolio'
  },
  description: 'Personal portfolio and technical blog by Febryan Ramadhan. Cloud Engineer specializing in DevOps, Infrastructure, and Automation. Sharing tutorials and insights about modern technology.',
  keywords: ['portfolio', 'blog', 'web development', 'javascript', 'react', 'next.js', 'cloud engineer', 'devops', 'infrastructure', 'automation'],
  authors: [{ name: 'Febryan Ramadhan', url: 'https://pepryan.github.io/portfolio' }],
  creator: 'Febryan Ramadhan',
  publisher: 'Febryan Portfolio',
  openGraph: {
    title: 'Febryan Portfolio - Cloud Engineer & DevOps Specialist',
    description: 'Personal portfolio and technical blog by Febryan Ramadhan. Cloud Engineer specializing in DevOps, Infrastructure, and Automation.',
    url: 'https://pepryan.github.io/portfolio',
    siteName: 'Febryan Portfolio',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: 'https://pepryan.github.io/portfolio/images/default-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Febryan Portfolio - Cloud Engineer & DevOps Specialist',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Febryan Portfolio - Cloud Engineer & DevOps Specialist',
    description: 'Personal portfolio and technical blog by Febryan Ramadhan. Cloud Engineer specializing in DevOps, Infrastructure, and Automation.',
    creator: '@pepryan',
    site: '@pepryan',
    images: ['https://pepryan.github.io/portfolio/images/default-og-image.png'],
  },
  alternates: {
    canonical: 'https://pepryan.github.io/portfolio',
  },
  other: {
    'twitter:domain': 'pepryan.github.io',
    'twitter:url': 'https://pepryan.github.io/portfolio',
    'theme-color': '#000000',
    'msapplication-TileColor': '#000000',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
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

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://pepryan.github.io/portfolio/#person",
    "name": "Febryan Ramadhan",
    "url": "https://pepryan.github.io/portfolio",
    "image": {
      "@type": "ImageObject",
      "url": "https://pepryan.github.io/portfolio/images/default-og-image.png",
      "width": 1200,
      "height": 630
    },
    "description": "Cloud Engineer specializing in DevOps, Infrastructure, and Automation",
    "jobTitle": "Cloud Engineer & DevOps Specialist",
    "worksFor": {
      "@type": "Organization",
      "name": "Technology Industry"
    },
    "knowsAbout": [
      "Cloud Computing",
      "DevOps",
      "Infrastructure as Code",
      "Automation",
      "Web Development",
      "JavaScript",
      "React",
      "Next.js"
    ],
    "sameAs": [
      "https://github.com/pepryan",
      "https://twitter.com/pepryan"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-white dark:bg-neutral-900">
        <ThemeProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
