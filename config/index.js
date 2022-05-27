const dev = process.env.NODE_ENV !== 'production';
export const apiUrl = dev ? 'http://localhost:3000' : 'https://endearing-churros-c685d8.netlify.app';

// export const apiUrl = 'http://localhost:3000';