

function Footer() {
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/abidalfarzan' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/abidalfarzanr' },
        { name: 'Instagram', url: 'https://instagram.com/si.farzz_' }
    ];

    return (
        <>
            <div className="p-6 gap-2 bg-dark border-2 border-border flex sm:flex-row-reverse flex-col sm:flex-row justify-center items-center sm:justify-between font-jetbrains-mono">
                <div className="flex gap-4 text-light text-xs sm:text-sm tracking-tight font-bold">
                    {socialLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.url}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-main transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <p className="text-light text-xs sm:text-sm tracking-tight font-bold">
                    © 2026 Abidal Farzan Rosyidi
                </p>
            </div>
        </>
    );
}

export default Footer;