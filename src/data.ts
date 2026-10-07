export type Skill = {
  name: string;
  icon: string;
  category: string;
};

export const skills: Skill[] = [
  { name: "HTML", icon: "html", category: "Web Development" },
  { name: "CSS", icon: "css", category: "Web Development" },
  { name: "JavaScript", icon: "js", category: "Languages" },
  { name: "TypeScript", icon: "ts", category: "Languages" },
  { name: "Java", icon: "java", category: "Languages" },
  { name: "Go (some)", icon: "go", category: "Languages" },
  { name: "Python", icon: "py", category: "Languages" },
  { name: "Bash", icon: "bash", category: "Tools" },

  // theyre all the same but whatever
  { name: "React", icon: "react", category: "Frontend" },
  { name: "JSX", icon: "react", category: "Frontend" },
  { name: "TSX", icon: "ts", category: "Frontend" },
  
  { name: "Rollup", icon: "rollup", category: "Bundlers" },
  
  { name: "Node JS", icon: "nodejs", category: "Runtimes" },
  
  { name: "Docker", icon: "docker", category: "Tools" },
  { name: "GitHub", icon: "github", category: "Tools" },
  { name: "Linux", icon: "linux", category: "Tools" },
  { name: "VS Code", icon: "vscode", category: "Tools" },
  { name: "Discord", icon: "discord", category: "Other" },
  
  // web servers i guess?
  { name: "Express", icon: "express", category: "Web Servers" },
  
  { name: "Cloudflare", icon: "cloudflare", category: "Routing" },
];
