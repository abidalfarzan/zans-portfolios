function About({ id }) {
    return (
        <>
            {/* Main Section - Menggunakan 12 Kolom Grid */}
            <section id={id} className="min-h-[93vh] w-full bg-dark grid grid-cols-1 lg:grid-cols-12 border-2 border-border text-light overflow-hidden">

                {/* The My Profile Side (Porsi 5 dari 12 Kolom) */}
                <div className="lg:col-span-5 relative group p-10 flex flex-col justify-end bg-dark overflow-hidden border-b-2 lg:border-b-0 lg:border-r-2 border-border">

                    <img
                        src="/images/about_1.png"
                        alt="Abidal Farzan Rosyidi"
                        className="absolute inset-0 w-full h-full object-cover object-center opacity-10 group-hover:opacity-60 transition-opacity duration-400 pointer-events-none"
                    />

                    {/* Layer Konten Teks & Tombol */}
                    <div className="relative z-10 space-y-4">
                        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight lowercase font-jetbrains-mono">
                            about <span className="text-main uppercase">ME</span>
                        </h2>

                        <div className="space-y-5 text-neutral-300 text-sm sm:text-base max-w-auto text-justify tracking-tighter leading-relaxed">
                            <p>
                                Hi, I'm <span className="text-main font-semibold font-inter-tight">Abidal Farzan Rosyidi</span>, a passionate developer from Bekasi, West Java. I am currently studying at <span className="text-main font-semibold">IDN Boarding School Bogor</span>, where I am sharpening my expertise in software development.
                            </p>
                            <p>
                                With a strong foundation in both design and coding, I love bridging the gap between user experience and technical execution to build clean, functional web applications.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 font-jetbrains-mono">
                            <button className="border-2 border-main text-light text-sm md:text-base px-3 sm:px-6 py-2 md:py-3 font-semibold cursor-pointer hover:bg-main hover:text-dark transition-all duration-200">
                                <a href="#contact">Contact Me</a>
                            </button>

                            <button className="bg-main text-dark border-2 border-main text-sm md:text-base px-3 sm:px-6 py-2 md:py-3 font-bold flex items-center justify-center cursor-pointer gap-2 hover:bg-dark hover:border-main hover:text-light transition-all duration-200">
                                Check My CV
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/2000/svg">
                                    <path d="M5 3h6v2H5v14h14v-6h2v8H3V3h2zm8 0h8v8h-2V7h-2V5h-4V3zm0 8h-2v2H9v2h2v-2h2v-2zm4-4h-2v2h-2v2h2V9h2V7z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>


                {/* The Education and Skills (Porsi 7 dari 12 Kolom) */}
                <div className="lg:col-span-7 flex flex-col">

                    {/* SECTION UTARA: EDUCATION */}
                    <div className="h-fit py-8 font-jetbrains-mono border-b-2 border-border flex flex-col justify-center items-center text-center">
                        <div className="mb-4 leading-10">
                            <span className="text-light text-4xl font-bold tracking-widest lowercase block">about</span>
                            <span className="text-main text-2xl font-extrabold tracking-wider uppercase block leading-none">EDUCATION</span>
                        </div>

                        <div className="border-2 border-main py-4 px-4 md:px-8 flex flex-col items-start mt-4 hover:scale-101 transform duration-300 hover:shadow-[0_0_12px_#93d009]">
                            <h3 className="text-base md:text-xl font-bold tracking-tight text-light mb-1">
                                SMK IDN BOARDING SCHOOL BOGOR
                            </h3>
                            <p className="text-main text-sm md:text-base font-semibold tracking-tighter">
                                2024-PRESENT | SOFTWARE DEVELOPER
                            </p>
                        </div>
                    </div>

                    {/* SECTION SELATAN: SKILLS */}
                    <div className="h-full py-8 font-jetbrains-mono flex flex-col justify-start items-center text-center overflow-y-auto">
                        <div className="mb-4 leading-10">
                            <span className="text-light text-4xl font-bold tracking-widest lowercase block">about</span>
                            <span className="text-main text-2xl font-extrabold tracking-wider uppercase block leading-none">SKILLS</span>
                        </div>

                        {/* Box Container Utama Skills */}
                        <div className="px-6 w-full space-y-5 text-left font-mono mt-4">

                            {/* Sub-Box 1: Technical Skills */}
                            <div className="border-2 border-main p-4 hover:scale-101 transform duration-300 hover:shadow-[0_0_12px_#93d009]">
                                <h4 className="text-main font-bold text-lg md:text-xl tracking-none mb-3 py-2 px-3 border-2 border-main w-fit">
                                    TECHNICAL SKILLS:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {["UI/UX DESIGN", "WEB DEVELOPMENT", "MYSQL", "HTML & CSS", "GIT", "JAVASCRIPT", "TAILWIND CSS", "REACT.JS", "LARAVEL"].map((skill) => (
                                        <span key={skill} className="bg-main text-dark text-base md:text-lg tracking-tight font-bold px-4 py-1 font-inter-tight">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Sub-Box 2: Soft Skills */}
                            <div className="border-2 border-main p-4 hover:scale-101 transform duration-300 hover:shadow-[0_0_12px_#93d009]">
                                <h4 className="text-main font-bold text-lg md:text-xl tracking-none mb-3 py-2 px-3 border-2 border-main w-fit">
                                    SOFT SKILLS:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {["PROBLEM SOLVING", "TEAMWORK", "COMMUNICATION", "ADAPTABILITY", "TIME MANAGEMENT", "PRESENTATION"].map((skill) => (
                                        <span key={skill} className="bg-main text-dark text-base md:text-lg tracking-tight font-bold px-4 py-1 font-inter-tight">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}

export default About;