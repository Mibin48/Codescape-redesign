import React from 'react';

const blogPosts = [
    {
        id: 1,
        category: 'Engineering',
        title: 'Building Scalable Microservices with Node.js & Kubernetes',
        excerpt: 'How we architected a system handling 10M+ requests per day with zero downtime deployments.',
        author: 'Alex Rivera',
        role: 'Lead Engineer',
        date: 'Feb 10, 2026',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
        featured: true
    },
    {
        id: 2,
        category: 'Design',
        title: 'The Psychology of Dark Mode: Why Users Prefer It',
        excerpt: 'A deep dive into user behavior data and how dark interfaces improve engagement by 23%.',
        author: 'Sarah Chen',
        role: 'UX Director',
        date: 'Feb 6, 2026',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
        featured: false
    },
    {
        id: 3,
        category: 'AI & ML',
        title: 'Integrating LLMs Into Production: Lessons Learned',
        excerpt: 'From prototype to production — real challenges and solutions for deploying AI at scale.',
        author: 'Marcus Johnson',
        role: 'AI Lead',
        date: 'Jan 28, 2026',
        readTime: '12 min read',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
        featured: false
    },
    {
        id: 4,
        category: 'DevOps',
        title: 'Zero-Trust Security for Modern Web Applications',
        excerpt: 'Implementing defense-in-depth strategies that protect every layer of your application stack.',
        author: 'Priya Patel',
        role: 'Security Engineer',
        date: 'Jan 20, 2026',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop',
        featured: false
    }
];

export const Blog: React.FC = () => {
    const featured = blogPosts.find((p) => p.featured);
    const rest = blogPosts.filter((p) => !p.featured);

    return (
        <section className="py-32 bg-gray-50 relative overflow-hidden" id="blog">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8" data-aos="fade-up">
                    <div>
                        <span className="text-primary font-black tracking-[0.4em] uppercase text-[11px] mb-4 block">Insights & Ideas</span>
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight leading-[0.9]">
                            From Our<br />
                            <span className="gradient-text">Blog</span>
                        </h2>
                    </div>
                    <a
                        href="#"
                        className="group flex items-center gap-3 text-primary font-bold text-sm uppercase tracking-widest hover:gap-5 transition-all duration-300"
                    >
                        View all articles
                        <span className="material-icons text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>

                {/* Featured + Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Featured Post — Large Card */}
                    {featured && (
                        <div
                            className="group relative rounded-3xl overflow-hidden cursor-pointer lg:row-span-2"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={featured.image}
                                    alt={featured.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                            </div>

                            <div className="relative z-10 flex flex-col justify-end h-full min-h-[500px] lg:min-h-full p-10">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-white text-[10px] font-black tracking-widest uppercase w-fit mb-6 backdrop-blur-sm">
                                    {featured.category}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4 group-hover:text-primary-300 transition-colors duration-300">
                                    {featured.title}
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed mb-6 max-w-md">
                                    {featured.excerpt}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <span className="material-icons text-white text-sm">person</span>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">{featured.author}</p>
                                        <p className="text-white/50 text-xs">{featured.date} · {featured.readTime}</p>
                                    </div>
                                </div>

                                {/* Hover arrow */}
                                <div className="absolute top-8 right-8 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <span className="material-icons text-white text-2xl">north_east</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Smaller Cards */}
                    {rest.map((post, i) => (
                        <div
                            key={post.id}
                            className="group bg-white rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                            data-aos="fade-up"
                            data-aos-delay={i * 150}
                        >
                            <div className="flex flex-col sm:flex-row h-full">
                                {/* Thumbnail */}
                                <div className="sm:w-2/5 relative overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 sm:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors duration-500"></div>
                                </div>

                                {/* Content */}
                                <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                                    <span className="text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-3">
                                        {post.category}
                                    </span>
                                    <h3 className="text-xl font-black text-gray-900 leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                                <span className="material-icons text-gray-500 text-xs">person</span>
                                            </div>
                                            <div>
                                                <p className="text-gray-900 font-bold text-xs">{post.author}</p>
                                                <p className="text-gray-400 text-[10px]">{post.role}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-bold tracking-wider uppercase">
                                            <span className="material-icons text-xs">schedule</span>
                                            {post.readTime}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {/* ═══ VIDEO ARTICLE CARD ═══ */}
                <div className="mt-12 group rounded-3xl overflow-hidden relative cursor-pointer" data-aos="fade-up">
                    <div className="relative aspect-[21/9]">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200&auto=format&fit=crop"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        >
                            <source src="https://assets.mixkit.co/videos/preview/mixkit-businesswoman-working-at-her-laptop-in-a-modern-office-4134-large.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent"></div>

                        {/* Video Content */}
                        <div className="absolute inset-0 flex items-center p-10 lg:p-16">
                            <div className="max-w-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-red-500/90 text-white text-[10px] font-black tracking-widest uppercase flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                                        Video
                                    </span>
                                    <span className="text-white/40 text-xs font-bold">15 min</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3 group-hover:text-primary-300 transition-colors">
                                    Tech Talk: Building Real-Time Systems at Scale
                                </h3>
                                <p className="text-white/50 text-sm mb-6 max-w-md">
                                    Our CTO discusses the patterns and trade-offs in building systems that handle millions of concurrent connections.
                                </p>
                                <div className="flex items-center gap-5 group/play cursor-pointer">
                                    <div className="relative">
                                        <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping duration-[3000ms]"></div>
                                        <div className="absolute -inset-2 rounded-full bg-primary/20 animate-pulse duration-[1500ms]"></div>
                                        <div className="w-16 h-16 rounded-full bg-white text-gray-950 flex items-center justify-center relative z-10 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700 shadow-xl">
                                            <span className="material-icons text-2xl ml-1">play_arrow</span>
                                        </div>
                                    </div>
                                    <div className="space-y-0.5">
                                        <span className="text-white/40 text-[10px] font-black uppercase tracking-widest block">Tutorial</span>
                                        <span className="text-white font-black text-lg group-hover:text-primary transition-colors">Watch Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Bar */}
                <div
                    className="mt-16 rounded-3xl bg-gray-900 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div>
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Stay in the loop</h3>
                        <p className="text-gray-400 text-base">Get engineering insights delivered to your inbox every week.</p>
                    </div>
                    <div className="flex w-full md:w-auto gap-3">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="bg-white/10 border border-white/10 text-white placeholder-white/30 rounded-2xl px-6 py-4 text-sm font-medium focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all w-full md:w-72"
                        />
                        <button className="btn-primary text-white font-bold px-8 py-4 rounded-2xl text-sm tracking-wider uppercase whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
