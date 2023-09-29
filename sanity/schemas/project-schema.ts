const project = {
	name: 'project',
	title: 'Projects',
	type: 'document',
	fields: [
		{ name: 'index', title: 'Index', type: 'number', description: 'Index for sorting position' },
		{ name: 'title', title: 'Title', type: 'string' },
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'title' }
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			},
			fields: [{ name: 'alt', tile: 'Alt', type: 'string' }]
		},
		{
			name: 'url',
			title: 'URLs',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{ name: 'url', type: 'url', title: 'URL' },
						{ name: 'text', title: 'Text', type: 'string' }
					]
				}
			]
		},
		{ name: 'icons', type: 'string', title: 'Icons', description: 'simple-icons slugs, separated by commas (https://www.npmjs.com/package/simple-icons)' },
		{
			name: 'description',
			title: 'Description',
			type: 'array',
			of: [{ type: 'block' }]
		}
	]
};

export default project;
