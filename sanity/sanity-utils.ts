import { createClient, groq } from 'next-sanity';
import { PortableTextBlock } from 'sanity';
import config from '@/sanity.config';

const clientConfig = {
	...config,
	useCdn: true
};

type Page = {
	_id: string;
	_createdAt: Date;
	title: string;
	slug: string;
	content: PortableTextBlock[];
};

type Project = {
	index: number;
	_id: string;
	_createdAt: Date;
	title: string;
	slug: string;
	image: string;
	url: { url: string; text: string }[];
	icons: string;
	description: PortableTextBlock[];
};

export async function getProjects(): Promise<Project[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type=='project']{
			_id,
			_createdAt,
			index,
			title,
			'slug': slug.current,
			url,
			icons,
			description
		}`
	);
}

export const getProject = async (slug: string): Promise<Project> => {
	return createClient(clientConfig).fetch(
		groq`*[_type=='project' && slug.current == $slug][0]{
			_id,
			_createdAt,
			title,
			'slug': slug.current,
			'image': image.asset -> url,
			url,
			icons,
			description
		}`,
		{ slug }
	);
};

export async function getPages(): Promise<Page[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type=='page']{
			_id,
			_createdAt,
			title,
			'slug': slug.current
		}`
	);
}

export const getPage = async (slug: string): Promise<Page> => {
	return createClient(clientConfig).fetch(
		groq`*[_type=='page' && slug.current == $slug][0]{
			_id,
			_createdAt,
			title,
			'slug': slug.current,
			content
		}`,
		{ slug }
	);
};
