import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Deru',
    description: "Delvan Ramadhan's Portofolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
