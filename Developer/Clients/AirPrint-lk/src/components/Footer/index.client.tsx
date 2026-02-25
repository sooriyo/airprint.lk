'use client'
import { LogoIcon } from '@/components/icons/logo'
import { CMSLink } from '@/components/Link'
import type { Footer as FooterType } from '@/payload-types'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import './index.css'

type Props = {
    footer: FooterType
}

export function FooterClient({ footer }: Props) {
    // If no footer data, show a placeholder to avoid breaking the layout
    const tagline = footer?.tagline || 'Create the perfect packaging solution for your product!'
    const newsletterLabel = footer?.newsletterLabel || 'Sign up for exclusive offers and updates!'
    const columnGroups = footer?.columnGroups || []
    const socialLinks = footer?.socialLinks || []
    const copyright = footer?.copyright || `© ${new Date().getFullYear()} AirPrint. All Rights Reserved`

    const socialIcons = {
        facebook: Facebook,
        instagram: Instagram,
        linkedin: Linkedin,
        twitter: Twitter,
    }

    const EmailIcon = () => (
        <svg width="24" height="24" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M30.1641 34.5834H21.8307C19.3307 34.5834 17.6641 33.3334 17.6641 30.4167V24.5834C17.6641 21.6667 19.3307 20.4167 21.8307 20.4167H30.1641C32.6641 20.4167 34.3307 21.6667 34.3307 24.5834V30.4167C34.3307 33.3334 32.6641 34.5834 30.1641 34.5834Z"
                stroke="#A1A1AA"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M30.1693 25L27.5609 27.0833C26.7026 27.7667 25.2943 27.7667 24.4359 27.0833L21.8359 25"
                stroke="#A1A1AA"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )

    return (
        <footer className="footer pt-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 pb-20">
                    {/* Left Column - Branding and Newsletter */}
                    <div className="lg:w-1/3 text-left">
                        <Link href="/" className="inline-block">
                            <LogoIcon className="footerLogo h-10 w-auto" />
                        </Link>

                        <h2 className="footerTagline">
                            {tagline}
                        </h2>

                        <div className="mt-12">
                            <p className="footerNewsletterLabel">
                                {newsletterLabel}
                            </p>
                            <div className="footerSubscribeBox">
                                <EmailIcon />
                                <input type="email" placeholder="Enter your email" className="footerInput" />
                                <button className="footerSubscribeBtn" type="button">Subscribe</button>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden lg:block w-px bg-white/20 self-stretch" />

                    {/* Right Columns - Link Groups */}
                    <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {columnGroups && columnGroups.length > 0 ? (
                            columnGroups.map((group, index) => (
                                <div key={index}>
                                    <h3 className="footerColumnTitle">{group.title}</h3>
                                    <div className="flex flex-col gap-4">
                                        {group.links?.map((linkItem, lIndex) => (
                                            <CMSLink key={lIndex} {...linkItem.link} className="footerLink" appearance="inline" />
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            // Fallback placeholder columns if no data in CMS
                            <>
                                <div>
                                    <h3 className="footerColumnTitle">Information</h3>
                                    <div className="flex flex-col gap-4">
                                        <span className="footerLink">Contact Us</span>
                                        <span className="footerLink">Pricing</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="footerColumnTitle">Useful Links</h3>
                                    <div className="flex flex-col gap-4">
                                        <span className="footerLink">FAQs</span>
                                        <span className="footerLink">Affiliates</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footerBottom flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <span className="footerSocialText">Connect with Us</span>
                        <div className="w-px h-4 bg-white/20 mx-2" />
                        <div className="flex items-center gap-4">
                            {socialLinks && socialLinks.length > 0 ? (
                                socialLinks.map((social, index) => {
                                    const Icon = socialIcons[social.platform as keyof typeof socialIcons] || Twitter
                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="footerSocialIcon"
                                        >
                                            <Icon size={20} />
                                        </a>
                                    )
                                })
                            ) : (
                                <div className="flex gap-4">
                                    <Facebook size={20} className="footerSocialIcon" />
                                    <Instagram size={20} className="footerSocialIcon" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="footerCopyright">
                        {copyright}
                    </div>
                </div>
            </div>
        </footer>
    )
}
