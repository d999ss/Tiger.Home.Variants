module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  rules: {
    // Never render tables or <hr> - use cards and grids
    // Ban ad-hoc text sizes - require token utilities (text-h1, text-h2, text-lead, text-body)
    "no-restricted-syntax": [
      "error",
      {
        "selector": "JSXElement[openingElement.name.name=/^(table|thead|tbody|tr|td|th|hr)$/]",
        "message": "Use cards and grids — tables/hr are banned for layout."
      },
      {
        "selector": "JSXAttribute[name.name='className'][value.value=/text-\\[/]",
        "message": "Use token utilities (text-h1/text-h2/text-lead/text-body), not text-[...]."
      },
      {
        "selector": "JSXAttribute[name.name='className'][value.value=/text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/]",
        "message": "Use token utilities (text-h1/text-h2/text-h3/text-lead/text-body) — not Tailwind size shorthands."
      }
    ],
    // No node:fs/path in client components
    "no-restricted-imports": [
      "error",
      {
        "paths": [
          { "name": "fs", "message": "Use fs only in server files." },
          { "name": "node:fs", "message": "Use fs only in server files." },
          { "name": "path", "message": "Use path only in server files." },
          { "name": "node:path", "message": "Use path only in server files." }
        ],
        "patterns": [
          { "group": ["**/lib/content"], "message": "Import content loaders only from server components." }
        ]
      }
    ],
    // Block inline style except on whitelisted primitives
    "no-restricted-properties": [
      "error",
      { "object": "props", "property": "style", "message": "Inline styles drift theme. Use tokens/classes." }
    ]
  },
  overrides: [
    {
      files: ["components/ui/**", "components/site/**", "app/globals.css", "lib/design-tokens.ts", "app/design-system/**", "app/style/**", "components/sections/**", "app/luna/**", "app/templates/**", "app/tiger/**"],
      rules: {
        "no-restricted-properties": "off", // allow controlled inline style in primitives
        "no-restricted-syntax": "off" // allow any classes in legacy/showcase components
      }
    },
    {
      files: ["lib/content.ts", "lib/schemas.ts", "scripts/**", "app/sitemap.ts", "app/robots.ts", "app/**/page.tsx", "app/**/*-grid.tsx", "components/product/**"],
      rules: {
        "no-restricted-imports": "off", // allow node:fs/path in server-only files
        "no-restricted-syntax": "off" // allow size classes in product templates
      }
    },
    {
      files: ["app/style/**"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "react-hooks/exhaustive-deps": "off"
      }
    }
  ]
}

