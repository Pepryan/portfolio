import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
import LayoutWrapper from './components/LayoutWrapper';

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
    'application/ld+json': JSON.stringify(structuredData),
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Default SEO Meta Tags - These will be overridden by page-specific metadata */}
        <title>Febryan Portfolio - Cloud Engineer & DevOps Specialist</title>
        <meta name="description" content="Personal portfolio and technical blog by Febryan Ramadhan. Cloud Engineer specializing in DevOps, Infrastructure, and Automation. Sharing tutorials and insights about modern technology." />
        <meta name="keywords" content="portfolio,blog,web development,javascript,react,next.js,cloud engineer,devops,infrastructure,automation" />
        <meta name="author" content="Febryan Ramadhan" />
        <meta name="creator" content="Febryan Ramadhan" />
        <meta name="publisher" content="Febryan Portfolio" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://pepryan.github.io/portfolio" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Febryan Portfolio - Cloud Engineer & DevOps Specialist" />
        <meta property="og:description" content="Personal portfolio and technical blog by Febryan Ramadhan. Cloud Engineer specializing in DevOps, Infrastructure, and Automation." />
        <meta property="og:image" content="https://pepryan.github.io/portfolio/images/default-og-image.png" />
        <meta property="og:url" content="https://pepryan.github.io/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Febryan Portfolio" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Febryan Portfolio - Cloud Engineer & DevOps Specialist" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Febryan Portfolio - Cloud Engineer & DevOps Specialist" />
        <meta name="twitter:description" content="Personal portfolio and technical blog by Febryan Ramadhan. Cloud Engineer specializing in DevOps, Infrastructure, and Automation." />
        <meta name="twitter:image" content="https://pepryan.github.io/portfolio/images/default-og-image.png" />
        <meta name="twitter:creator" content="@pepryan" />
        <meta name="twitter:site" content="@pepryan" />
        <meta name="twitter:domain" content="pepryan.github.io" />
        <meta name="twitter:url" content="https://pepryan.github.io/portfolio" />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
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
