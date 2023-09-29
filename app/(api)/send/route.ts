import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const subject = formData.get('subject');
		const message = formData.get('message');
		const data = await resend.emails.send({
			from: `${name} <ContactForm@resend.dev>`,
			to: ['akifalhakim@gmail.com'],
			subject: `${subject}`,
			html: `from: ${name} <<a href='mailto:${email}'>${email}</a>><br/>subject: ${subject}<br/>message: ${message}`
		});

		return NextResponse.json(data.id);
	} catch (error) {
		return NextResponse.json({ error });
	}
}
