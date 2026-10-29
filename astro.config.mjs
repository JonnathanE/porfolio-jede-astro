// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Onest",
      cssVariable: "--font-onest",
      weights: ["100 900"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
  ],
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
      CONTACT_TO_EMAIL: envField.string({
        context: "server",
        access: "secret",
      }),
      CONTACT_FROM_EMAIL: envField.string({
        context: "server",
        access: "secret",
        default: "Portafolio <onboarding@resend.dev>",
      }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
    },
  },
});
