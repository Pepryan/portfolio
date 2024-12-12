import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
import LayoutWrapper from './components/LayoutWrapper';

export const metadata = {
  metadataBase: new URL('https://pepryan.github.io/portfolio'),
  title: {
    default: 'Febryan Portfolio',
    template: '%s | Febryan Portfolio'
  },
  description: 'Personal portfolio and blog by Febryan',
  keywords: ['portfolio', 'blog', 'web development', 'javascript', 'react', 'next.js'],
  authors: [{ name: 'Febryan' }],
  openGraph: {
    title: 'Febryan Portfolio',
    description: 'Personal portfolio and blog by Febryan',
    url: 'https://pepryan.github.io/portfolio',
    siteName: 'Febryan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
