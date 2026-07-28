function ExperienceCard({ title, desc, image, location, date }) {
    return (
        /* w-[85vw] sm:w-[420px] & shrink-0 khusus di mobile/tablet agar card tidak menciut saat di-scroll ke samping */
        <div className='flex flex-col lg:flex-row p-4 border-2 bg-dark border-main gap-6 w-[85vw] sm:w-105 lg:w-full shrink-0 lg:shrink hover:scale-[1.01] transform duration-300 hover:shadow-[0_0_8px_#93d009] overflow-hidden'>
            
            {/* Foto / Banner */}
            <img 
                className='w-full lg:w-72 h-52 object-cover border-2 border-main shrink-0' 
                alt={title} 
                src={image} 
            />

            {/* Content Container */}
            <div className='flex flex-col justify-between h-full items-start gap-4 w-full min-w-0'>
                <div className="flex flex-col gap-2 w-full">
                    {/* Judul */}
                    <h2 className='text-xl font-jetbrains-mono text-light font-bold uppercase leading-tight wrap-break-word'>
                        {title}
                    </h2>
                    
                    {/* Deskripsi */}
                    <p className='text-sm font-inter-tight text-light font-normal text-left leading-relaxed opacity-90'>
                        {desc}
                    </p>
                </div>

                {/* Badges Tanggal & Lokasi */}
                <div className='flex flex-col lg:flex-row justify-start items-stretch lg:items-center gap-3 text-dark w-full'>
                    {/* Date Badge */}
                    <div className='flex items-center p-2.5 bg-main gap-2'>
                        <svg className="w-5 h-5 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17 4h4v18H3V4h4V2h2v2h6V2h2v2ZM5 20h14V10H5v10ZM5 8h14V6H5v2Z" />
                        </svg>
                        <span className='font-jetbrains-mono text-xs sm:text-sm font-bold whitespace-nowrap'>{date}</span>
                    </div>

                    {/* Location Badge */}
                    <div className='flex items-center p-2.5 bg-main gap-2'>
                        <svg className="w-5 h-5 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 22H5v-2h14v2ZM5 20H3v-2h2v2Zm16 0h-2v-2h2v2ZM3 18H1v-2h2v2Zm20 0h-2v-2h2v2Zm-8-7h-2v6h-2v-6H9V9h6v2ZM5 16H3v-2h2v2Zm16 0h-2v-2h2v2ZM9 12v2H5v-2h4Zm10 2h-4v-2h4v2ZM9 9H7V3h2v6Zm8 0h-2V3h2v6Zm-2-6H9V1h6v2Z"></path>
                        </svg>
                        <span className='font-jetbrains-mono text-xs sm:text-sm font-bold whitespace-nowrap'>{location}</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ExperienceCard;