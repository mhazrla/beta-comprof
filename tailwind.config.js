const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "Open Sans",
                    "Nunito",
                    "sans-serif",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            colors: {
                "primary-indi": "#f00000",
                "text-secondary": "#606060",
                "text-third": "#929292",
            },
            borderRadius: {
                none: "0",
                sm: "0.125rem",
                DEFAULT: "0.25rem",
                DEFAULT: "4px",
                md: "0.375rem",
                lg: "0.5rem",
                full: "9999px",
                large: "12px",
                nav: "1rem",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
