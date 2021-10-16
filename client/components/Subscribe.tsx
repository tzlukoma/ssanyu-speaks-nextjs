import React, { useRef, useState } from 'react';

function Subscribe() {
	// 1. Create a reference to the input so we can fetch/clear it's value.
	const inputEl = useRef(null);
	// 2. Hold a message in state to handle the response from our API.
	const [message, setMessage] = useState('');

	const subscribe = async (e) => {
		e.preventDefault();

		// 3. Send a request to our API with the user's email address.
		const res = await fetch('/api/subscribe', {
			body: JSON.stringify({
				email: inputEl.current.value,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});

		const response = await res.json();

		if (response.error) {
			// 4. If there was an error, update the message in state.
			setMessage(response.error);

			return;
		}

		// 5. Clear the input value and show a success message.
		inputEl.current.value = '';
		setMessage('Success! 🎉 You are now subscribed to the newsletter.');
	};

	return (
		<div className="bg-white p-8 md:p-10 lg:p-16 rounded shadow-lg w-full mb-10">
			<h2 className="font-sans text-xl font-bold sm:text-2xl xl:text-3xl 2xl:text-4xl mb-3 xl:mb-5 md:mb-10">{`Sign up for updates on what I'm up to`}</h2>
			<form className="space-y-3 xl:space-y-5 xl:text-xl 2xl:text-2xl">
				<label className="block mb-1 font-bold text-gray-500 ">Email Address</label>
				<input
					className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
					id="email-input"
					name="email"
					placeholder="you@awesome.com"
					ref={inputEl}
					required
					type="email"
				/>
				<div>
					{message
						? message
						: `I'll only send emails when new content is posted. No spam.`}
				</div>
				<button className="block w-full bg-primary-400 hover:bg-primary-300 p-4 rounded text-white hover:text-white transition duration-300" type="submit">{`Subscribe`}</button>
			</form>
		</div>
	);
}

export default Subscribe;
