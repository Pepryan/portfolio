import './globals.css';

export const metadata = {
  title: 'Redirecting... | #FreePalestine',
  description: 'Site discontinued in solidarity with Palestine. From the river to the sea, Palestine will be free.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="refresh" content="20;url=https://febryan.web.id" />
        <link rel="icon" href="/portfolio/favicon.ico" type="image/x-icon" />
      </head>
      <body suppressHydrationWarning className="bg-gray-900">
        {children}
      </body>
    </html>
  );
}
