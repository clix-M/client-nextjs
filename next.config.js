/** @type {import('next').NextConfig} */
const nextConfig = {
    env : {
        MONGO_URI: "mongodb+srv://dev:LcWlRvUqw3xk3GjY@cluster0.9i3ohnk.mongodb.net/?retryWrites=true&w=majority",
        API_URL : "http://localhost:3000"
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
}

module.exports = nextConfig
