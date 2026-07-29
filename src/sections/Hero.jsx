import { useState, useEffect } from 'react';

function Hero({ id }) {
    // 1. Array judul bebas ditambah sebanyak apa pun!
    const titles = [
        "WEB DESIGNER",
        "SOFTWARE DEVS",
        "GRAPHIC DESIGN",
        "FULLSTACK DEVS",
        "UI/UX DESIGNER"
    ];

    const [index, setIndex] = useState(0);

    // 2. Timer useEffect untuk menggeser index tiap 2 detik
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [titles.length]);

    // 3. Mengambil 3 teks aktif secara matematis
    const topText = titles[index % titles.length];
    const middleText = titles[(index + 1) % titles.length];
    const bottomText = titles[(index + 2) % titles.length];
    const backupText = titles[(index + 3) % titles.length];
    
    return (
        <>
            <section id={id} className="relative border-2 border-border bg-dark h-[92vh] w-full overflow-hidden px-10 flex flex-col justify-start font-jetbrains-mono">


                {/* Container Teks Background */}
                <div className="z-0 select-none flex flex-col justify-start items-center mt-20">

                    {/* Badge Nama */}
                    <p className="lowercase px-3 py-1 text-xs md:text-base lg:text-2xl bg-main text-dark font-bold tracking-tighter lg:tracking-[-2px] w-fit">
                        in a need for a
                    </p>

                    {/* Box Teks 3 Baris dengan Animasi Transition */}
                    <div
                        key={index}
                        className="flex flex-col items-center mt-6 gap-2 transition-all duration-500 ease-in-out animate-slide-up leading-16 sm:leading-20 md:leading-none"
                    >
                        {/* Baris 1: Teks Utama (Hijau Solid) */}
                        <h1 className="uppercase text-6xl md:text-[11vw] lg:text-[11.3vw] font-bold text-main tracking-[-0.2rem] sm:tracking-[-0.3rem] lg:tracking-[-0.5rem] text-center md:whitespace-nowrap">
                            {topText}
                        </h1>

                        {/* Baris 2: Teks Outline Putih (Tengah) */}
                        <h1 className="uppercase text-6xl md:text-[11vw] lg:text-[11.3vw] font-bold text-transparent [-webkit-text-stroke:0.4px_var(--color-light)] lg:[-webkit-text-stroke:1px_var(--color-light)] tracking-[-0.2rem] sm:tracking-[-0.3rem] lg:tracking-[-0.5rem] text-center md:whitespace-nowrap">
                            {middleText}
                        </h1>

                        {/* Baris 3: Teks Outline Putih (Bawah) */}
                        <h1 className="uppercase text-6xl md:text-[11vw] lg:text-[11.3vw] font-bold text-transparent [-webkit-text-stroke:0.4px_var(--color-light)] lg:[-webkit-text-stroke:1px_var(--color-light)] tracking-[-0.2rem] sm:tracking-[-0.3rem] lg:tracking-[-0.5rem] text-center md:whitespace-nowrap">
                            {bottomText}
                        </h1>

                        {/* Baris 4: Muncul waktu di tab*/}
                        <h1 className="hidden md:block lg:hidden uppercase text-6xl md:text-[11vw] lg:text-[11.3vw] font-bold text-transparent [-webkit-text-stroke:0.4px_var(--color-light)] lg:[-webkit-text-stroke:1px_var(--color-light)] tracking-[-0.2rem] sm:tracking-[-0.3rem] lg:tracking-[-0.5rem] text-center md:whitespace-nowrap">
                            {backupText}
                        </h1>
                    </div>

                </div>

                {/* Foto Karakter - Menempel di Tengah Bawah */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 h-screen w-full flex items-center pointer-events-none">
                    <img
                        src="/shadow.png"
                        alt="Zan"
                        className="h-full w-full object-contain object-bottom pointer-events-auto"
                    />
                </div>

                {/* Foto Karakter - Menempel di Tengah Bawah */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 h-[70vh] w-4/5 sm:w-2/3 lg:w-auto flex items-center pointer-events-none">
                    <img
                        src="/mes.svg"
                        alt="Zan"
                        className="h-full w-full object-contain object-bottom pointer-events-auto transition-all"
                    />
                </div>

                {/* Scroll Down */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 animate-bounce ">
                    <span className="text-light text-sm md:text-lg lg:text-2xl uppercase tracking-tighter font-jetbrains-mono">
                        You just found me!
                    </span>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
                        <path d="M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7V8z" fill="#ffffff" />
                    </svg>
                </div>

            </section>
        </>
    );
}

// {/* Parent */ }
// <section id={id} className="relative border-2 border-border bg-dark h-[92vh] w-full overflow-hidden px-10 flex flex-col justify-start font-jetbrains-mono">

//     {/* Container Teks Background */}
//     <div className="z-0 select-none leading-[0.82] flex flex-col justify-start mt-10">
//         <h1 className="lowercase text-[15vw] md:text-[22vw] font-bold text-main tracking-[-0.14em]">
//             portfolio
//         </h1>
//         <h1 className="lowercase text-[15vw] md:text-[22vw] text-light tracking-[-0.14em]">
//             portfolio
//         </h1>
//     </div>

//     {/* Foto Karakter - Pojok Kanan Bawah Section */}
//     <div className="absolute bottom-0 right-5 z-10 h-[90vh] w-auto flex items-end">
//         <img
//             src="/mes.svg"
//             alt="Zan"
//             className="h-full w-full object-contain object-bottom transition-all hover:grayscale-100"
//         />
//     </div>

//     {/* Scroll Down - Sekarang dikunci posisinya pakai absolute di kiri bawah */}
//     <div className="absolute bottom-12 left-16 z-20 flex items-center gap-3 animate-bounce ">
//         <span className="text-light text-lg md:text-2xl uppercase tracking-tighter font-jetbrains-mono">
//             SCROLL DOWN
//         </span>
//         <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
//             <path d="M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7V8z" fill="#ffffff" />
//         </svg>
//     </div>

// </section>

export default Hero;