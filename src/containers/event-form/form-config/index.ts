export const formConfig = [
	{
		key: 'title',
		label: 'Title',
	},
	{
		key: 'description',
		label: 'Description',
		customAttr: {
			multiline: true,
		},
	},
	{
		key: 'address',
		label: 'Address',
		customAttr: {
			textContentType: 'addressState',
		},
	},
	{
		key: 'latitude',
		label: 'Latitude',
	},
	{
		key: 'longitude',
		label: 'Longitude',
	},
];
