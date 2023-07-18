/** @type {import('tailwindcss').Config} */
module.exports = {
        darkMode: ["class"],
        content: [
                "./pages/**/*.{ts,tsx}",
                "./components/**/*.{ts,tsx}",
                "./app/**/*.{ts,tsx}",
                "./src/**/*.{ts,tsx}",
        ],
        theme: {
                container: {
                        center: true,
                        padding: "2rem",
                        screens: {
                                "2xl": "1400px",
                        },
                },
                extend: {
                        colors: {
                                "brand-blue": "#61dcfb",
                                "brand-green": "#04d361",
                                "brand-yellow": "#eba417",
                                "brand-title": "#e1e1e6",
                                "brand-text": "#a8a8b3",
                                "brand-shape": "#1f2729",
                                "brand-background": "#121414",
                        },
                        keyframes: {
                                "accordion-down": {
                                        from: { height: 0 },
                                        to: {
                                                height: "var(--radix-accordion-content-height)",
                                        },
                                },
                                "accordion-up": {
                                        from: {
                                                height: "var(--radix-accordion-content-height)",
                                        },
                                        to: { height: 0 },
                                },
                                "tab-border": {
                                        from: {
                                                width: 0,
                                                opacity: 0,
                                        },
                                        to: {
                                                width: 50,
                                                opacity: 1,
                                        },
                                },
                        },
                        animation: {
                                "accordion-down":
                                        "accordion-down 0.2s ease-out",
                                "accordion-up": "accordion-up 0.2s ease-out",
                                "tab-border": "tab-border 0.2s ease-out",
                        },
                },
        },
        plugins: [require("tailwindcss-animate")],
};
