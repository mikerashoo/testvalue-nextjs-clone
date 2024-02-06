/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "dvd6ljcj7w3pj.cloudfront.net"
            },{
                protocol: 'https',
                hostname: "testvalley.kr"
            },
        ]
    }
};

export default nextConfig;
