
import React, { useState } from 'react';

const openPositions = [
    {
        id: 1,
        title: 'Senior React Developer',
        department: 'Engineering',
        type: 'Full-time',
        location: 'Remote / Hybrid',
        experience: '4-6 years',
        salary: '₹12L - ₹22L',
        tags: ['React', 'TypeScript', 'Next.js', 'Node.js'],
        hot: true
    },
    {
        id: 2,
        title: 'UI/UX Designer',
        department: 'Design',
        type: 'Full-time',
        location: 'Kochi, Kerala',
        experience: '2-4 years',
        salary: '₹8L - ₹15L',
        tags: ['Figma', 'Prototyping', 'Design Systems'],
        hot: false
    },
    {
        id: 3,
        title: 'DevOps Engineer',
        department: 'Infrastructure',
        type: 'Full-time',
        location: 'Remote',
        experience: '3-5 years',
        salary: '₹10L - ₹20L',
        tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
        hot: true
    },
    {
        id: 4,
        title: 'Flutter Developer',
        department: 'Mobile',
        type: 'Full-time',
        location: 'Remote / Hybrid',
        experience: '2-4 years',
        salary: '₹8L - ₹16L',
        tags: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
        hot: false
    },
    {
        id: 5,
        title: 'AI/ML Engineer',
        department: 'AI & Data',
        type: 'Full-time',
        location: 'Remote',
        experience: '3-5 years',
        salary: '₹15L - ₹28L',
        tags: ['Python', 'TensorFlow', 'LLMs', 'MLOps'],
        hot: true
    },
    {
        id: 6,
        title: 'Marketing Intern',
        department: 'Marketing',
        type: 'Internship',
        location: 'Kochi, Kerala',
        experience: '0-1 year',
        salary: 'Stipend Based',
        tags: ['Content', 'Social Media', 'Analytics'],
        hot: false
    }
];

const cultureHighlights = [
    {
        icon: 'rocket_launch',
        title: 'Ship Fast, Learn Faster',
        desc: 'We believe in rapid iteration and continuous learning. Every sprint is a chance to grow.'
    },
    {
        icon: 'diversity_3',
        title: 'Diverse & Inclusive',
        desc: 'We celebrate differences. Our strength comes from diverse perspectives and backgrounds.'
    },
    {
        icon: 'laptop_mac',
        title: 'Remote-First Culture',
        desc: 'Work from anywhere. We trust our team and prioritize outcomes over office hours.'
    },
    {
        icon: 'school',
        title: 'Always Learning',
        desc: 'Annual learning budgets, conference access, and weekly knowledge-sharing sessions.'
    }
];

const departments = ['All', 'Engineering', 'Design', 'Infrastructure', 'Mobile', 'AI & Data', 'Marketing'];

