import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'About Us - AirPrint',
    description: 'We are committed to making the printing industry more sustainable and digital.',
}

export default function AboutUsPage() {
    return (
        <article className="pt-24 pb-32">
            {/* Intro Section */}
            <section className="container mx-auto px-4 max-w-3xl text-center flex flex-col items-center">
                <span className="text-blue-500 font-medium text-xl mb-2">About us.</span>
                <h1 className="text-4xl md:text-[3.5rem] font-light text-gray-900 mb-8 tracking-tight">Hey, we are AirPrint!</h1>
                <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
                    We are committed to making the printing industry more sustainable and digital. Join our motivated team to contribute to rapid growth and sustainability goals that really make a difference!
                </p>
            </section>

            {/* 4 Feature Columns */}
            <section className="container mx-auto px-4 mt-24 max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-blue-500 font-medium text-[1.15rem]">Eco-Friendly Packaging</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">Sustainable technology and processes. Reusable and 100% recyclable bags.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-blue-500 font-medium text-[1.15rem]">Fully Customizable</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">Our packaging can be customised to include essential information, such as origin, processing methods...</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-blue-500 font-medium text-[1.15rem]">Worldwide Delivery</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">We can provide your business with affordable packaging with hermetic technology.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-blue-500 font-medium text-[1.15rem]">Creative Design</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">Packaging design ideas along with tips on how to make your product stand out.</p>
                    </div>
                </div>
            </section>

            {/* Feature Split Section */}
            <section className="mt-24 md:m-8 lg:mx-auto max-w-[85rem] bg-[#F0F5FF] lg:rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch">
                {/* Left Content */}
                <div className="flex-1 p-8 md:p-12 lg:p-20 flex flex-col justify-center">
                    <span className="text-blue-500 uppercase text-xs md:text-sm tracking-[0.2em] font-bold mb-4 block">ECO-CONSCIOUS BUSINESSES</span>
                    <h2 className="text-3xl md:text-[2.75rem] font-medium text-black leading-[1.1] mb-12 max-w-lg">
                        Go green with custom eco-friendly packaging
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-[1.25rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex-1 flex flex-col justify-center">
                            <h4 className="text-blue-500 font-medium mb-3">The AirPrint Promise</h4>
                            <p className="text-gray-600 text-[0.9rem] leading-relaxed">We guarantee the highest quality products and customer experience with every order!</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white rounded-[1.25rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex-1 flex flex-col justify-center">
                            <h4 className="text-blue-500 font-medium mb-3">Extensive Option Library</h4>
                            <p className="text-gray-600 text-[0.9rem] leading-relaxed">Access over 50+ options that you can utilize to create your very own unique box experience.</p>
                        </div>
                    </div>
                </div>

                {/* Right Image Container */}
                <div className="flex-1 relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full mt-8 md:mt-0 flex items-center justify-center">
                    <Image
                        src="/images/air-print-about-img-1.png"
                        alt="Custom eco-friendly packaging mockups including coffee cups, bags and donuts"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain md:object-cover mix-blend-multiply"
                        priority
                    />
                </div>
            </section>

            {/* The Background Section */}
            <section className="mt-32">
                <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
                    <span className="text-blue-500 font-light text-3xl md:text-4xl mb-2 block">The Background.</span>
                    <h2 className="text-4xl md:text-[3.5rem] font-light text-gray-900 mb-12 tracking-tight">Where we come from?.</h2>

                    <div className="flex flex-col gap-6 text-gray-500 text-sm md:text-[1.05rem] font-light leading-relaxed max-w-3xl mx-auto">
                        <p>AirPrint was built on a strong foundation in the printing and packaging industry, backed by years of hands-on experience from our parent company.</p>
                        <p>As the industry evolved, we saw the need for smarter, faster, and more sustainable solutions. This led to AirPrint a digital-first platform transforming traditional printing into an efficient and eco-friendly experience.</p>
                        <p>Today, we combine industry expertise with modern technology to drive innovation and sustainability forward.</p>
                    </div>
                </div>

                {/* Gray Image Container */}
                <div className="md:m-8 lg:mx-auto max-w-[85rem] bg-[#f8f9fa] lg:rounded-3xl pt-16 pb-24 md:pt-24 md:pb-32 px-4 flex justify-center">
                    <div className="relative w-full max-w-4xl aspect-[4/3] md:aspect-[16/9]">
                        <Image
                            src="/images/air-print-about-img-2.png"
                            alt="AirPrint background packaging mockup box"
                            fill
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            className="object-contain mix-blend-multiply"
                        />
                    </div>
                </div>
            </div>
        </section>

            {/* Testimonials Section */ }
    <section className="mt-32 max-w-[100vw] overflow-hidden relative">
        <div className="container mx-auto px-4 text-center mb-10">
            <span className="text-blue-500 font-light text-3xl md:text-4xl mb-4 block">Testimonials.</span>
            <h2 className="text-4xl md:text-[3.5rem] font-light text-gray-900 mb-6 tracking-tight">See what our customers say</h2>

            <p className="text-gray-500 text-sm md:text-base font-light mb-8">
                Don't let what we say influence you, take it from our customers!
            </p>

            <a href="#" className="inline-block text-blue-500 font-bold text-sm tracking-wider uppercase border-b-2 border-transparent hover:border-blue-500 transition-all duration-300">
                SEE ALL REVIEWS
            </a>
        </div>

        {/* Scrolling Testimonials Track */}
        <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-12 pt-4 px-4 sm:px-8 md:px-12 xl:px-[calc((100vw-80rem)/2)] scrollbar-hide snap-x snap-mandatory no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

            {/* Testimonial Cards */}
            {[
                {
                    name: 'John Doe',
                    role: 'Marketing Manager',
                    initials: 'JD',
                    quote: 'This platform is incredibly intuitive and efficient, streamlining our workflow and boosting productivity. A must-have for any team!'
                },
                {
                    name: 'Emily Smith',
                    role: 'Project Manager',
                    initials: 'ES',
                    quote: 'User-friendly and feature-rich, it has transformed our operations, making tasks seamless and efficient. Highly recommended for professionals!'
                },
                {
                    name: 'Michael Johnson',
                    role: 'Sales Head',
                    initials: 'MJ',
                    quote: 'A game-changer for our sales team! Easy to use, reliable, and packed with great features that enhance efficiency and collaboration.'
                },
                {
                    name: 'Sarah Williams',
                    role: 'CEO',
                    initials: 'SW',
                    quote: 'Absolutely incredible experience. AirPrint provides exactly what we need to rapidly scale without losing focus on our core eco-initiatives.'
                },
                {
                    name: 'David Chen',
                    role: 'Operations Lead',
                    initials: 'DC',
                    quote: 'We have completely shifted our supply chain here. The fully customizable products speed up our delivery pipeline drastically!'
                }
            ].map((testimonial, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-[1.5rem] p-8 shadow-[0_12px_40px_rgba(0,0,0,0.03)] min-w-[320px] max-w-[380px] sm:min-w-[400px] sm:max-w-[450px] flex-shrink-0 snap-center flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-100 text-gray-500 font-medium rounded-full flex items-center justify-center text-lg">
                                {testimonial.initials}
                            </div>
                            <div className="flex flex-col text-left">
                                <h4 className="text-gray-900 font-medium text-[1.1rem] leading-tight">{testimonial.name}</h4>
                                <span className="text-gray-400 font-light text-[0.85rem]">{testimonial.role}</span>
                            </div>
                        </div>
                        {/* Blue Quote Icon */}
                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500 w-8 h-8 opacity-90">
                            <path d="M12.9804 0C5.81186 0 0 5.81186 0 12.9804L0 27.2588H12.9804V14.2784H5.19216C6.63753 9.4716 11.2359 5.83922 16.8745 5.83922V0H12.9804ZM30.1255 0C22.9569 0 17.1451 5.81186 17.1451 12.9804L17.1451 27.2588H30.1255V14.2784H22.3373C23.7826 9.4716 28.3811 5.83922 34.0196 5.83922V0H30.1255Z" fill="currentColor" />
                        </svg>
                    </div>
                    <p className="text-gray-500 font-light text-[0.95rem] leading-relaxed text-left">
                        {testimonial.quote}
                    </p>
                </div>
            ))}
        </div>

        {/* CSS to hide scrollbar across browsers while maintaining functionality */}
        <style dangerouslySetInnerHTML={{
            __html: `
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}} />
    </section>
        </article >
    )
}
