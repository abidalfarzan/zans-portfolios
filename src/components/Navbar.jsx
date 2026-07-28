import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Data navItems yang fleksibel (isAnchor: true untuk scroll section, false untuk beda halaman)
    const navItems = [
        { label: 'about', path: '#about', isAnchor: true },
        { label: 'experiences', path: '#experiences', isAnchor: true },
        { label: 'projects', path: '#projects', isAnchor: true },
        { label: 'certificates', path: '#certificates', isAnchor: true },
    ];

    // Fungsi Cerdas untuk handle Smooth Scroll & Navigasi Lintas Halaman
    const handleNavClick = (e, item) => {
        setIsOpen(false); // Tutup menu mobile

        if (item.isAnchor) {
            e.preventDefault();
            const targetId = item.path.replace('#', '');

            // Jika sedang di Home Page (/), langsung smooth scroll ke section
            if (location.pathname === '/') {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Jika sedang di halaman lain (misal /projects), pindah ke Home dulu bawa hash ID-nya
                navigate(`/${item.path}`);
            }
        }
    };

    return (
        <header className="sticky top-0 left-0 w-full z-50 px-6 py-4 bg-dark/90 backdrop-blur-md border-b-2 border-border font-jetbrains-mono">
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto">

                {/* Web Logo */}
                <Link 
                    to="/#" 
                    className="text-light font-bold text-xl tracking-tighter uppercase hover:text-main transition-colors"
                >
                    ZAN.DEV
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <ul className="flex items-center gap-6">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                {item.isAnchor ? (
                                    <a
                                        href={`/${item.path}`}
                                        onClick={(e) => handleNavClick(e, item)}
                                        className="text-light text-sm tracking-wider lowercase hover:text-main transition-colors duration-300"
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className={`text-sm tracking-wider lowercase transition-colors duration-300 ${
                                            location.pathname === item.path ? 'text-main font-bold' : 'text-light hover:text-main'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Contact Button */}
                    <a
                        href="/#contact"
                        onClick={(e) => handleNavClick(e, { path: '#contact', isAnchor: true })}
                        className="px-5 py-2 bg-main text-dark text-sm font-bold lowercase tracking-wider border-2 border-main hover:bg-dark hover:text-main transition-all duration-300"
                    >
                        contact
                    </a>
                </nav>

                {/* Hamburger Button (Mobile) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-main p-2 border-2 border-main bg-dark hover:bg-main hover:text-dark transition-all cursor-pointer"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <nav className="md:hidden mt-4 pt-4 border-t-2 border-border flex flex-col gap-4 animate-slide-up">
                    <ul className="flex flex-col gap-3">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                {item.isAnchor ? (
                                    <a
                                        href={`/${item.path}`}
                                        onClick={(e) => handleNavClick(e, item)}
                                        className="block text-light text-base tracking-wider lowercase hover:text-main transition-colors duration-300"
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block text-base tracking-wider lowercase transition-colors duration-300 ${
                                            location.pathname === item.path ? 'text-main font-bold' : 'text-light hover:text-main'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Contact Button Mobile */}
                    <a
                        href="/#contact"
                        onClick={(e) => handleNavClick(e, { path: '#contact', isAnchor: true })}
                        className="w-full text-center px-5 py-2 bg-main text-dark text-sm font-bold lowercase tracking-wider border-2 border-main hover:bg-dark hover:text-main transition-all duration-300 mt-2"
                    >
                        contact
                    </a>
                </nav>
            )}
        </header>
    );
}

export default Navbar;