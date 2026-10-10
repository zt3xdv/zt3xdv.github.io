export type Skill = {
  name: string;
  icon: string;
  category: string;
};

export const skills: Skill[] = [
  { name: "TypeScript", icon: "ts", category: "Languages", featured: true },
  { name: "React", icon: "react", category: "Frontend", featured: true },
  { name: "GitHub", icon: "github", category: "Tools", featured: true },
  { name: "Linux", icon: "linux", category: "Tools", featured: true },
  { name: "HTML", icon: "html", category: "Web Development" },
  { name: "CSS", icon: "css", category: "Web Development" },
  { name: "JavaScript", icon: "js", category: "Languages" },
  { name: "Java", icon: "java", category: "Languages" },
  { name: "Go (some)", icon: "go", category: "Languages" },
  { name: "Python", icon: "py", category: "Languages" },
  { name: "Bash", icon: "bash", category: "Tools" },
  { name: "Rollup", icon: "rollup", category: "Bundlers" },
  { name: "Node JS", icon: "nodejs", category: "Runtimes" },
  { name: "Docker", icon: "docker", category: "Tools" },
  { name: "Discord", icon: "discord", category: "Other" },
  { name: "Cloudflare", icon: "cloudflare", category: "Routing" },
];
