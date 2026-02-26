import configPromise from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'

// Optional: Fallback icon SVG for users without an avatar
const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
)

const QuoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
)

export async function Testimonials() {
    const payload = await getPayload({ config: configPromise })

    // Fetch reviews from the database
    const result = await payload.find({
        collection: 'reviews',
        limit: 6,
        sort: '-createdAt', // Show newest first
    })

    const reviews = result.docs || []

    if (reviews.length === 0) return null

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-[85rem]">
                {/* Header content */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <span className="text-blue-500 font-light text-3xl md:text-4xl mb-2 block">Testimonials.</span>
                    <h2 className="text-4xl md:text-[3.25rem] font-light text-black mb-6 tracking-tight">
                        See what our customers say
                    </h2>
                    <p className="text-gray-600 font-medium mb-6">
                        Don't let what we say influence you, take it from our customers!
                    </p>
                    <Link
                        href="#reviews"
                        className="text-blue-500 font-bold text-sm tracking-wider uppercase hover:text-blue-600 transition-colors"
                    >
                        SEE ALL REVIEWS
                    </Link>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => {
                        const avatarUrl = typeof review.avatar === 'object' && review.avatar?.url
                            ? review.avatar.url
                            : null;

                        return (
                            <div
                                key={review.id}
                                className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow"
                            >
                                {/* Header: Avatar, Name, Role, Quote */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                                            {avatarUrl ? (
                                                <Image
                                                    src={avatarUrl}
                                                    alt={`${review.name}'s avatar`}
                                                    fill
                                                    sizes="48px"
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <UserIcon />
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="font-semibold text-gray-900 text-lg leading-snug">{review.name}</h4>
                                            <p className="text-gray-400 text-sm">{review.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <QuoteIcon />
                                    </div>
                                </div>

                                {/* Review Text */}
                                <div className="text-gray-400 text-[0.95rem] leading-relaxed font-light">
                                    {review.review}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
