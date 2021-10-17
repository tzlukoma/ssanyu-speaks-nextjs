import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

function MyCustomForm({ status, message, onValidated }) {
	const [email, setEmail] = useState(null)
	const [error, setError] = useState(null)

	console.log(email)
	const submit = () => {
		setError(null);

		if (!email) {
			setError('Please enter a valid email address');
			return null;
		}

		const isFormValidated = onValidated({ EMAIL: email });

		// On success return true
		return email && email.indexOf("@") > -1 && isFormValidated;
	}

	return (
		<div className="bg-white p-8 md:p-10 lg:p-16 rounded shadow-lg w-full mb-10 border-2 border-gray-200 ">
			<h2 className="font-sans text-xl font-bold sm:text-2xl xl:text-2xl 2xl:text-4xl mb-3 xl:mb-5 md:mb-10">{`Sign up for updates on what I'm up to`}</h2>
			<div className="space-y-3 xl:space-y-5 xl:text-xl 2xl:text-2xl">
				<label className="block mb-1 font-bold text-gray-500 ">Email Address</label>
				<input
					className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-secondary-600"
					onChange={(event) => setEmail(event?.target?.value ?? '')}
					type="email"
					placeholder="you@awesome.com"
					required
				/>
				{status === "sending" && <div className="text-primary-400">sending...</div>}
				{status === "error" && (
					<div
						className="text-red-500"
						dangerouslySetInnerHTML={{ __html: message }}
					/>
				)}
				{status === "success" && (
					<div
						className="text-green-700"
						dangerouslySetInnerHTML={{ __html: message }}
					/>
				)}
				<button className="block w-full bg-primary-400 hover:bg-primary-300 p-4 rounded text-white hover:text-white uppercase transition duration-300" onClick={submit}>{`Subscribe`}</button>
			</div>
		</div>
	);
}

export const Subscribe = () => (
	<MailchimpSubscribe
		url={MAILCHIMP_URL}
		render={({ subscribe, status, message }) => (
			<MyCustomForm
				status={status}
				message={message}
				onValidated={formData => subscribe(formData)}
			/>
		)}
	/>
)
