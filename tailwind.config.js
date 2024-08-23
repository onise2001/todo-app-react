/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-bg-dark": "url(/images/bg-mobile-dark.jpg)",
        "mobile-bg-light": "url(/images/bg-mobile-light.jpg)",

        "check-icon": "url(/images/icon-check.svg)",

        "desktop-bg-dark": "url(/images/bg-desktop-dark.jpg)",
        "desktop-bg-light": "url(/images/bg-desktop-light.jpg)",
      },
      backgroundColor: {
        "body-dark": "#171823",
        "body-light": "#fafafa",
        "todo-dark": "#25273d",
        "todo-light": "#fff",
      },
      color: {
        "color-dark-active": "#c8cbe7",
      },
      boxShadow: {
        "custom-light": "0 35px 50px -15px rgba(194, 195, 214, 0.5)",
        "custom-dark": "0 35px 50px -15px rgba(0, 0, 0, 0.5)",
        "custom-dark-desktop": "0 35px 50px -15px rgba(0, 0, 0, 0.5)",
        "custom-light-desktop": "0 35px 50px -15px rgba(194, 195, 214, 0.5)",
      },
    },
  },
  plugins: [],
};
