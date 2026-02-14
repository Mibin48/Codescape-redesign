
import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section id="home" className="relative overflow-hidden bg-white">
            {/* Full-Width Video Section */}
            <div className="relative w-full h-[70vh] md:h-screen lg:h-[100dvh] bg-gray-950">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/ezgif-frame-240.jpg"
                    className="w-full h-full object-cover opacity-90"
                >
                    <source src="/Logo_Animation_Video_Ready.mp4" type="video/mp4" />
                </video>
                {/* Gradient fade at the bottom of video */}
                <div className="absolute bottom-0 left-0 w-full h-24 md:h-48 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
            </div>

            {/* Content Section Below Video */}
            <div className="relative z-10 w-full pb-24 pt-10">
                <div className="max-w-[1400px] mx-auto px-4">

                    {/* Top Badges */}
                    <div className="flex flex-wrap gap-4 mb-20" data-aos="fade-right">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[13px] font-medium text-orange-700">
                            <span className="w-5 h-5 flex items-center justify-center bg-orange-500 rounded text-white text-[10px] font-bold">C</span>
                            Top-Tier Innovation Agency
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[13px] font-medium text-blue-700">
                            <span className="text-yellow-500 font-bold">G</span>
                            <span className="flex text-yellow-500 text-[10px]">★★★★★</span>
                            4.9/5 Rating
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

                        {/* Left Column: Headline & Stats */}
                        <div className="space-y-24">
                            <h1
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-950 leading-[1.1] tracking-[-0.02em]"
                                data-aos="fade-up"
                            >
                                All your digital <br />
                                <span className="text-gray-400">products</span> done <br />
                                with <span className="gradient-text">precision</span>
                            </h1>

                            <div className="flex flex-wrap gap-10 md:gap-16" data-aos="fade-up" data-aos-delay="200">
                                <div>
                                    <div className="text-4xl font-bold text-gray-900 mb-1">100+</div>
                                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Completed projects</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-gray-900 mb-1">98%</div>
                                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Client satisfaction</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Descriptions & CTAs */}
                        <div className="lg:pt-12">
                            <p
                                className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 max-w-xl"
                                data-aos="fade-left"
                                data-aos-delay="100"
                            >
                                Stop searching for pro designers and developers. Start getting your engineering done. Match with top-tier talent and get your projects delivered.
                            </p>

                            {/* Email Input CTA */}
                            <div
                                className="relative max-w-md w-full mb-12"
                                data-aos="fade-left"
                                data-aos-delay="200"
                            >
                                <div className="relative group p-1.5 flex items-center bg-gray-50 border border-gray-200 rounded-[20px] shadow-sm focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-white transition-all">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full bg-transparent border-none focus:ring-0 px-5 text-gray-700 placeholder:text-gray-400"
                                    />
                                    <button className="bg-gray-950 hover:bg-black text-white px-6 py-3.5 rounded-[15px] font-bold text-sm whitespace-nowrap transition-all active:scale-95 shadow-lg">
                                        Start Project
                                    </button>
                                </div>
                            </div>

                            {/* Mini Client Grid */}
                            <div className="pt-10 border-t border-gray-100" data-aos="fade-up" data-aos-delay="300">
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Trusted By Growth Teams At</div>
                                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
                                    <span className="font-bold text-lg text-gray-900">ENTERPRISE</span>
                                    <span className="font-bold text-lg text-gray-900">TECHCORP</span>
                                    <span className="font-bold text-lg text-gray-900">GLOBAL</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* ═══ PROJECT SHOWCASE GALLERY ═══ */}
                    <div className="mt-28" data-aos="fade-up" data-aos-delay="100">
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">Recent Work</h3>
                            <a href="#projects" className="text-sm font-bold text-primary flex items-center gap-2 hover:gap-3 transition-all">
                                View all <span className="material-icons text-sm">arrow_forward</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop', label: 'Nova Banking' },
                                { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop', label: 'Analytics Dashboard' },
                                { img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop', label: 'E-Commerce Platform' },
                                { img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop', label: 'Health Platform' }
                            ].map((p, i) => (
                                <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                                    <img
                                        src={p.img}
                                        alt={p.label}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-white text-sm font-bold">{p.label}</p>
                                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider">View Project →</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Scroll Guide (on video) */}
            <div className="absolute top-[60vh] md:top-[85vh] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40">
                <div className="w-px h-12 bg-gradient-to-b from-white/0 to-white/40"></div>
                <span className="text-[10px] items-center gap-2 uppercase tracking-[0.3em] font-black">Scroll</span>
            </div>
        </section>
    );
};