export const Careers: React.FC = () => {
    const [activeDept, setActiveDept] = useState('All');

    const filteredPositions = activeDept === 'All'
        ? openPositions
        : openPositions.filter(p => p.department === activeDept);

    return (
        <section className="py-32 bg-white relative overflow-hidden" id="careers">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-violet-50/50 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* ═══ SECTION 1: HIRING MESSAGING ═══ */}
                <div className="text-center mb-24" data-aos="fade-up">
                    <span className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-xs mb-6 px-5 py-2 rounded-full border border-primary/20 bg-primary/5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        We're Hiring
                    </span>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight mb-6 leading-[0.95]">
                        Join the<br />
                        <span className="gradient-text">CODESCAPE</span> Team
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        We're building the future of digital experiences — and we're looking for passionate people to help us do it. If you thrive on solving hard problems, you belong here.
                    </p>
                </div>

                {/* ═══ TEAM PHOTO COLLAGE ═══ */}
                <div className="mb-28 relative" data-aos="fade-up" data-aos-delay="100">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {/* Photo 1: Team at work */}
                        <div className="relative rounded-3xl overflow-hidden h-64 md:h-80 group col-span-1 md:row-span-2 md:h-full">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                                alt="Team collaborating"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="text-xs font-bold uppercase tracking-widest opacity-70">Team Life</p>
                                <p className="text-lg font-black">Collaborative Spirit</p>
                            </div>
                        </div>

                        {/* Photo 2: Modern office */}
                        <div className="relative rounded-3xl overflow-hidden h-64 md:h-full group">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                                alt="Modern workspace"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                        </div>

                        {/* Photo 3: Brainstorming */}
                        <div className="relative rounded-3xl overflow-hidden h-64 md:h-full group">
                            <img
                                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=800&auto=format&fit=crop"
                                alt="Team brainstorming"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                        </div>

                        {/* Photo 4: Presentation */}
                        <div className="relative rounded-3xl overflow-hidden h-64 md:h-full group hidden md:block">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
                                alt="Team presentation"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                        </div>

                        {/* Photo 5: Celebration */}
                        <div className="relative rounded-3xl overflow-hidden h-64 md:h-full group hidden md:block">
                            <img
                                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
                                alt="Team celebration"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                        </div>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-8 py-4 border border-gray-100 flex items-center gap-4 z-10">
                        <div className="flex -space-x-3">
                            {[11, 12, 13, 14, 15].map(i => (
                                <img key={i} src={`https://i.pravatar.cc/80?img=${i}`} alt="Team" className="w-10 h-10 rounded-full border-2 border-white" />
                            ))}
                        </div>
                        <div>
                            <p className="text-sm font-black text-gray-900">30+ Team Members</p>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Across 4 Countries</p>
                        </div>
                    </div>
                </div>

                {/* ═══ SECTION 2: CULTURE HIGHLIGHTS ═══ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
                    {cultureHighlights.map((item, i) => (
                        <div
                            key={i}
                            className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-all duration-500 cursor-default"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                <span className="material-icons text-primary text-2xl group-hover:text-white transition-colors">{item.icon}</span>
                            </div>
                            <h3 className="text-lg font-black text-gray-900 mb-2 tracking-tight">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* ═══ SECTION 3: OPEN POSITIONS ═══ */}
                <div className="mb-12" data-aos="fade-up">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-2">
                                Open Positions
                            </h3>
                            <p className="text-gray-500 text-base">{openPositions.length} roles available across {departments.length - 1} departments</p>
                        </div>
                    </div>

                    {/* Department Filter */}
                    <div className="flex flex-wrap gap-2 mb-10">
                        {departments.map(dept => (
                            <button
                                key={dept}
                                onClick={() => setActiveDept(dept)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeDept === dept
                                    ? 'bg-gray-900 text-white shadow-lg'
                                    : 'bg-gray-50 text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-900'
                                    }`}
                            >
                                {dept}
                                {dept !== 'All' && (
                                    <span className={`ml-2 text-xs ${activeDept === dept ? 'text-white/50' : 'text-gray-400'}`}>
                                        {openPositions.filter(p => p.department === dept).length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Job Listings */}
                    <div className="space-y-4">
                        {filteredPositions.map((job, i) => (
                            <div
                                key={job.id}
                                className="group relative bg-white rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden cursor-pointer"
                                data-aos="fade-up"
                                data-aos-delay={i * 80}
                            >
                                {/* Hover accent line */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-l-2xl"></div>

                                <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-6">
                                    {/* Left: Job Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                                            <h4 className="text-xl font-black text-gray-900 group-hover:text-primary transition-colors truncate">
                                                {job.title}
                                            </h4>
                                            {job.hot && (
                                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-50 border border-red-100 text-red-500 text-[10px] font-bold uppercase tracking-wider">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                                                    Urgent
                                                </span>
                                            )}
                                            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider">
                                                {job.department}
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400 mb-4">
                                            <span className="flex items-center gap-1.5">
                                                <span className="material-icons text-sm text-gray-300">work_outline</span>
                                                {job.type}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <span className="material-icons text-sm text-gray-300">location_on</span>
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <span className="material-icons text-sm text-gray-300">schedule</span>
                                                {job.experience}
                                            </span>
                                            <span className="flex items-center gap-1.5 font-semibold text-gray-600">
                                                <span className="material-icons text-sm text-gray-300">payments</span>
                                                {job.salary}
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {job.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-gray-500 font-semibold group-hover:border-primary/20 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right: Apply Button */}
                                    <div className="flex-shrink-0">
                                        <button className="w-full lg:w-auto px-8 py-4 bg-gray-900 text-white font-bold rounded-xl text-sm hover:bg-primary transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                                            Apply Now
                                            <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredPositions.length === 0 && (
                        <div className="text-center py-16 text-gray-400">
                            <span className="material-icons text-5xl mb-4 block opacity-30">search_off</span>
                            <p className="font-bold text-lg text-gray-500">No open positions in this department.</p>
                            <p className="text-sm mt-1">Check back soon or explore other departments!</p>
                        </div>
                    )}
                </div>

                {/* ═══ SECTION 4: BOTTOM CTA ═══ */}
                <div
                    className="mt-16 rounded-3xl bg-gray-900 p-10 md:p-16 text-center relative overflow-hidden"
                    data-aos="fade-up"
                >
                    {/* BG Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="relative">
                        <span className="material-icons text-primary/30 text-6xl mb-6 block">mail</span>
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                            Don't see your role?
                        </h3>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                            We're always on the lookout for exceptional talent. Send us your resume and we'll reach out when the right opportunity opens up.
                        </p>
                        <a
                            href="mailto:careers@thecodescape.in"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 font-black rounded-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] hover:scale-[1.03] transition-all duration-300 text-base"
                        >
                            Send Your Resume
                            <span className="material-icons text-lg">arrow_forward</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};
