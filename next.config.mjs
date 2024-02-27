/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/Researcher-Education',

    async redirects() {
        return [
          {
            source: '/testone',
            destination: '/testtwo',
            basePath: false,
            permanent:false
          },
        ]
      },

};

export default nextConfig;
