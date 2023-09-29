import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Akif Al Hakim | Freelance Frontend Developer',
	description: 'Freelance Frontend Developer'
};

export default async function Home() {
	return (
		<>
			<section>
				<h6 className='sub-heading'>Introduction</h6>
				<h1 className='heading'>Hello There</h1>
				<p className='text-xl sm:text-2xl'>
					My name is <span className='text-transparent font-bold bg-clip-text bg-gradient-to-t from-primary to-accent'>Akif Al Hakim</span>, and I make websites.
					<br />
					My primary skill is frontend, with a strong focus on responsive designs, performance & future maintainability using the latest frontend technologies & best practices.
					<br />
					<br />
					Based in Bogor, Indonesia
				</p>
			</section>
		</>
	);
}
