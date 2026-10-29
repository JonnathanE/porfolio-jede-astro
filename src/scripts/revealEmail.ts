// The address ships base64-encoded so it never appears in the static HTML.
const links = document.querySelectorAll<HTMLAnchorElement>("a[data-email]");

links.forEach((link) => {
    const encoded = link.dataset.email;
    if (!encoded) return;

    try {
        const email = atob(encoded);
        link.href = `mailto:${email}`;
        link.textContent = email;
    } catch (error) {
        console.warn("No se pudo decodificar el correo:", error);
    }
});
