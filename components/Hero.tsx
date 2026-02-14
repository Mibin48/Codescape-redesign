
import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg pt-20">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 bg-gradient-hero"></div>
            <div className="absolute inset-0 bg-grid-dots opacity-40"></div>

            {/* Animated Geometric Shapes */}
            <div className="absolute -top-20 -right-20 w-[700px] h-[700px] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-40 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-accent/15 via-primary-400/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob-slow"></div>
            <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-gradient-to-t from-primary-300/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-1000"></div>

            {/* Floating Geometric Shapes */}
            <div className="absolute top-20 right-[10%] w-16 h-16 border-2 border-primary/20 rounded-lg rotate-12 animate-float"></div>
            <div className="absolute bottom-32 left-[15%] w-12 h-12 border-2 border-accent/20 rounded-full animate-float animation-delay-500"></div>
            <div className="absolute top-1/3 left-[8%] w-20 h-20 border-2 border-primary-400/20 rounded-lg rotate-45 animate-float animation-delay-1000"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <div
                    className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-primary/20 text-text-muted text-xs font-semibold tracking-wider uppercase shadow-sm"
                    data-aos="fade-down"
                    data-aos-delay="0"
                >
                    <span className="w-2 h-2 rounded-full bg-gradient-primary animate-pulse-slow shadow-glow"></span>
                    Digital Innovation Agency
                </div>

                {/* Main Headline */}
                <h1
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-display-lg font-black tracking-tighter text-text-main mb-6 leading-none"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    CODE<span className="gradient-text font-extrabold">SCAPE</span>
                </h1>

                {/* Tagline */}
                <p
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-text-muted mb-6 tracking-tight"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Where <span className="italic font-normal text-text-main">Creativity</span> Meets{' '}
                    <span className="font-semibold gradient-text">Technology</span>
                </p>

                {/* Description */}
                <p
                    className="mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-text-muted mb-12 leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    Building reliable, scalable, and impactful digital solutions that transform businesses and define the future of interaction.
                </p>

                {/* CTA Buttons */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <a
                        className="group w-full sm:w-auto px-8 py-4 btn-primary text-white rounded-xl font-semibold text-base sm:text-lg inline-flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden"
                        href="#services"
                    >
                        <span className="relative z-10">🚀 Start Your Project</span>
                        <span className="material-icons relative z-10 transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                    <a
                        className="group w-full sm:w-auto px-8 py-4 border-2 border-gray-300 text-text-main bg-white/80 backdrop-blur-sm rounded-xl font-semibold text-base sm:text-lg hover:border-primary hover:text-primary hover:bg-white transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                        href="#projects"
                    >
                        <span>View Our Work</span>
                        <span className="material-icons transform group-hover:scale-110 transition-transform">visibility</span>
                    </a>
                </div>

                {/* Trust Indicators */}
                <div
                    className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-text-muted"
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold gradient-text">100+</span>
                        <span>Projects Delivered</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold gradient-text">98%</span>
                        <span>Client Satisfaction</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold gradient-text">6+</span>
                        <span>Years Excellence</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                <div className="flex flex-col items-center gap-2 text-text-muted opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                    <span className="text-xs tracking-wider uppercase">Scroll</span>
                    <span className="material-icons text-2xl">keyboard_arrow_down</span>
                </div>
            </div>
        </section>
    );
};
