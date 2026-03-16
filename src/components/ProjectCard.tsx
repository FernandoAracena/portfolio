import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  image: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, slug, image }) => {
  return (
    <Link href={`/projects/${slug}`} className="block h-full group">
      <div className="bg-card p-6 rounded-lg h-full flex flex-col border border-border/50 hover:border-border transition-colors shadow-sm hover:shadow-md">
        <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-md bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow line-clamp-4">{description}</p>
        <div className="mt-auto font-medium text-primary flex items-center">
          Les mer <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );

};