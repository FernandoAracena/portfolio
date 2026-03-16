export async function fetchGithubRepos(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repos');
  }
  const data = await response.json();
  return data.filter((repo: any) => !repo.fork);
}
