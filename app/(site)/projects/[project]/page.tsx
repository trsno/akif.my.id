import { getProject } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
	params: { project: string };
};

export default async function Project({ params }: Props) {
	const slug = params.project;
	const project = await getProject(slug);

	return project ? (
		<div>
			<h6 className='sub-heading'>Project</h6>
			<h1 className='heading'>{project.title}</h1>
			{project.image && (
				<Image
					className='mb-16 rounded-lg'
					src={project.image}
					alt={project.title}
					width={720}
					height={480}
				/>
			)}

			<div className='prose sm:prose-lg dark:prose-invert'>
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
			<div>
				{project.url.map((url, i) => (
					<a
						className='capitalize'
						key={i}
						href={url.url}
						target='_blank'>
						{url.text}
					</a>
				))}
			</div>
		</div>
	) : (
		notFound()
	);
}
