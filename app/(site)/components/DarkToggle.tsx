'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
export default function DarkToggle() {
	const { theme, themes, setTheme } = useTheme();
	const [currentTheme, setCurrentTheme] = useState('light');
	useEffect(() => {
		let bg: string, fg: string, accent: string, xaccent: string;

		const onFocus = () => setFavicon(accent, xaccent);
		const onBlur = () => setFavicon(fg, bg);

		setTimeout(() => {
			accent = getComputedStyle(document.documentElement).getPropertyValue('--accent');
			xaccent = getComputedStyle(document.documentElement).getPropertyValue('--x-accent');
			bg = getComputedStyle(document.documentElement).getPropertyValue('--background');
			fg = getComputedStyle(document.documentElement).getPropertyValue('--text');

			document.querySelector('meta[name="theme-color"]')!.setAttribute('content', `rgb(${accent})`);
			setFavicon(accent, xaccent);
			window.addEventListener('focus', onFocus);
			window.addEventListener('blur', onBlur);
		});

		setCurrentTheme(theme!);

		return () => {
			window.removeEventListener('focus', onFocus);
			window.removeEventListener('blur', onBlur);
		};
	}, [theme]);

	const toggleDark = () => (theme!.indexOf('-dark') >= 0 ? setTheme(theme!.slice(0, -5)) : setTheme(theme + '-dark'));

	const changeTheme = () => {
		const allThemes = themes.filter((item) => item.includes('-dark') === theme!.includes('-dark'));
		setTheme(allThemes[(allThemes.indexOf(theme!) + 1) % allThemes.length]);
	};

	const setFavicon = (bg: string, fg: string) => {
		const favicon = `data:image/svg+xml,<svg fill='rgb(${bg})' viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'><rect width='500' height='500'/><path fill='rgb(${fg})' d='M 385.059 425.024 C 385.059 451.819 368.624 465.217 335.755 465.217 L 251.616 465.217 C 221.963 465.217 202.67 453.606 193.738 430.383 C 188.736 418.235 186.235 396.62 186.235 365.537 C 186.235 344.458 186.949 329.453 188.379 320.521 C 191.594 303.729 199.99 290.688 213.566 281.399 C 217.854 278.541 231.788 272.467 255.368 263.178 C 273.589 255.675 286.987 246.743 295.561 236.382 C 300.206 230.666 303.242 222.806 304.672 212.802 C 305.029 208.872 305.208 202.62 305.208 194.045 C 305.208 166.178 298.777 152.244 285.915 152.244 C 277.698 152.244 271.623 157.425 267.694 167.785 C 261.263 186.006 257.869 195.653 257.511 196.725 C 251.08 206.729 240.362 211.73 225.357 211.73 C 200.347 211.73 187.843 196.903 187.843 167.25 C 187.843 139.024 198.739 119.553 220.533 108.835 C 234.825 102.046 256.618 98.653 285.915 98.653 C 352.01 98.653 385.059 121.697 385.059 167.785 L 385.059 425.024 Z M 305.208 363.394 C 305.208 329.453 298.777 312.482 285.915 312.482 C 272.695 312.482 266.086 329.453 266.086 363.394 C 266.086 397.692 272.695 414.841 285.915 414.841 C 298.777 414.841 305.208 397.692 305.208 363.394 Z'/></svg>`;
		const link: HTMLLinkElement = window.document.querySelector("link[rel*='icon']") || window.document.createElement('link');
		link.type = 'image/svg+xml';
		link.rel = 'shortcut icon';
		link.href = encodeURI(favicon);
		window.document.getElementsByTagName('head')[0].appendChild(link);
	};
	return (
		<>
			<button
				onClick={changeTheme}
				className='inline-block p-2 text-text hover:text-accent align-middle'
				title={currentTheme}>
				<svg
					className='inline-block w-5 h-5'
					fill='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path d='M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z' />{' '}
				</svg>
			</button>
			<button
				onClick={toggleDark}
				className='inline-block p-2 text-text hover:text-accent align-middle'>
				<svg
					className='w-5 h-5'
					fill='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						className='hidden dark:inline-block'
						d='M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z'
					/>
					<path
						className='dark:hidden'
						d='M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13'
					/>
				</svg>
			</button>
		</>
	);
}
