import React from 'react';

function ProjectCard({ title = 'Project', desc = 'More details coming soon.', image, category = [], link = '#' }) {
    const safeCategories = Array.isArray(category) ? category : [];

    return (
        <div className="flex flex-col p-4 bg-dark border-2 border-main space-y-3 w-full h-full hover:scale-101 transform duration-300 hover:shadow-[0_0_12px_#93d009]">

            {/* Pembungkus utama untuk posisi relative */}
            <div className="relative w-full overflow-hidden">

                {/* 1. Tag img berdiri sendiri (self-closing) */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-70 md:h-50 lg:h-90 object-cover border-2 border-main hover:scale-105 transform transition duration-200"
                />

                {/* 2. Tombol link menempel di atas gambar (absolute ke div parent) */}
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 flex justify-center items-center p-3 border border-main bg-dark text-light hover:bg-main hover:text-dark transition-colors"
                >
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11 7H5v12h12v-6h2v8H3V5h8v2Zm0 6v2H9v-2h2Zm2 0h-2v-2h2v2Zm2-2h-2V9h2v2Zm6 0h-2V7h-2V5h-4V3h8v8Zm-4-2h-2V7h2v2Z" />
                    </svg>
                </a>

            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-jetbrains-mono text-xl text-light font-bold">{title}</h2>
                <p className="font-inter-tight text-sm text-neutral-300 line-clamp-3">{desc}</p>

                {/* 3. Looping Array Kategori Menggunakan .map() */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {/* 1. Ambil 3 item pertama saja */}
                    {safeCategories.slice(0, 4).map((cat, index) => (
                        <span key={index} className="px-2 py-1 bg-main text-dark font-bold font-jetbrains-mono text-sm">
                            {cat}
                        </span>
                    ))}

                    {/* 2. Jika total item lebih dari 3, tampilkan sisanya */}
                    {safeCategories.length > 4 && (
                        <span className="px-2 py-1 bg-neutral-800 text-light border border-border font-bold font-jetbrains-mono text-sm">
                            +{safeCategories.length - 4}
                        </span>
                    )}
                </div>
            </div>

        </div>
    );

}

export default ProjectCard;