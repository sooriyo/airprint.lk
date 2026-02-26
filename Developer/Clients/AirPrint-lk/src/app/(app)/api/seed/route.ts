import configPromise from '@payload-config'
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'

export async function GET() {
    try {
        const payload = await getPayload({ config: configPromise })

        // Find existing policy pages
        const allPagesRes = await payload.find({
            collection: 'pages',
            limit: 100,
        })
        const existingPages = allPagesRes.docs

        const deleteSlugs = ['shipping-policy', 'return-policy', 'privacy-policy', 'terms-and-conditions', 'shipping-and-return-policy']

        for (const page of existingPages) {
            if (deleteSlugs.includes(page.slug as string)) {
                await payload.delete({
                    collection: 'pages',
                    id: page.id,
                })
            }
        }

        // 1. Privacy Policy
        const privacyPolicy = await payload.create({
            collection: 'pages',
            data: {
                title: 'Privacy Policy',
                slug: 'privacy-policy',
                _status: 'published',
                hero: {
                    type: 'lowImpact',
                    richText: {
                        root: {
                            type: 'root',
                            format: '',
                            indent: 0,
                            version: 1,
                            children: [
                                {
                                    type: 'heading',
                                    format: '',
                                    indent: 0,
                                    version: 1,
                                    tag: 'h1',
                                    children: [{ type: 'text', format: 0, mode: 'normal', style: '', text: 'Privacy Policy', version: 1 }],
                                },
                            ],
                        },
                    },
                },
                layout: [
                    {
                        blockType: 'content',
                        columns: [
                            {
                                size: 'full',
                                richText: {
                                    root: {
                                        type: 'root',
                                        format: '',
                                        indent: 0,
                                        version: 1,
                                        children: [
                                            {
                                                type: 'paragraph',
                                                format: '',
                                                indent: 0,
                                                version: 1,
                                                children: [{ type: 'text', format: 1, mode: 'normal', style: '', text: 'Last Updated: August 2024', version: 1 }],
                                            },
                                            {
                                                type: 'paragraph',
                                                format: '',
                                                indent: 0,
                                                version: 1,
                                                children: [{ type: 'text', format: 0, mode: 'normal', style: '', text: 'This Privacy Policy explains how AirPrint ("we", "us", or "our") collects, uses, and discloses your information when you use our website, airprint.lk, and the products and services we offer. We are committed to protecting your personal information and your right to privacy.', version: 1 }],
                                            },
                                            {
                                                type: 'heading',
                                                format: '',
                                                indent: 0,
                                                version: 1,
                                                tag: 'h3',
                                                children: [{ type: 'text', format: 0, mode: 'normal', style: '', text: '1. Information We Collect', version: 1 }],
                                            },
                                            {
                                                type: 'paragraph',
                                                format: '',
                                                indent: 0,
                                                version: 1,
                                                children: [{ type: 'text', format: 0, mode: 'normal', style: '', text: 'We collect personal information that you voluntarily provide to us when registering at the website, expressing an interest in obtaining information about us or our products, when participating in activities on the website, or otherwise contacting us. This includes names, phone numbers, email addresses, mailing addresses, and contact preferences.', version: 1 }],
                                            },
                                            {
                                                type: 'heading',
                                                format: '',
                                                indent: 0,
                                                version: 1,
                                                tag: 'h3',
                                                children: [{ type: 'text', format: 0, mode: 'normal', style: '', text: '2. How We Use Your Information', version: 1 }],
                                            },
                                            {
                                                type: 'paragraph',
                                                format: '',
                                                indent: 0,
                                                version: 1,
                                                children: [{ type: 'text', format: 0, mode: 'normal', style: '', text: 'We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.', version: 1 }],
                                            },
                                        ],
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
        })

        // 2. Terms & Conditions
        const termsAndConditions = await payload.create({
            collection: 'pages',
            data: {
                title: 'Terms & Conditions',
                slug: 'terms-and-conditions',
                _status: 'published',
                hero: {
                    type: 'lowImpact',
                    richText: {
                        root: {
                            type: 'root',
                            format: '',
                            indent: 0,
                            version: 1,
                            children: [
                                {
                                    type: 'heading',
                                    format: '',
                                    indent: 0,
                                    version: 1,
                                    tag: 'h1',
                                    children: [{ type: 'text', format: 0, mode: 'normal', style: '', text: 'Terms & Conditions', version: 1 }],
                                },
                            ],
                        },
                    },
                },
                layout: [
                    {
                        blockType: 'content',
                        columns: [
                            {
                                size: 'full',
                                richText: {
                                    root: {
                                        type: 'root',
                                        format: '',
                                        indent: 0,
                                        version: 1,
                                        children: [
                                            {
                                                type: 'paragraph',
                                                format: '',
                                                indent: 0,
                                                version: 1,
                                                children: [{ type: 'text', format: 1, mode: 'normal', style: '', text: 'Last Updated: August 2024', version: 1 }],
                                            },
                                            {
                                                type: 'paragraph',
                                                format: '',
                                                indent: 0,
                                                version: 1,
                                                children: [{ type: 'text', format: 0, mode: 'normal', style: '', text: 'Please read these terms and conditions carefully before using our website or services. By using our website or placing an order, you agree to these terms.', version: 1 }],
                                            },
                                            {
                                                type: 'heading',
                                                format: '',
                                                indent: 0,
                                                version: 1,
                                                tag: 'h3',
                                                children: [{ type: 'text', format: 0, mode: 'normal', style: '', text: '1. Production and Fulfillment', version: 1 }],
                                            },
                                            {
                                                type: 'paragraph',
                                                format: '',
                                                indent: 0,
                                                version: 1,
                                                children: [{ type: 'text', format: 0, mode: 'normal', style: '', text: 'All our custom packaging materials are manufactured according to your final approved digital proofs. Please review templates closely for sizing, color calibration limits, and structural tolerances. We are not liable for misprints caused by incorrect customer source files.', version: 1 }],
                                            },
                                        ],
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
        })

        // 3. Shipping & Return Policy
        const shippingReturnPolicy = await payload.create({
            collection: 'pages',
            data: {
                title: 'Shipping & Return Policy',
                slug: 'shipping-and-return-policy',
                _status: 'published',
                hero: {
                    type: 'lowImpact',
                    richText: {
                        root: {
                            type: 'root',
                            format: '',
                            indent: 0,
                            version: 1,
                            children: [
                                {
                                    type: 'heading',
                                    format: '',
                                    indent: 0,
                                    version: 1,
                                    tag: 'h1',
                                    children: [{ type: 'text', format: 0, mode: 'normal', style: '', text: 'Shipping & Return Policy', version: 1 }],
                                },
                            ],
                        },
                    },
                },
                layout: [
                    {
                        blockType: 'content',
                        columns: [
                            {
                                size: 'full',
                                richText: {
                                    root: {
                                        type: 'root',
                                        format: '',
                                        indent: 0,
                                        version: 1,
                                        children: [
                                            {
                                                type: 'paragraph',
                                                format: '',
                                                indent: 0,
                                                version: 1,
                                                children: [{ type: 'text', format: 1, mode: 'normal', style: '', text: 'Last Updated: August 2024', version: 1 }],
                                            },
                                            {
                                                type: 'heading',
                                                format: '',
                                                indent: 0,
                                                version: 1,
                                                tag: 'h3',
                                                children: [{ type: 'text', format: 0, mode: 'normal', style: '', text: 'Our Shipping Operations', version: 1 }],
                                            },
                                            {
                                                type: 'paragraph',
                                                format: '',
                                                indent: 0,
                                                version: 1,
                                                children: [{ type: 'text', format: 0, mode: 'normal', style: '', text: 'At AirPrint, we offer island-wide shipping across Sri Lanka. Freight charges vary depending on package volume, quantity, and your exact area of delivery. Standard production timelines apply before orders are handed over to delivery partners.', version: 1 }],
                                            },
                                            {
                                                type: 'heading',
                                                format: '',
                                                indent: 0,
                                                version: 1,
                                                tag: 'h3',
                                                children: [{ type: 'text', format: 0, mode: 'normal', style: '', text: 'Returns & Replacements', version: 1 }],
                                            },
                                            {
                                                type: 'paragraph',
                                                format: '',
                                                indent: 0,
                                                version: 1,
                                                children: [{ type: 'text', format: 0, mode: 'normal', style: '', text: 'Due to the customized nature of the packaging services we provide, we generally do not accept return shipments unless there has been a verified manufacturing defect. If you discover a defect in your printed packaging, please contact us at ', version: 1 }, { type: 'text', format: 1, mode: 'normal', style: '', text: 'hello@airprint.lk', version: 1 }, { type: 'text', format: 0, mode: 'normal', style: '', text: ' within 7 days of receiving your goods with photo evidence.', version: 1 }],
                                            },
                                        ],
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
        })

        // 4. Update Header
        const header = await payload.findGlobal({ slug: 'header', depth: 0 })
        if (header && header.navItems) {
            let updatedHeaderNav: any = []
            for (const navGroup of header.navItems) {
                let newNavBlocks: any = []
                for (const block of navGroup?.subMenu?.blocks || []) {
                    if (block.title === 'Legal' || block.title === 'Policies' || block.title === 'Legal & Policies') {
                        newNavBlocks.push({
                            id: block.id,
                            title: 'Legal',
                            links: [
                                {
                                    link: {
                                        type: 'reference',
                                        reference: { relationTo: 'pages', value: privacyPolicy.id as number },
                                        label: 'Privacy Policy'
                                    }
                                },
                                {
                                    link: {
                                        type: 'reference',
                                        reference: { relationTo: 'pages', value: termsAndConditions.id as number },
                                        label: 'Terms & Conditions'
                                    }
                                },
                                {
                                    link: {
                                        type: 'reference',
                                        reference: { relationTo: 'pages', value: shippingReturnPolicy.id as number },
                                        label: 'Shipping & Return Policy'
                                    }
                                }
                            ]
                        })
                    } else {
                        newNavBlocks.push(block)
                    }
                }

                if (navGroup.subMenu) {
                    navGroup.subMenu.blocks = newNavBlocks
                }
                updatedHeaderNav.push(navGroup)
            }

            await payload.updateGlobal({
                slug: 'header',
                data: {
                    navItems: updatedHeaderNav
                }
            })
        }

        // 5. Update Footer
        const footer = await payload.findGlobal({ slug: 'footer', depth: 0 })
        if (footer && footer.columns) {
            let updatedFooterColumns: any = []

            for (const col of footer.columns) {
                if (col.title === 'Legal' || col.title === 'Policies') {
                    let updatedNavItems: any = []
                    for (const navItem of col.navItems || []) {
                        let linkLabel = typeof navItem.link === 'object' ? navItem.link.label : ''
                        if (linkLabel !== 'Shipping Policy' && linkLabel !== 'Return Policy' && linkLabel !== 'Privacy Policy' && linkLabel !== 'Terms & Conditions' && linkLabel !== 'Shipping & Return Policy') {
                            updatedNavItems.push(navItem)
                        }
                    }

                    updatedNavItems.push({
                        link: {
                            type: 'reference',
                            reference: { relationTo: 'pages', value: privacyPolicy.id as number },
                            label: 'Privacy Policy'
                        }
                    })
                    updatedNavItems.push({
                        link: {
                            type: 'reference',
                            reference: { relationTo: 'pages', value: termsAndConditions.id as number },
                            label: 'Terms & Conditions'
                        }
                    })
                    updatedNavItems.push({
                        link: {
                            type: 'reference',
                            reference: { relationTo: 'pages', value: shippingReturnPolicy.id as number },
                            label: 'Shipping & Return Policy'
                        }
                    })

                    updatedFooterColumns.push({
                        ...col,
                        navItems: updatedNavItems
                    })
                } else {
                    updatedFooterColumns.push(col)
                }
            }

            await payload.updateGlobal({
                slug: 'footer',
                data: {
                    columns: updatedFooterColumns
                }
            })
        }

        return NextResponse.json({ success: true, message: 'Legal pages specifically re-seeded into CMS.' })
    } catch (error) {
        console.error('Error seeding pages', error)
        return NextResponse.json({ success: false, error: 'Failed to seed pages' }, { status: 500 })
    }
}
