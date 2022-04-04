import { FaPhotoVideo as icon } from 'react-icons/fa';

export default {
	title: 'Gallery',
	name: 'gallery',
	type: 'document',
	icon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
			},
		},
		{
			title: 'Cover Image',
			name: 'coverImage',
			type: 'image',
		},
		{
			name: 'images',
			type: 'array', // supports drag'n'drop of multiple files
			options: {
				layout: 'grid',
			},
			of: [
				{
					type: 'image',
				},
			],
		},
	],
};
