exports.modifyWebpackConfig = ({ config, stage }) => {
    if (stage === "build-html") {
        config.loader("null", {
            test: /react-photo-gallery/,
            loader: "null-loader",
        });
    }
};