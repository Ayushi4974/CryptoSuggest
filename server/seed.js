require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./db');
const Website = require('./models/Website');

const websites = [
    {
        abbr: 'BI',
        name: 'Binance',
        reviews: '1250 reviews',
        desc: "World's largest cryptocurrency exchange by trading volume",
        category: 'Crypto Exchanges',
        featured: true,
        bg: '#1e40af',
    },
    {
        abbr: 'CO',
        name: 'Coinbase',
        reviews: '980 reviews',
        desc: 'User-friendly crypto exchange trusted by millions',
        category: 'Crypto Exchanges',
        featured: true,
        bg: '#1d4ed8',
    },
    {
        abbr: 'KR',
        name: 'Kraken',
        reviews: '756 reviews',
        desc: 'Secure and reliable crypto exchange since 2011',
        category: 'Crypto Exchanges',
        featured: true,
        bg: '#005ed3',
    },
    {
        abbr: 'UN',
        name: 'Uniswap',
        reviews: '892 reviews',
        desc: 'Leading decentralized exchange protocol on Ethereum',
        category: 'Crypto Exchanges',
        featured: true,
        bg: '#7c3aed',
    },
    {
        abbr: 'KU',
        name: 'KuCoin',
        reviews: '545 reviews',
        desc: "People's exchange with 700+ cryptocurrencies",
        category: 'Crypto Exchanges',
        featured: true,
        bg: '#0093dd',
    },
    {
        abbr: 'OP',
        name: 'OpenSea',
        reviews: '1120 reviews',
        desc: "World's largest NFT marketplace",
        category: 'NFT Marketplaces',
        featured: true,
        bg: '#2563eb',
    },
    {
        abbr: 'BL',
        name: 'Blur',
        reviews: '567 reviews',
        desc: 'Pro NFT marketplace for traders',
        category: 'NFT Marketplaces',
        featured: true,
        bg: '#0f172a',
    },
    {
        abbr: 'ME',
        name: 'MetaMask',
        reviews: '2340 reviews',
        desc: 'Most popular Ethereum and EVM wallet',
        category: 'Crypto Wallets',
        featured: true,
        bg: '#065f46',
    },
    {
        abbr: 'LE',
        name: 'Ledger',
        reviews: '1890 reviews',
        desc: 'Leading hardware wallet for maximum security',
        category: 'Crypto Wallets',
        featured: true,
        bg: '#0053ff',
    },
    {
        abbr: 'AA',
        name: 'Aave',
        reviews: '876 reviews',
        desc: 'Leading DeFi lending and borrowing protocol',
        category: 'DeFi Platforms',
        featured: true,
        bg: '#2ebac6',
    },
    {
        abbr: 'ET',
        name: 'Etherscan',
        reviews: '1458 reviews',
        desc: 'Leading Ethereum blockchain explorer',
        category: 'Blockchain Explorers',
        featured: true,
        bg: '#3498db',
    },
    {
        abbr: 'CD',
        name: 'CoinDesk',
        reviews: '678 reviews',
        desc: 'Leading cryptocurrency news and information platform',
        category: 'Crypto News & Media',
        featured: true,
        bg: '#000000',
    },
];

const seedDB = async () => {
    try {
        await connectDB();
        await Website.deleteMany({});
        console.log('🗑️  Cleared existing websites');
        await Website.insertMany(websites);
        console.log('🌱  Database seeded with 12 websites successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};

seedDB();
