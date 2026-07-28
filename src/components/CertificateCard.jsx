import React from 'react';

function CertificateCard({ title, issuer, date, image, link }) {
    return (
        <div className="flex flex-col justify-center items-center border-2 border-main p-2 bg-dark max-w-sm w-full hover:scale-101 transform duration-300 hover:shadow-[0_0_12px_#93d009]">

            {/* Container Gambar dengan posisi Relative */}
            <div className="relative w-full h-full overflow-hidden">

                {/* 1. Gambar Sertifikat */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-120 object-cover hover:scale-105 transform transition duration-200"
                />

                {/* 2. Overlay Info Sertifikat (Menempel di Bawah Gambar) */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-dark/90 border-2 border-main flex flex-col gap-2">

                    {/* Issuer Badge */}
                    <span className="px-2 py-1 bg-main text-dark font-bold font-jetbrains-mono text-xs w-fit">
                        {issuer}
                    </span>

                    {/* Title */}
                    <h2 className="text-base text-light font-bold font-jetbrains-mono leading-tight">
                        {title}
                    </h2>

                    {/* Date & Link Button */}
                    <div className="flex justify-between items-center mt-1">
                        <p className="text-sm text-neutral-300 font-bold font-jetbrains-mono">{date}</p>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center p-2 border border-main bg-dark text-light hover:bg-main hover:text-dark transition-colors"
                        >
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11 7H5v12h12v-6h2v8H3V5h8v2Zm0 6v2H9v-2h2Zm2 0h-2v-2h2v2Zm2-2h-2V9h2v2Zm6 0h-2V7h-2V5h-4V3h8v8Zm-4-2h-2V7h2v2Z" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default CertificateCard;