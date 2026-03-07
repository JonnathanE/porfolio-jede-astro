export interface NavItem {
    label: string;
    href: string;
    icon: string;
    active?: boolean;
}

export const navItems: NavItem[] = [
    { label: "Inicio", href: "#home", icon: "home-outline", active: true },
    {
        label: "Sobre mí",
        href: "#about",
        icon: "card-account-details-outline",
    },
    { label: "Habilidades", href: "#skills", icon: "code-tags" },
    { label: "Experiencia", href: "#experience", icon: "briefcase-outline" },
    { label: "Proyectos", href: "#projects", icon: "folder-outline" },
    // { label: "Contacto", href: "#contact", icon: "email-outline" },
];
