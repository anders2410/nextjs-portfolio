module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "code-pattern": "url('/img/close-up-code.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  enabled: process.env.NODE_ENV === "production",
};
