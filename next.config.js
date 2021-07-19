module.exports = {
    images: {
        domains: [
            "links.papareact.com",
            "platform-lookaside.fbsbx.com",
            "firebasestorage.googleapis.com",
        ],
    },
    future: {
    webpack5: true,
    },
    webpack: function (config, options) {
    config.experiments = {};
    return config;
    },
};
