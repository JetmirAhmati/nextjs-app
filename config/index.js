const dev = process.env.NODE_ENV !== 'production';
export const apiUrl = dev ? 'http://localhost:3000' : 'https://websitetest.com';