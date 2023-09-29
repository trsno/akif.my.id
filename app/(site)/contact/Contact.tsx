'use client';

import { FormEvent, useState } from 'react';
export default function Contact() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsLoading(true);
		setError(null);

		try {
			const formData = new FormData(event.currentTarget);
			const response = await fetch('/send', {
				method: 'POST',
				body: formData
			});

			if (!response.ok) {
				throw new Error('Failed to submit the data. Please try again.');
			}

			setIsSuccess(true);
		} catch (error) {
			let message;
			if (error instanceof Error) message = error.message;
			else message = String(error);
			setError(message);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<>
			<h6 className='sub-heading'>Contact</h6>
			<section>
				{isSuccess ? (
					<>
						<h1 className='heading'>Message sent</h1>
						<p>
							Thank you for reaching out,
							<br />
							Have a great day!
						</p>
					</>
				) : (
					<form onSubmit={onSubmit}>
						<fieldset className='grid grid-flow-row auto-rows-max gap-y-4 max-w-md w-full'>
							<legend className='heading'>Let&apos;s Connect</legend>
							<p>
								Whether it&apos;s a question, would like to collaborate, or just a friendly hello, shoot me a message here or simply email{' '}
								<a href='mailto:mail@akif.my.id'>mail@akif.my.id</a>.
							</p>
							<div className='flex flex-col gap-4 rounded-lg'>
								<div className='relative z-0 w-full group'>
									<input
										type='text'
										name='name'
										id='name'
										className='ease-out duration-300 block rounded-lg pt-3 pb-2 px-2.5 w-full appearance-none focus:outline-none bg-transparent border border-b-2 border-accent/25 focus:border-accent/50 focus:border-b-accent/75 peer caret-accent hover:ring-4 focus:ring-4 hover:ring-primary/10 focus:ring-primary/20'
										placeholder=''
										required
									/>
									<label
										htmlFor='name'
										className='px-3 peer-focus:px-1 peer-focus:bg-background peer-focus:font-medium absolute duration-300 transform -translate-y-7 scale-75 top-3 origin-[0] peer-focus:left-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7'>
										Name
									</label>
								</div>
								<div className='relative z-0 w-full group'>
									<input
										type='email'
										name='email'
										id='email'
										className='ease-out duration-300 block rounded-lg pt-3 pb-2 px-2.5 w-full appearance-none focus:outline-none bg-transparent border border-b-2 border-accent/25 focus:border-accent/50 focus:border-b-accent/75 peer caret-accent hover:ring-4 focus:ring-4 hover:ring-primary/10 focus:ring-primary/20'
										placeholder=''
										required
									/>
									<label
										htmlFor='email'
										className='px-3 peer-focus:px-1 peer-focus:bg-background peer-focus:font-medium absolute duration-300 transform -translate-y-7 scale-75 top-3 origin-[0] peer-focus:left-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7'>
										Email address
									</label>
								</div>
								<div className='relative z-0 w-full group'>
									<input
										type='text'
										name='subject'
										id='subject'
										placeholder=''
										className='ease-out duration-300 block rounded-lg pt-3 pb-2 px-2.5 w-full appearance-none focus:outline-none bg-transparent border border-b-2 border-accent/25 focus:border-accent/50 focus:border-b-accent/75 peer caret-accent hover:ring-4 focus:ring-4 hover:ring-primary/10 focus:ring-primary/20'
										required
									/>
									<label
										htmlFor='subject'
										className='px-3 peer-focus:px-1 peer-focus:bg-background peer-focus:font-medium absolute duration-300 transform -translate-y-7 scale-75 top-3 origin-[0] peer-focus:left-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7'>
										Subject
									</label>
								</div>
								<div className='relative z-0 w-full group'>
									<textarea
										id='message'
										name='message'
										rows={4}
										className='ease-out duration-300 block rounded-lg pt-3 pb-2 px-2.5 w-full appearance-none focus:outline-none bg-transparent border border-b-2 border-accent/25 focus:border-accent/50 focus:border-b-accent/75 peer caret-accent hover:ring-4 focus:ring-4 hover:ring-primary/10 focus:ring-primary/20'
										placeholder=''
										required></textarea>
									<label
										htmlFor='message'
										className='px-3 peer-focus:px-1 peer-focus:bg-background peer-focus:font-medium absolute duration-300 transform -translate-y-7 scale-75 top-3 origin-[0] peer-focus:left-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7'>
										Message
									</label>
								</div>
								<div>
									{error && <div className='bg-[#0002] text-red-500 p-2.5 font-bold'>{error}</div>}
									<button
										disabled={isLoading || isSuccess}
										type='submit'
										className='px-5 py-2.5 ease-out duration-300 items-center bg-primary rounded-lg text-center text-x-primary outline-none hover:ring-4 focus:ring-4 hover:ring-primary/10 focus:ring-primary/20'>
										<svg
											className='w-3.5 h-3.5 inline fill-x-primary mr-2'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 16'>
											<path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
											<path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
										</svg>
										{isLoading ? 'Sending...' : 'Send'}
									</button>
								</div>
							</div>
						</fieldset>
					</form>
				)}
			</section>
		</>
	);
}
