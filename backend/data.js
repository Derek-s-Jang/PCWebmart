import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Derek',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Kyle',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'ASUS Dual GeForce RTX 3070',
            category: 'Graphics Card',
            image: '/images/RTX3070.jpg',
            price: 1000,
            countInStock: 10,
            brand: 'Asus',
            rating: 4.5,
            numReviews: 10,
            description: 'Chipset: NVIDIA GeForce RTX 3070',
        },
        {
            name: 'MSI Gaming GeForce RTX 3070',
            category: 'Graphics Card',
            image: '/images/RTX3070(1).jpg',
            price: 990.38,
            countInStock: 0,
            brand: 'MSI',
            rating: 5.0,
            numReviews: 12,
            description: 'Chipset: NVIDIA GeForce RTX 3070',
        },
        {
            name: 'ZOTAC Gaming GeForce RTX 3090 Trinity',
            category: 'Graphics Card',
            image: '/images/RTX3090.jpg',
            price: 2500,
            countInStock: 1,
            brand: 'Zotac',
            rating: 3.0,
            numReviews: 30,
            description: 'Chipset: NVIDIA GeForce RTX 3090',
        },
        {
            name: 'ASUS GeForce RTX 2060 Overclocked',
            category: 'Graphics Card',
            image: '/images/RTX2060.jpg',
            price: 680.50,
            countInStock: 0,
            brand: 'Asus',
            rating: 4.5,
            numReviews: 50,
            description: 'Chipset: NVIDIA GeForce RTX 2060',
        },
        {
            name: 'EVGA GeForce RTX 2080 Ti',
            category: 'Graphics Card',
            image: '/images/RTX2080ti.jpg',
            price: 1449.79,
            countInStock: 5,
            brand: 'EVGA',
            rating: 4.0,
            numReviews: 5,
            description: 'Chipset: NVIDIA GeForce RTX 2080 Ti',
        },
        {
            name: 'ZOTAC Gaming GeForce RTX 3060 Twin Edge',
            category: 'Graphics Card',
            image: '/images/RTX3060.jpg',
            price: 800,
            countInStock: 0,
            brand: 'Zotac',
            rating: 3.5,
            numReviews: 2,
            description: 'Chipset: NVIDIA GeForce RTX 3060',
        },
    ],
};

export default data;