"use client";

import React, { useEffect, useState } from 'react';
import { fetchGithubRepos } from '@/lib/github';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export const GithubProjects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRepos = async () => {
      try {
        const fetchedRepos = await fetchGithubRepos("FernandoAracena");
        setRepos(fetchedRepos);
      } catch (error) {
        console.error("Failed to fetch GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };

    getRepos();
  }, []);

  if (loading) {
    return <p>Laster prosjekter fra GitHub...</p>;
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
      {repos.map((repo) => (
        <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-lg">
          <h3 className="text-2xl font-bold">{repo.name}</h3>
          <p className="mt-4">{repo.description}</p>
        </a>
      ))}
    </div>
  );
};