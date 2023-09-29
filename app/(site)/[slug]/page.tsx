import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';


type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	return {
		title: params.slug[0].toUpperCase() + params.slug.slice(1)
	};
}

export default async function page({ params }: { params: { slug: string } }) {
	const page = await getPage(params.slug);
	return page ? (
		<>
			<h6 className='sub-heading'>{page.slug}</h6>
			<h1 className='heading'>{page.title}</h1>
			<div className={`page-${page.slug} prose sm:prose-lg dark:prose-invert`}>
				<PortableText value={page.content} />
			</div>
		</>
	) : (
		notFound()
	);
}
