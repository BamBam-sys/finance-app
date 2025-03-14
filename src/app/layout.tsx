import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import MobileMenu from '@/components/MobileMenu';

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  display: 'swap',
  adjustFontFallback: false,
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Finance App',
  description: 'Personal finance application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable}  antialiased`}>
        <div className="flex justify-center max-w-[375px] md:max-w-[768px] lg:max-w-[1140px] xl:max-w-[1440px] mx-auto ">
          <Sidebar className="hidden xl:flex h-screen flex-1 max-w-[300px] " />
          <main className="h-screen flex-1 max-w-[1140px] bg-beige-100 py-6 md:py-8 px-4 md:px-10 overflow-y-scroll scrollbar ">
            {children}
          </main>
        </div>
        <MobileMenu className="max-w-[375px] md:max-w-[768px] lg:max-w-[1140px] xl:max-w-[1440px] mx-auto sticky bottom-0 xl:hidden text-white" />{' '}
      </body>
    </html>
  );
}
