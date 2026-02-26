import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us - AirPrint',
    description: 'Get in touch with the AirPrint team for inquiries, support, and custom packaging solutions.',
}

export default function ContactUsPage() {
    return (
        <article className="pt-16 md:pt-24 pb-16 md:pb-32 overflow-hidden">
            {/* Intro Section */}
            <section className="container mx-auto px-4 max-w-3xl text-center flex flex-col items-center mb-16 md:mb-24">
                <span className="text-blue-500 font-medium text-xl mb-2">Contact us.</span>
                <h1 className="text-4xl md:text-[3.5rem] font-light text-gray-900 mb-6 tracking-tight">Let's start a conversation</h1>
                <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
                    Have a question or need a custom packaging solution? We'd love to hear from you. Fill out the form below and our team will get back to you promptly.
                </p>
            </section>

            {/* Content Split Section */}
            <section className="container mx-auto px-4 max-w-[85rem]">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">

                    {/* Contact Information (Left Side) */}
                    <div className="flex-1 flex flex-col gap-8 order-2 lg:order-1">
                        <div className="bg-[#f8f9fa] rounded-[2rem] p-8 md:p-12 flex-1 flex flex-col justify-center">
                            <h3 className="text-2xl font-light text-gray-900 mb-8 tracking-tight">Direct Contacts</h3>

                            <div className="flex flex-col gap-8">
                                <div>
                                    <span className="text-blue-500 uppercase text-xs tracking-[0.2em] font-bold mb-2 block">EMAIL US</span>
                                    <a href="mailto:hello@airprint.lk" className="text-gray-800 text-lg hover:text-blue-500 transition-colors">hello@airprint.lk</a>
                                </div>

                                <div>
                                    <span className="text-blue-500 uppercase text-xs tracking-[0.2em] font-bold mb-2 block">CALL US</span>
                                    <a href="tel:+94112345678" className="text-gray-800 text-lg hover:text-blue-500 transition-colors">+94 11 234 5678</a>
                                </div>

                                <div>
                                    <span className="text-blue-500 uppercase text-xs tracking-[0.2em] font-bold mb-2 block">VISIT US</span>
                                    <p className="text-gray-800 text-lg leading-relaxed">
                                        123 Eco Packaging Way,<br />
                                        Colombo 03,<br />
                                        Sri Lanka
                                    </p>
                                </div>

                                <div className="mt-4 pt-8 border-t border-gray-200">
                                    <span className="text-blue-500 uppercase text-xs tracking-[0.2em] font-bold mb-2 block">WORKING HOURS</span>
                                    <p className="text-gray-500 text-base leading-relaxed">
                                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                                        Weekend: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form (Right Side) */}
                    <div className="flex-1 order-1 lg:order-2">
                        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <h3 className="text-2xl font-light text-gray-900 mb-8 tracking-tight">Send a Message</h3>

                            <form className="flex flex-col gap-6" action="#" method="POST">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-[#f8f9fa] focus:bg-white text-gray-800 placeholder-gray-400"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-[#f8f9fa] focus:bg-white text-gray-800 placeholder-gray-400"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-[#f8f9fa] focus:bg-white text-gray-800 placeholder-gray-400"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-[#f8f9fa] focus:bg-white text-gray-800 placeholder-gray-400"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-[#f8f9fa] focus:bg-white text-gray-800 placeholder-gray-400 resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-4 w-full bg-blue-500 text-white font-medium text-[0.95rem] tracking-wide py-4 px-8 rounded-xl hover:bg-blue-600 transition-colors shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)]"
                                >
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}
