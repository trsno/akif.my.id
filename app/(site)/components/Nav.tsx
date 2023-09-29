'use client';

import { usePathname } from 'next/navigation';
import DarkToggle from './DarkToggle';
import Link from 'next/link';
export default function Nav() {
	const pathname = usePathname();
	return (
		<nav className='my-2 sm:my-12'>
			<div className='max-w-6xl flex flex-wrap items-center justify-between mx-auto p-6'>
				<Link
					href='/'
					className='flex items-center'>
					<svg
						className='fill-accent w-8 hover:fill-text'
						viewBox='0 0 500 500'
						xmlns='http://www.w3.org/2000/svg'>
						<rect
							width='500'
							height='500'
						/>
						<path
							className='fill-background'
							d='M 385.059 425.024 C 385.059 451.819 368.624 465.217 335.755 465.217 L 251.616 465.217 C 221.963 465.217 202.67 453.606 193.738 430.383 C 188.736 418.235 186.235 396.62 186.235 365.537 C 186.235 344.458 186.949 329.453 188.379 320.521 C 191.594 303.729 199.99 290.688 213.566 281.399 C 217.854 278.541 231.788 272.467 255.368 263.178 C 273.589 255.675 286.987 246.743 295.561 236.382 C 300.206 230.666 303.242 222.806 304.672 212.802 C 305.029 208.872 305.208 202.62 305.208 194.045 C 305.208 166.178 298.777 152.244 285.915 152.244 C 277.698 152.244 271.623 157.425 267.694 167.785 C 261.263 186.006 257.869 195.653 257.511 196.725 C 251.08 206.729 240.362 211.73 225.357 211.73 C 200.347 211.73 187.843 196.903 187.843 167.25 C 187.843 139.024 198.739 119.553 220.533 108.835 C 234.825 102.046 256.618 98.653 285.915 98.653 C 352.01 98.653 385.059 121.697 385.059 167.785 L 385.059 425.024 Z M 305.208 363.394 C 305.208 329.453 298.777 312.482 285.915 312.482 C 272.695 312.482 266.086 329.453 266.086 363.394 C 266.086 397.692 272.695 414.841 285.915 414.841 C 298.777 414.841 305.208 397.692 305.208 363.394 Z'
						/>
					</svg>
				</Link>
				<div className='w-auto'>
					<ul className='font-medium flex flex-row space-x-2 sm:space-x-4 -mr-3 sm:mr-0'>
						{[
							['Home', '/'],
							['Projects', '/projects'],
							['Contact', '/contact'],
							['darktoggle', '']
						].map(([text, url], i, arr) => (
							<li
								key={i}
								className={`relative first:hidden sm:first:block hover:text-accent ${
									pathname === url
										? 'text-accent after:bg-accent/50 after:rounded after:content-[""] after:absolute after:w-4 after:h-1 after:mx-auto after:-bottom-0 after:left-0 after:right-0'
										: ''
								}`}>
								{arr.length === i + 1 ? (
									<DarkToggle />
								) : (
									<Link
										href={url}
										className='block p-2'
										aria-current='page'>
										{text}
									</Link>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
