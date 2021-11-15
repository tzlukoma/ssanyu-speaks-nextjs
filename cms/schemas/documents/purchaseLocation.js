import { FaShoppingCart as icon } from 'react-icons/fa';

export default {
	title: 'Purchase Location',
	name: 'purchaseLocation',
	type: 'document',
	icon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Purchase Location',
			name: 'purchaseLocation',
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
			title: 'Description',
			name: 'description',

			type: 'blockContent',
		},
		{
			title: 'Purchase Link',
			name: 'purchaseUrl',
			type: 'url',
		},

		{
			title: 'Status',
			name: 'status',
			type: 'string',
			options: {
				list: [
					{ title: 'Pending', value: 'pending' },
					{ title: 'Available', value: 'available' },
					{ title: 'Archived', value: 'archived' },
				],
			},
		},
		{
			title: 'Location Thumbnail',
			name: 'thumbnail',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
};
