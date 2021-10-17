import { FaHome as icon } from 'react-icons/fa';

export default {
	title: 'Global Site Settings',
	name: 'siteSettings',
	type: 'document',
	icon,
	fields: [
		{
			title: 'Title',
			name: 'Title',
			type: 'string',
		},
		{
			title: 'Hero Image',
			name: 'heroImage',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Hero Image - Mobile',
			name: 'heroImageMobile',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Book Image',
			name: 'bookImage',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Book Description',
			name: 'bookDescription',
			type: 'blockContent',
		},
		{
			title: 'Author Image',
			name: 'authorImage',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Author Bio',
			name: 'authorBio',
			type: 'blockContent',
		},
	],
};
