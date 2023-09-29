import { getProjects } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects',
	description: `These are some of the things I've done`
};

export default async function Projects() {
	const projects = await getProjects();
	const MasonryLayout = dynamic(() => import('./Masonry'), { ssr: false });
	return (
		<>
			<h6 className='sub-heading'>Projects</h6>
			<h1 className='heading'>First-World Problem Solvers</h1>
			<div
				id='projects'
				className='-m-4 sm:-m-8'>
				{projects
					.sort((a, b) => b.index - a.index)
					.map((project) => {
						return (
							<div
								key={project._id}
								className='project w-full sm:w-1/2 px-2 py-4 sm:p-4 float-left'
								style={{ counterIncrement: 'steps' }}>
								<div className='grid auto-rows-max h-max gap-x-6 rounded-lg px-2 py-4 sm:p-4'>
									<h1 className='relative font-medium text-xl sm:text-2xl mb-2 xl:before:content-[counters(steps,".")] before:absolute before:-left-4 before:text-text/50 before:-translate-x-full'>
										{project.title}
									</h1>
									<div className='prose sm:prose-lg dark:prose-invert text-balance'>
										<PortableText value={project.description} />
									</div>
									<div className='my-6'>
										{project.icons &&
											project.icons.split(',').map((icon) => {
												return (
													<svg
														key={icon}
														className='inline-block mr-4 h-5 aspect-square'>
														<image
															className='w-full h-full'
															xlinkHref={`https://cdn.simpleicons.org/${icon}/fff/fff`}
															filter='url(#colorMask3)'
														/>
													</svg>
												);
											})}
									</div>
									<div>
										{project.url.map((url, i) => (
											<>
												{i !== 0 && <span className='mx-2.5 inline-block'>·</span>}
												<a
													className='capitalize'
													key={i}
													href={url.url}
													target='_blank'>
													{url.text}
												</a>
											</>
										))}
									</div>
								</div>
							</div>
						);
					})}

				<svg
					className='absolute text-text'
					xmlns='http://www.w3.org/2000/svg'
					version='1.1'>
					<defs>
						<filter id='colorMask3'>
							<feFlood
								floodColor='currentColor'
								result='flood'
							/>
							<feComposite
								in='SourceGraphic'
								in2='flood'
								operator='arithmetic'
								k1='1'
								k2='0'
								k3='0'
								k4='0'
							/>
						</filter>
					</defs>
				</svg>
			</div>
			<MasonryLayout />
		</>
	);
}
