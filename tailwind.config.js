module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#1abb86",
        selected: "var(--selected)",
        "text-primary": "var(--text-primary)",

        "background-primary": "var(--background)",
        "background-secondary": "var(--background-secondary)",
        "background-hover": "var(--background-hover)",

        "border-primary": "var(--border-primary)",
      },
      boxShadow: {
        "top-shadow": "0 -2px 8px rgba(0, 0, 0, 0.1)", // Custom light shadow
      },
    },
  },
};
