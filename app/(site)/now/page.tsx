
import { Metadata } from 'next';
import now from './now';

export const metadata: Metadata = {
	title: 'Now',
	description: `What I'm doing now`
};
export default async function Now() {
	const [tracks, movies, series, games, books] = await now();
	return (
		<>
			<h6 className='sub-heading'>Now</h6>
			<h1 className='heading'>
				What I&apos;m doing{' '}
				<a
					className='underline decoration-2 decoration-accent after:hidden'
					href='https://nownownow.com/about'
					target='_blank'>
					now
				</a>
			</h1>
			<section className={`prose sm:prose-lg dark:prose-invert`}>
				{tracks && (
					<>
						<h2>Recent Tracks</h2>
						<ul className='text-2xl list-disc'>
							{tracks.map((track: string[], index: number) => {
								const [artist, title, cover, date, url] = track;
								return (
									<li key={index}>
										<a
											href={url}
											target='_blank'>
											{artist} - {title}
										</a>
										<span className='text-xs inline-block text-accent/50 ml-1'>🎧 {date}</span>
									</li>
								);
							})}
						</ul>
					</>
				)}

				{movies && (
					<>
						<h2>Recent Movies</h2>
						<ul className='text-2xl list-disc'>
							{movies.map((movie: [string, { id: string; title: string; year: string }], index: number) => {
								const [added, mov] = movie;
								return (
									<li key={index}>
										<a
											href={`https://imdb.com/title/${mov.id}`}
											target='_blank'>
											{mov.title} ({mov.year})
										</a>
										<span className='text-xs inline-block text-accent/50 ml-1'>📺 {added}</span>
									</li>
								);
							})}
						</ul>
					</>
				)}
				{series && (
					<>
						<h2>Recent Series</h2>
						<ul className='text-2xl list-disc'>
							{series.map((movie: [string, { id: string; title: string; year: string }], index: number) => {
								const [added, mov] = movie;
								return (
									<li key={index}>
										<a
											href={`https://imdb.com/${mov.id}`}
											target='_blank'>
											{mov.title} ({mov.year})
										</a>
										<span className='text-xs inline-block text-accent/50 ml-1'>📺 {added}</span>
									</li>
								);
							})}
						</ul>
					</>
				)}
			</section>
		</>
	);
}
