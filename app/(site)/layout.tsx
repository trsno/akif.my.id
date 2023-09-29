import '../globals.css';
import type { Metadata } from 'next';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { Providers } from './Providers';
import { Roboto } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto({
	weight: ['400', '500', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap'
});

export const metadata: Metadata = {
	title: {
		template: '%s | Akif Al Hakim',
		default: 'Akif Al Hakim'
	},
	description: 'Freelance Frontend Developer',
	themeColor: 'rgb(var(--accent))',
	viewport: {
		width: 'device-width',
		initialScale: 1,
		minimumScale: 1,
		maximumScale: 1,
		userScalable: false,
		viewportFit: 'cover'
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className={`${roboto.className} primary-accent h-max selection:bg-accent/30 selection:text-accent overflow-x-hidden`}
			suppressHydrationWarning>
			<body className='bg-background text-text w-full h-max min-h-screen text-base sm:text-lg'>
				<Providers>
					<div className='min-h-screen flex flex-col justify-between border-t-8 border-accent'>
						<Nav />
						<main className='max-w-6xl w-full mx-auto mb-8 sm:mb-16 p-6'>{children}</main>
						<Footer />
					</div>
				</Providers>
				<Analytics />
			</body>
		</html>
	);
}
