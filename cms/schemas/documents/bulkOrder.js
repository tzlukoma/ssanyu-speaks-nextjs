import { FaRegQuestionCircle as icon } from 'react-icons/fa';

export default {
	title: 'Bulk Order Request',
	name: 'bulkOrder',
	type: 'document',
	icon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			readOnly: true,
		},
		{
			title: 'Date Recieved',
			name: 'dateRecieved',
			type: 'datetime',
			readOnly: true,
			options: {
				dateFormat: 'dddd, DD MMM YYYY,',
				timeFormat: 'HH:mm a',
			},
		},
		{
			title: 'Organization',
			name: 'organization',
			type: 'string',
			readOnly: true,
		},
		{
			title: 'First Name',
			name: 'firstName',
			type: 'string',
			readOnly: true,
		},
		{
			title: 'Last Name',
			name: 'lastName',
			type: 'string',
			readOnly: true,
		},
		{
			title: 'Email',
			name: 'email',
			type: 'string',
			readOnly: true,
		},
		{
			title: 'Address',
			name: 'address',
			type: 'text',
			readOnly: true,
		},
		{
			title: 'Phone',
			name: 'phone',
			type: 'string',
			readOnly: true,
		},
		{
			title: 'Shipping Address',
			name: 'shippingAddress',
			type: 'text',
			readOnly: true,
		},
		{
			title: 'Number of Books',
			name: 'numberOfBooks',
			type: 'number',
			readOnly: true,
		},
		{
			title: 'Status',
			name: 'status',
			type: 'string',
			initialValue: 'received',
			options: {
				list: [
					{ title: 'Received', value: 'received' },
					{ title: 'Processed', value: 'processed' },
				],
			},
		},
	],
	intialValue: {
		status: 'received',
	},
};
