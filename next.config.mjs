/** @type {import('next').NextConfig} */
import { withNextVideo } from "next-video/process";
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.rawg.io",
                port: "",
            },
        ],
    },
};

export default withNextVideo(nextConfig);
