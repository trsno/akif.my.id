import Link from 'next/link';
// import { getPages } from '@/sanity/sanity-utils';
export default async function Footer() {
	// const pages = await getPages();
	return (
		<footer className='bg-black/5 dark:bg-black/20 py-16'>
			<div className='max-w-6xl w-full grid grid-row-auto mx-auto p-6 gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
				<div>
					<h6 className='sub-heading'>site</h6>
					{[
						{ _id: 0, slug: '', title: 'Home' },
						{ _id: 1, slug: 'projects', title: 'Projects' },
						/*...pages,*/
						{ _id: 3, slug: 'uses', title: 'Uses' },
						{ _id: 4, slug: 'contact', title: 'Contact' }
					].map((page) => (
						<Link
							className='block hover:underline w-max hover:text-accent capitalize mb-1'
							key={page._id}
							href={`/${page.slug}`}>
							{page.slug || page.title}
						</Link>
					))}
				</div>
				<div>
					<h6 className='sub-heading'>links</h6>
					{[
						['Codepen', 'https://codepen.io/akif'],
						['Github', 'https://github.com/trsno/'],
						['Fiverr', 'https://www.fiverr.com/flywithlovepls'],
						['Upwork', '#'],
						['LinkedIn', '#'],
						['Résumé', '#']
					].map(([text, url], i) => (
						<Link
							className='block w-max capitalize mb-1'
							key={i}
							href={url}>
							{text}
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
}
