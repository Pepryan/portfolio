import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
import LayoutWrapper from './components/LayoutWrapper';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
