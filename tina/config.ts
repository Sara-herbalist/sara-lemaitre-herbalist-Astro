import { defineConfig } from "tinacms";

export default defineConfig({
  // Your Tina Cloud credentials — fill these in after creating a Tina Cloud account at app.tina.io
  clientId: "99eb6a97-7152-4ecf-94e2-0d970e95077f",
  token: "6a020e03d6073fa43e4c1b7ba84717352095e6c0",
  branch: process.env.TINA_BRANCH || process.env.CF_PAGES_BRANCH || "main",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [

      // ── HOMEPAGE ──────────────────────────────────────────────
      {
        name: "homepage",
        label: "Homepage",
        path: "content/homepage",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "string",
            name: "heroEyebrow",
            label: "Hero eyebrow text",
            description: "The small text above your name (e.g. Clinical herbalist · Naturopath)",
          },
          {
            type: "rich-text",
            name: "heroDesc",
            label: "Hero description",
            description: "The paragraph below your name on the homepage",
          },
          {
            type: "string",
            name: "introTitle",
            label: "Practice section title",
          },
          {
            type: "rich-text",
            name: "introBody",
            label: "Practice section text",
          },
        ],
      },

      // ── PRICING ───────────────────────────────────────────────
      {
        name: "pricing",
        label: "Pricing",
        path: "content/pricing",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "number",
            name: "initialConsultation",
            label: "Initial consultation price (£)",
          },
          {
            type: "number",
            name: "followUp",
            label: "Follow-up consultation price (£)",
          },
          {
            type: "number",
            name: "athleteConsultation",
            label: "Athlete consultation price (£)",
          },
          {
            type: "number",
            name: "hormonalReset",
            label: "Hormonal Reset Programme price (£)",
          },
          {
            type: "number",
            name: "stressBurnout",
            label: "Stress & Burnout Recovery price (£)",
          },
          {
            type: "number",
            name: "perimenopause",
            label: "Perimenopause Support price (£)",
          },
          {
            type: "number",
            name: "athletePerformance",
            label: "Athlete Performance & Recovery price (£)",
          },
          {
            type: "number",
            name: "ihm",
            label: "Indian Head Massage price (£)",
          },
          {
            type: "number",
            name: "retainerStandard",
            label: "Monthly retainer Standard price (£)",
          },
          {
            type: "number",
            name: "retainerIntensive",
            label: "Monthly retainer Intensive price (£)",
          },
        ],
      },

      // ── WORKSHOPS ─────────────────────────────────────────────
      {
        name: "workshops",
        label: "Workshops",
        path: "content/workshops",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page title",
          },
          {
            type: "rich-text",
            name: "intro",
            label: "Introduction text",
          },
          {
            type: "object",
            name: "workshopList",
            label: "Workshop list",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title }),
            },
            fields: [
              { type: "string", name: "title", label: "Workshop title" },
              { type: "rich-text", name: "description", label: "Description" },
              { type: "string", name: "duration", label: "Duration (e.g. 3 hours)" },
              { type: "string", name: "format", label: "Format (e.g. In person · Online)" },
            ],
          },
        ],
      },

      // ── GENERAL SETTINGS ──────────────────────────────────────
      {
        name: "settings",
        label: "Settings",
        path: "content/settings",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "string",
            name: "calendlyUrl",
            label: "Calendly booking URL",
            description: "Your full Calendly link (e.g. https://calendly.com/sara-lemaitre-herbalist)",
          },
          {
            type: "string",
            name: "instagramUrl",
            label: "Instagram URL",
          },
          {
            type: "string",
            name: "linkedinUrl",
            label: "LinkedIn URL",
          },
          {
            type: "string",
            name: "email",
            label: "Contact email address",
          },
        ],
      },

      // ── TESTIMONIALS ──────────────────────────────────────────
      {
        name: "testimonials",
        label: "Testimonials",
        path: "content/testimonials",
        format: "json",
        fields: [
          {
            type: "string",
            name: "quote",
            label: "Quote",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "author",
            label: "Author (first name or initials)",
          },
          {
            type: "string",
            name: "condition",
            label: "Condition or context (e.g. Endometriosis)",
          },
        ],
      },

    ],
  },
});
