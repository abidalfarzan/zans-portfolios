import ExperienceCard from "../components/ExperienceCard";
import { EXPERIENCES_DATA } from "../models/ExperienceData";

function Experiences({ id }) {
    return (
        <section id={id} className="min-h-screen w-full bg-dark flex flex-col justify-center items-center text-light p-6 md:p-12 border-b-2 border-border">

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase font-jetbrains-mono mb-10">
                my <span className="text-main lowercase">Experiences</span>
            </h1>

            {/* Container Scroll Kesamping di HP/Tablet, Bertumpuk di Laptop */}
            <div className="w-full max-w-5xl p-4 border-2 border-border flex flex-row lg:flex-col gap-4 lg:gap-6 overflow-x-auto lg:overflow-hide bg-dark scrollbar-thin">
                {EXPERIENCES_DATA.map((items) => (
                    <ExperienceCard key={items.id} {...items} />
                ))}
            </div>

        </section>
    );
}

export default Experiences;