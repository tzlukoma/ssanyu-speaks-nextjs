import { FaRegCalendarAlt as icon } from 'react-icons/fa';

export default {
	title: 'Event',
	name: 'event',
	type: 'document',
	icon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Date',
			name: 'date',
			type: 'datetime',
			options: {
				dateFormat: 'dddd, DD MMM YYYY,',
				timeFormat: 'HH:mm a',
			},
		},
		{
			title: 'Location',
			name: 'location',
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
			title: 'Synopsis',
			name: 'synopsis',

			type: 'blockContent',
		},
		{
			title: 'Registration Link',
			name: 'registrationUrl',
			type: 'url',
		},
		{
			title: 'Video Link',
			name: 'videoUrl',
			type: 'url',
		},

		{
			title: 'Status',
			name: 'status',
			type: 'string',
			options: {
				list: [
					{ title: 'Planning', value: 'planning' },
					{ title: 'Scheduled', value: 'scheduled' },
					{ title: 'Completed', value: 'completed' },
				],
			},
		},
		{
			title: 'Event Thumbnail',
			name: 'thumbnail',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Tags',
			name: 'tag',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'topic' }],
				},
			],
		},
	],
};
