export interface Technology {
	name: string;
	icon: string;
}

// Catálogo único: cada tecnología se define una sola vez.
export const TECHNOLOGIES = {
	angular: { name: "Angular", icon: "angular" },
	astro: { name: "Astro", icon: "astro" },
	aws: { name: "AWS", icon: "amazonaws" },
	awsLightsail: { name: "AWS Lightsail", icon: "amazonaws" },
	bootstrap: { name: "Bootstrap", icon: "bootstrap" },
	copilot: { name: "GitHub Copilot", icon: "github-copilot" },
	css: { name: "CSS", icon: "css-3" },
	django: { name: "Django", icon: "django" },
	docker: { name: "Docker", icon: "docker" },
	elementor: { name: "Elementor", icon: "elementor" },
	express: { name: "Express.js", icon: "express" },
	fastapi: { name: "FastAPI", icon: "fastapi" },
	figma: { name: "Figma", icon: "figma" },
	git: { name: "Git", icon: "git" },
	github: { name: "GitHub", icon: "github" },
	html: { name: "HTML", icon: "html-5" },
	javascript: { name: "JavaScript", icon: "javascript" },
	mongodb: { name: "MongoDB", icon: "mongodb" },
	nest: { name: "Nest.js", icon: "nest" },
	nodejs: { name: "Node.js", icon: "nodejs" },
	go: { name: "Go", icon: "go" },
	php: { name: "PHP", icon: "php" },
	postgresql: { name: "PostgreSQL", icon: "postgresql" },
	python: { name: "Python", icon: "python" },
	react: { name: "React.js", icon: "react" },
	sql: { name: "SQL", icon: "sqlite" },
	sqlserver: { name: "SQL Server", icon: "microsoft-sql-server" },
	ssis: { name: "SSIS (ETL)", icon: "microsoft-sql-server" },
	supabase: { name: "Supabase", icon: "supabase" },
	springboot: { name: "Spring Boot", icon: "spring" },
	typescript: { name: "TypeScript", icon: "typescript" },
	tailwind: { name: "Tailwind CSS", icon: "tailwindcss" },
	wordpress: { name: "WordPress", icon: "wordpress" },
} as const satisfies Record<string, Technology>;

export type TechId = keyof typeof TECHNOLOGIES;

export const getTechnology = (id: TechId): Technology => TECHNOLOGIES[id];

// Solo lo que se muestra en la sección "Tecnologías" del inicio.
// Una tecnología puede usarse en proyectos o experiencia sin listarse aquí.
export interface TechCategory {
	title: string;
	items: TechId[];
}

export const TECH_CATEGORIES: TechCategory[] = [
	{
		title: "Lenguajes",
		items: ["javascript", "typescript", "python", "html", "css", "sql"],
	},
	{
		title: "Frameworks y librerías",
		items: ["nest", "react", "django", "express"],
	},
	{ title: "Bases de datos", items: ["postgresql", "mongodb", "sqlserver"] },
	{
		title: "Herramientas",
		items: ["nodejs", "supabase", "docker", "git", "github", "copilot", "aws"],
	},
	{ title: "Estilos y UI", items: ["tailwind", "bootstrap"] },
	{ title: "ETL / Datos", items: ["ssis"] },
];
