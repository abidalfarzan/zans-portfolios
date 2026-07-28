import { useState } from 'react';

function Contact({ id }) {
    const [form, setForm] = useState({ name: '', from: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! I will get back to you soon.');
        setForm({ name: '', from: '', message: '' });
    };

    return (
        <section id={id} className="bg-dark py-20 px-10 md:px-16">
            <div className="flex flex-col lg:flex-row gap-10 items-start">

                {/* ---- Left: Get in TOUCH ---- */}
                <div className="flex flex-col space-y-4 font-jetbrains-mono">
                    <h2 className="font-bold text-base text-light">
                        Get in <span className="text-main underline">TOUCH</span>!
                    </h2>
                    <h2 className="font-bold text-5xl md:text-6xl text-light mb-2 tracking-[-4px]">
                        Let's <span className="text-main">TALK</span>!
                    </h2>
                    <p className="font-inter-tight text-light/60 text-sm leading-relaxed max-w-lg">
                        I’m always open to discussing new projects, collaboration opportunities, or internship roles. If you think I’d be a good fit for your team or project, feel free to reach out, I’d love to connect!
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-3 font-jetbrains-mono">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-main/10 border border-main text-main flex items-center justify-center">
                                <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 20H4v-2h16v2ZM4 18H2V6h2v12Zm18 0h-2V6h2v12Zm-8-4h-4v-2h4v2Zm-4-2H8v-2h2v2Zm6 0h-2v-2h2v2Zm-8-2H6V8h2v2Zm10 0h-2V8h2v2Zm2-4H4V4h16v2Z" />
                                </svg>
                            </div>
                            <span className="text-light/70 text-sm">abidalfarzan02@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-main/10 border border-main text-main flex items-center justify-center">
                                <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 22h-9v-2h9v2Zm-9-2h-2v-2h2v2Zm11 0h-2v-5h2v5Zm-13-2H8v-2h2v2Zm7-1h-4v-2h4v2Zm-9-1H6v-2h2v2Zm5-1h-2v-2h2v2Zm8 0h-4v-2h4v2ZM6 14H4v-2h2v2Zm5-1H9v-2h2v2Zm-7-1H2V3h2v9Zm5-1H7V7h2v4Zm2-4H9V3h2v4ZM9 3H4V1h5v2Z" />
                                </svg>
                            </div>
                            <span className="text-light/70 text-sm">+62 896-6908-3894</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-5 mt-4">
                        {[
                            {
                                name: 'GitHub',
                                icon: (
                                    <svg className="w-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M23 9v6h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-1v-5h-1v-1h1v-1h2v-1h1v-1h1V9h-1V6h-2v1h-1v1h-1V7h-4v1H9V7H8V6H6v3H5v5h1v1h1v1h2v2H7v-1H6v-1H4v1h1v2h1v1h3v3H8v-1H6v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h1v1h1v2h1v2z"></path>
                                    </svg>

                                ),
                                href: 'https://github.com/abidalfarzan/',
                            },
                            {
                                name: 'LinkedIn',
                                icon: (
                                    <svg className="w-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zm-9 10v8h-3V9h3v1h1V9h4v1h1v10h-3v-8zM4 8V5h3v3zm3 1v11H4V9z"></path>
                                    </svg>
                                ),
                                href: 'https://linkedin.com/in/abidalfarzanr/',
                            },
                            {
                                name: 'Instagram',
                                icon: (
                                    <svg className="w-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18 22H6v-2h12v2ZM6 20H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 18H2V6h2v12Zm18 0h-2V6h2v12Zm-8-2h-4v-2h4v2Zm-4-2H8v-4h2v4Zm6 0h-2v-4h2v4Zm-2-4h-4V8h4v2Zm4-2h-2V6h2v2ZM6 6H4V4h2v2Zm14 0h-2V4h2v2Zm-2-2H6V2h12v2Z"></path>
                                    </svg>
                                ),
                                href: 'https://instagram.com/si.farzz_/',
                            },
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-light flex items-center justify-center hover:border-main hover:text-main transition-all duration-300"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* ---- Right: Let's TALK form ---- */}
                <div className="flex-1 w-full font-jetbrains-mono">

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full p-6 border border-main">
                        {/* Name */}
                        <div>
                            <label className="text-light text-base uppercase tracking-widest mb-1 block font-jetbrains-mono">
                                NAME:
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name..."
                                required
                                className="font-inter-tight w-full bg-border border border-main/20 text-light text-sm px-4 py-3 outline-none focus:border-main transition-colors duration-300 placeholder:text-light/20"
                            />
                        </div>

                        {/* From / Email */}
                        <div>
                            <label className="text-light text-base uppercase tracking-widest mb-1 block font-jetbrains-mono">
                                FROM:
                            </label>
                            <input
                                type="email"
                                name="from"
                                value={form.from}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                required
                                className="font-inter-tight w-full bg-border border border-main/20 text-light text-sm px-4 py-3 outline-none focus:border-main transition-colors duration-300 placeholder:text-light/20"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-light text-base uppercase tracking-widest mb-1 block font-jetbrains-mono">
                                MESSAGE:
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Your message..."
                                required
                                rows={5}
                                className="font-inter-tight w-full bg-border border border-main/20 text-light text-sm px-5 py-3 outline-none focus:border-main transition-colors duration-300 placeholder:text-light/20 resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-6 py-3 bg-main text-black font-bold text-sm uppercase tracking-widest hover:scale-110 hover:cursor-pointer hover:shadow-[0_0_20px_rgba(181,255,0,0.4)] transition-all duration-300 w-fit"
                        >
                            SUBMIT
                            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M4 19h4v2H2v-8h2v6Zm8 0H8v-2h4v2Zm4-2h-4v-2h4v2Zm4-2h-4v-2h4v2Zm-10-2H4v-2h6v2Zm12 0h-2v-2h2v2ZM8 5H4v6H2V3h6v2Zm12 6h-4V9h4v2Zm-4-2h-4V7h4v2Zm-4-2H8V5h4v2Z" /></svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
