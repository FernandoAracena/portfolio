import { featuredProjects } from "@/lib/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = featuredProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Prosjekt ikke funnet",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Aracena Fernando`,
      description: project.description,
      images: [project.image],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = featuredProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <div className="relative w-full aspect-video my-8 overflow-hidden rounded-lg bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-contain"
          />
        </div>
        <p className="text-lg">{(project as any).longDescription || project.description}</p>
        <div className="mt-8 flex flex-col md:flex-row gap-8 justify-between items-start">
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Teknologier</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project as any).url && (
            <div className="mt-4 md:mt-0">
              <a
                href={(project as any).url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2"
              >
                Besøk {(project as any).url}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          )}
        </div>
      </div>

      {(project as any).subProjects && (
        <div className="container mx-auto pb-12">
          <h2 className="text-3xl font-bold mb-8">Nøkkelkomponenter</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {(project as any).subProjects.map((sub: any, index: number) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-primary">{sub.title}</h3>
                <p className="text-muted-foreground">{sub.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
