import ProjectCard from "../components/ProjectCard";
import { PROJECTS_DATA } from "../models/ProjectData";
import { Link } from "react-router-dom";

function Project({ id }) {

    return (
        <>
            <section id={id} className="min-h-screen w-full bg-dark flex flex-col justify-center items-center text-light p-6 md:p-12 border-b-2 border-border ">

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase font-jetbrains-mono mb-10">
                    my
                    <span className="text-main lowercase">Projects</span>
                </h1>

                {/* Desktop Grid */}
                <div className="hidden container md:grid grid-cols-2 justify-items-center items-center gap-y-6">
                    {PROJECTS_DATA.slice(0, 4).map((items) => (
                        <ProjectCard key={items.id} {...items} />
                    ))}
                </div>

                {/* Mobile Grid */}
                <div className="container grid md:hidden grid-cols-1 justify-items-center items-center gap-y-4">
                    {PROJECTS_DATA.slice(0, 2).map((items) => (
                        <ProjectCard key={items.id} {...items} />
                    ))}
                </div>

                {/* 2. Ganti <a> menjadi <Link to="/projects"> */}
                <Link
                    to="/projects"
                    className="inline-flex items-center whitespace-nowrap gap-2 font-jetbrains-mono text-lg text-main border-b-2 border-main mt-7 hover:opacity-80 transition-opacity"
                >
                    see more projects
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 16H6v-2h8v-4h2v2h2v2h2v2h-2v2h-2v2h-2v-4Zm-8-2H4V4h2v10Z" />
                    </svg>
                </Link>

            </section>
        </>
    );
}

export default Project; 