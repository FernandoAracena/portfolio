
import { ProjectCard } from "@/components/ProjectCard";
import { GithubProjects } from "@/components/GithubProjects";

import { featuredProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const workProjects = featuredProjects.filter(p => (p as any).category === 'work');
  const personalProjects = featuredProjects.filter(p => (p as any).category === 'personal');

  return (
    <main>
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold">Prosjekter</h1>
        <p className="mt-8 text-lg">
          Fra enkle nettsider til komplekse, nasjonale bedriftsløsninger – her er et utvalg av prosjekter som viser bredden i min tekniske kompetanse.
        </p>

        <h2 className="mt-12 text-3xl font-bold border-b pb-2">AI4Interviews & Oslo Politidistrikt</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workProjects.map((project) => (
            <div key={project.slug} className="h-full">
              <ProjectCard
                title={project.title}
                description={project.description}
                slug={project.slug}
                image={project.image}
              />
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-3xl font-bold border-b pb-2">Egne Prosjekter</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {personalProjects.map((project) => (
            <div key={project.slug} className="h-full">
              <ProjectCard
                title={project.title}
                description={project.description}
                slug={project.slug}
                image={project.image}
              />
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://github.com/FernandoAracena"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2"
          >
            Se flere prosjekter på GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
