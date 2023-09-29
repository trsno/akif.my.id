'use client';
import Masonry from 'masonry-layout';
import { useEffect } from 'react';
export default function MasonryLayout() {
	useEffect(() => {
		new Masonry('#projects', { itemSelector: '.project', columnWidth: '.project' });
	}, []);
	return <></>;
}
