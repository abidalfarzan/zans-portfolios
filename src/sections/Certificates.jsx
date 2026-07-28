import { useState, useEffect } from 'react';
import CertificateCard from '../components/CertificateCard';
import { CERTIFICATE_DATA } from '../models/CertificateData';

function Certificates({ id }) {
    const [page, setPage] = useState(0);
    // 1. Ubah CARDS_PER_PAGE static menjadi State Dinamis (Default: 3)
    const [cardsPerPage, setCardsPerPage] = useState(3);

    // 2. Listener untuk mendeteksi ukuran layar secara Real-Time
    useEffect(() => {
        const updateCardsPerPage = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setCardsPerPage(1); // HP: 1 Card
            } else if (width < 1024) {
                setCardsPerPage(2); // Tablet: 2 Cards
            } else {
                setCardsPerPage(3); // Laptop / Desktop: 3 Cards
            }
        };

        // Jalankan sekali saat komponen dipasang
        updateCardsPerPage();

        // Pasang event listener saat layar di-resize
        window.addEventListener('resize', updateCardsPerPage);

        // Cleanup listener
        return () => window.removeEventListener('resize', updateCardsPerPage);
    }, []);

    // 3. Hitung total halaman berdasarkan cardsPerPage yang dinamis
    const totalPages = Math.ceil(CERTIFICATE_DATA.length / cardsPerPage);

    // 4. Safety Net: Mencegah error bug index halaman melompat/melebihi batas saat resize
    useEffect(() => {
        if (page >= totalPages && totalPages > 0) {
            setPage(totalPages - 1);
        }
    }, [cardsPerPage, totalPages, page]);

    // 5. Potong data sesuai dengan cardsPerPage saat ini
    const visibleCertificates = CERTIFICATE_DATA.slice(
        page * cardsPerPage,
        page * cardsPerPage + cardsPerPage
    );

    const handlePrev = () => {
        setPage((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setPage((prev) => Math.min(prev + 1, totalPages - 1));
    };

    return (
        <section id={id} className="min-h-screen w-full bg-dark flex flex-col justify-center items-center text-light p-6 md:p-8 border-b-2 border-border">

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase font-jetbrains-mono mb-10">
                MY <span className="text-main lowercase">certificates</span>
            </h2>

            {/* Cards Grid Responsif sesuaian Breakpoint Tailwind */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mb-10">
                {visibleCertificates.map((cert) => (
                    <CertificateCard key={cert.id} {...cert} />
                ))}
            </div>

            {/* Pagination Controls Slider */}
            <div className="flex justify-center items-center gap-4">

                <button
                    onClick={handlePrev}
                    disabled={page === 0}
                    className="w-10 h-10 border-2 border-main bg-dark text-main flex items-center justify-center text-xl font-bold hover:bg-main hover:text-dark transition-all duration-200 disabled:opacity-30 disabled:hover:bg-dark disabled:hover:text-main disabled:cursor-not-allowed cursor-pointer"
                    aria-label="Previous Page"
                >
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M8 13v-2h2v2H8Zm2-2V9h2v2h-2Zm0 4v-2h2v2h-2Zm2-6V7h2v2h-2Zm0 8v-2h2v2h-2Zm2-10V5h2v2h-2Zm0 12v-2h2v2h-2Z" /></svg>
                </button>

                {/* Box Container Indikator Kotak */}
                <div className="border-2 border-main p-2 flex items-center gap-2 bg-dark">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            className={`w-4 h-4 transition-all duration-200 cursor-pointer ${i === page
                                ? 'bg-main scale-100'
                                : 'bg-neutral-600 hover:bg-neutral-400'
                                }`}
                            aria-label={`Go to page ${i + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    disabled={page === totalPages - 1}
                    className="w-10 h-10 border-2 border-main bg-dark text-main flex items-center justify-center text-xl font-bold hover:bg-main hover:text-dark transition-all duration-200 disabled:opacity-30 disabled:hover:bg-dark disabled:hover:text-main disabled:cursor-not-allowed cursor-pointer"
                    aria-label="Next Page"
                >
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M16 13v-2h-2v2h2Zm-2-2V9h-2v2h2Zm0 4v-2h-2v2h2Zm-2-6V7h-2v2h2Zm0 8v-2h-2v2h2ZM10 7V5H8v2h2Zm0 12v-2H8v2h2Z" /></svg>
                </button>

            </div>

        </section>
    );
}

export default Certificates;