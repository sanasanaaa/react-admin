import path from "path";
import { whenProd } from "@craco/craco";
import { version } from "./package.json";


module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
            "@components": path.resolve(__dirname, "src/components/"),
            "@views": path.resolve(__dirname, "src/views/"),
            "@store": path.resolve(__dirname, "src/store/"),
        },
        configure: (webpackConfig: any, { env, paths }: any) => { 
            webpackConfig.output.publicPath = process.env.NODE_ENV === 'dev' ? '/' : './';
            whenProd(() => { 
                webpackConfig.output.filename = `static/js/[name].[contenthash:8]_${version}.js`;
                webpackConfig.output.chunkFilename = `static/js/[name].[contenthash:8].chunk_${version}.js`;
            });
            return webpackConfig;
        },

    },
    devServer: {
        open: true,
        port: 3000,
        https: false,
        proxy: {
            "/api": {
                target: "http://localhost:3001",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }

}