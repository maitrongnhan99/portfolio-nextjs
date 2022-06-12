const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
    // purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    content: ["./pages/**/*.tsx", "./src/components/**/*.tsx"],
    darkMode: "class", // or 'media' or 'class'
    safelist: ["bg-[rgba(0,0,0,.7)]"],
    theme: {
        extend: {
            height: {
                "screen-60": "60vh",
                "screen-70": "70vh",
                "screen-80": "80vh",
            },
            minHeight: {
                "screen-60": "60vh",
            },
            maxHeight: {
                0: "0",
                "1/4": "25%",
                "1/2": "50%",
                "3/4": "75%",
                full: "100%",
                "100px": "100px",
                "200px": "200px",
                "300px": "300px",
                "400px": "400px",
                "500px": "500px",
                "60vh": "60vh",
            },
            width: {
                "100px": "100px",
                "200px": "200px",
                "300px": "300px",
                "350px": "350px",
                "400px": "400px",
                "500px": "500px",
            },
            paddingRight: {
                "300px": "300px",
                "325px": "325px",
            },
            gridTemplateColumns: {
                // Simple 16 column grid
                16: "repeat(16, minmax(0, 1fr))",

                // Complex site-specific column configuration
                blog: "200px minmax(0, 1fr) 300px",
                "sidebar-left": "200px minmax(0, 1fr)",
            },
            screens: {
                xs: "375px",
                sm: "641px",
                // => @media (min-width: 640px) { ... }

                md: "769px",
                // => @media (min-width: 768px) { ... }

                lg: "1025px",
                // => @media (min-width: 1024px) { ... }

                xl: "1281px",
                // => @media (min-width: 1280px) { ... }

                "2xl": "1537px",
                // => @media (min-width: 1536px) { ... }
            },
            fontWeight: {
                light: 300,
                normal: 400,
                medium: 500,
                bold: 700,
            },
            fontSize: {
                xss: ["10px", "1.25"],
                xs: ["12px", "1.25"],
                sm: ["14px", "1.5"],
                base: ["16px", "1.5"],
                md: ["18px", "1.5"],
                lg: ["20px", "1.5"],
                xl: ["24px", "1.5"],
                "2xl": ["32px", "1.5"],
                "3xl": ["38px", "1.5"],
                small: ["12px", "1.5"],
                h1: ["38px", "1.5"],
                h2: ["32px", "1.5"],
                h3: ["26px", "1.5"],
                h4: ["24px", "1.5"],
                h5: ["20px", "1.5"],
                h6: ["18px", "1.5"],
                body1: ["16px", "1.5"],
                body2: ["14px", "1.5"],
            },
            colors: {
                header: "#171717",
                black: "#171717",
                primary: "#DA0037",
                secondary: "#444444",
                slate: colors.slate,
                brand: {
                    50: "#FFEAED",
                    100: "#FFCBD5",
                    200: "#F1959E",
                    300: "#E9686B",
                    400: "#F34146",
                    500: "#FC243E",
                    600: "#EC163D",
                    700: "#DA0037",
                    800: "#CD002F",
                    900: "#BF0022",
                },
                gray: {
                    50: "#F8F8F8",
                    100: "#F0F0F0",
                    200: "#E6E6E6",
                    300: "#D5D5D5",
                    400: "#B0B0B0",
                    500: "#909090",
                    600: "#686868",
                    700: "#555555",
                    800: "#373737",
                    900: "#171717",
                },
                red: {
                    50: "#FFEAED",
                    100: "#FFCBD5",
                    200: "#F1959E",
                    300: "#E9686B",
                    400: "#F34146",
                    500: "#FC243E",
                    600: "#EC163D",
                    700: "#DA0037",
                    800: "#CD002F",
                    900: "#BF0022",
                },
                yellow: {
                    50: "#fff9e3",
                    100: "#ffedb7",
                    200: "#ffe389",
                    300: "#ffd95a",
                    400: "#ffce3a",
                    500: "#ffc627",
                    600: "#ffb821",
                    700: "#fea51d",
                    800: "#fe951a",
                    900: "#fe7614",
                },
                blue: {
                    50: "#E1F2FC",
                    100: "#B7DDFA",
                    200: "#88C8F7",
                    300: "#55B3F4",
                    400: "#21A3F3",
                    500: "#0093F1",
                    600: "#0085E4",
                    700: "#0074D1",
                    800: "#0063BF",
                    900: "#0045A1",
                },
                orange: {
                    50: "#FFF4E2",
                    100: "#FFE1B6",
                    200: "#FFCE88",
                    300: "#FFBA5A",
                    400: "#FFAB3A",
                    500: "#FF9C27",
                    600: "#FF9125",
                    700: "#FA8123",
                    800: "#F37121",
                    900: "#E9581E",
                },
                green: {
                    50: "#E0F9EF",
                    100: "#B3EFD7",
                    200: "#7AE4BE",
                    300: "#00DAA3",
                    400: "#00D08E",
                    500: "#00C67B",
                    600: "#00B66F",
                    700: "#00A360",
                    800: "#009153",
                    900: "#00703C",
                },
            },
        },
    },
    variants: {
        extend: {
            screens: ["dark", "dark-hover"],
            textColor: ["dark-hover"],
            backgroundColor: ["dark-hover", "before"],
            after: ["dark"],
            before: ["dark"],
            divide: ["dark"],
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/line-clamp"),
        plugin(function ({ addComponents }) {
            addComponents({
                ".btn": {
                    padding: ".5rem 1rem !important",
                    borderRadius: ".25rem !important",
                    fontWeight: "600 !important",
                },
                ".bg-header": {
                    backgroundColor: "rgba(0,0,0,.7)",
                },
                ".bg-footer": {
                    backgroundColor: "#27282c",
                },
                ".social-icon-hover": {
                    backgroundColor: "hsla(0,0%,100%,.1)",
                },
            });
        }),
    ],
};
