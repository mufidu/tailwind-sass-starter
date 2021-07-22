if (process.env.NODE_ENV === "production") {
    module.exports = {
        plugins: [
            require("postcss-import"),
            require("tailwindcss"),
            require("autoprefixer"),
            require("postcss-nested"),
            require("cssnano")({
                preset: "default",
            }),
        ],
    };
} else {
    module.exports = {
        plugins: [
            require("postcss-import"),
            require("tailwindcss"),
            require("autoprefixer"),
            require("postcss-nested"),
        ],
    };
}
