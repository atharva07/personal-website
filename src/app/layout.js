import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'QA Portfolio | Professional Testing Solutions',
  description: 'Showcasing QA engineering projects and expertise',
  keywords: ['QA', 'Testing', 'Portfolio', 'Software Testing'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-screen bg-white">
        <header className="border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center justify-between">
              <div className="text-xl font-semibold">QA Portfolio</div>
              <div className="flex space-x-6">
                <a href="/" className="hover:text-blue-600">Home</a>
                <a href="/about" className="hover:text-blue-600">About</a>
                <a href="/projects" className="hover:text-blue-600">Projects</a>
              </div>
            </nav>
          </div>
        </header>
        
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        
        <footer className="border-t border-gray-200 py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p>© {new Date().getFullYear()} QA Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}