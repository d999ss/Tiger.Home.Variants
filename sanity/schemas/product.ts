import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'reference',
      to: [{ type: 'company' }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'fdaStatus',
      title: 'FDA Status',
      type: 'string',
    }),
    defineField({
      name: 'regions',
      title: 'Regions',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
    }),
    defineField({
      name: 'keyFeatures',
      title: 'Key Features & Benefits',
      type: 'text',
    }),
    defineField({
      name: 'mechanismOfAction',
      title: 'Mechanism of Action',
      type: 'text',
    }),
    defineField({
      name: 'clinicalValidation',
      title: 'Clinical Validation',
      type: 'text',
    }),
    defineField({
      name: 'regulatoryStatus',
      title: 'Regulatory Status',
      type: 'text',
    }),
    defineField({
      name: 'intendedUse',
      title: 'Intended Use',
      type: 'text',
    }),
    defineField({
      name: 'compatibleTreatments',
      title: 'Compatible Treatments',
      type: 'text',
    }),
    defineField({
      name: 'technologyPlatform',
      title: 'Technology Platform',
      type: 'text',
    }),
    defineField({
      name: 'manufacturingExcellence',
      title: 'Manufacturing Excellence',
      type: 'text',
    }),
    defineField({
      name: 'clinicalApplications',
      title: 'Clinical Applications',
      type: 'text',
    }),
    defineField({
      name: 'treatmentProtocol',
      title: 'Treatment Protocol',
      type: 'text',
    }),
    defineField({
      name: 'clinicalEvidence',
      title: 'Clinical Evidence',
      type: 'text',
    }),
    defineField({
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'url', type: 'url', title: 'URL' },
          ],
        },
      ],
    }),
  ],
})
