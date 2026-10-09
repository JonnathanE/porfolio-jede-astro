export interface NavItem {
    label: string;
    href: string;
    icon: string;
}

export const navItems: NavItem[] = [
    { label: "Inicio", href: "/", icon: "home-outline" },
    { label: "Perfil", href: "/profile", icon: "user-outlined" },
    { label: "Experiencia", href: "/experience", icon: "suitcase-line" },
    { label: "Proyectos", href: "/projects", icon: "folder-outline" },
    { label: "Blog", href: "/blog", icon: "blog" },
    { label: "Contacto", href: "/contact", icon: "email-outline" },
];
