import Contact from './Contact';

import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Contact',
	description: `Get in touch.`
};
export default function ContactServer() {
	return <Contact />;
}
