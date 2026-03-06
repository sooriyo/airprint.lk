import type { CollectionConfig } from 'payload'

import { adminOnly } from '@/access/adminOnly'

export const Inquiries: CollectionConfig = {
    slug: 'inquiries',
    access: {
        create: () => true, // Allow public submissions
        delete: adminOnly,
        read: adminOnly, // Only admins can read submissions
        update: adminOnly,
    },
    admin: {
        useAsTitle: 'email',
        group: 'Form Submissions',
        defaultColumns: ['firstName', 'lastName', 'email', 'subject', 'createdAt'],
    },
    fields: [
        {
            name: 'firstName',
            type: 'text',
            required: true,
            label: 'First Name',
        },
        {
            name: 'lastName',
            type: 'text',
            required: true,
            label: 'Last Name',
        },
        {
            name: 'email',
            type: 'email',
            required: true,
            label: 'Email Address',
        },
        {
            name: 'subject',
            type: 'text',
            required: false,
            label: 'Subject',
        },
        {
            name: 'message',
            type: 'textarea',
            required: true,
            label: 'Message Content',
        },
    ],
}
