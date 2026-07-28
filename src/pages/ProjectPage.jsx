import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS_DATA } from '../models/ProjectData';

function ProjectPage() {
    return (
        <>
            <Navbar />
            
            <div className="min-h-screen bg-dark px-6 py-10 md:px-12">
                <div className="mx-auto flex max-w-6xl flex-col gap-6">
                    <div className="mb-4">
                        <h1 className="text-4xl font-bold uppercase tracking-tight text-light font-jetbrains-mono">
                            All <span className="text-main lowercase">Projects</span>
                        </h1>
                        <p className="mt-2 text-sm text-neutral-300 font-inter-tight">
                            A collection of the projects I have worked on.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {PROJECTS_DATA.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default ProjectPage;