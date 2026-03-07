export interface Technology {
	name: string;
	icon: string;
	darkIcon?: string; // Para iconos que necesitan versión dark
}

// Lenguajes de programación
export const programmingLanguages: Technology[] = [
	{ name: "JavaScript", icon: "javascript" },
	{ name: "TypeScript", icon: "typescript" },
	{ name: "Python", icon: "python" },
	{ name: "HTML", icon: "html-5" },
	{ name: "CSS", icon: "css-3" },
	{ name: "SQL", icon: "sqlite" },
];

// Frameworks y Librerías
export const frameworksAndLibraries: Technology[] = [
	{ name: "Nest.js", icon: "nest" },
	{ name: "React.js", icon: "react" },
	// { name: "Angular", icon: "angular" },
	// { name: "Astro", icon: "astro" },
	{ name: "Django", icon: "django" },
	{ name: "Express", icon: "express" }
];

// Bases de Datos
export const databases: Technology[] = [
	{ name: "PostgreSQL", icon: "postgresql" },
	{ name: "MongoDB", icon: "mongodb" },
	{ name: "SQL Server", icon: "microsoft-sql-server" },
];

// Herramientas y Tecnologías
export const toolsAndTechnologies: Technology[] = [
	{ name: "Node.js", icon: "nodejs" },
	{ name: "Supabase", icon: "supabase" },
	{ name: "Docker", icon: "docker" },
	{ name: "Git", icon: "git" },
	{
		name: "GitHub",
		icon: "github",
	},
	{ name: "GitHub Copilot", icon: "github-copilot" },
	{ name: "AWS Lightsail", icon: "amazonaws" },
];

// Estilos y UI
export const styleUiTechnologies: Technology[] = [
    { name: "Tailwind CSS", icon: "tailwindcss" },
	{ name: "Bootstrap", icon: "bootstrap" },
];

// ETL/DATA
export const etlTechnologies: Technology[] = [
    { name: "SSIS (ETL)", icon: "microsoft-sql-server" },
];

// Exportar todo como un objeto agrupado (opcional)
export const allTechnologies = {
	languages: programmingLanguages,
	frameworks: frameworksAndLibraries,
	databases: databases,
	tools: toolsAndTechnologies,
	styleUi: styleUiTechnologies,
	etl: etlTechnologies,
};
