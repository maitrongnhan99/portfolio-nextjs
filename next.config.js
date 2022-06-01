const withPlugins = require("next-compose-plugins");

const config = {
    reactStrictMode: true,
    pageExtensions: ["tsx", "ts", "js", "jsx"],
    swcMinify: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
    poweredByHeader: false,
    generateEtags: true,
    // rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {},
    eslint: {
        // Warning: Dangerously allow production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        domains: [],
    },
};

module.exports = withPlugins([], config);
