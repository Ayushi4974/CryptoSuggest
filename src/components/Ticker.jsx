import './Ticker.css';

const tickerData = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$67,420.50', change: '+2.34%', up: true },
    { symbol: 'ETH', name: 'Ethereum', price: '$3,521.80', change: '+1.87%', up: true },
    { symbol: 'BNB', name: 'BNB', price: '$412.30', change: '-0.52%', up: false },
    { symbol: 'SOL', name: 'Solana', price: '$178.90', change: '+5.61%', up: true },
    { symbol: 'XRP', name: 'Ripple', price: '$0.6210', change: '+3.12%', up: true },
    { symbol: 'ADA', name: 'Cardano', price: '$0.5890', change: '-1.20%', up: false },
    { symbol: 'DOGE', name: 'Dogecoin', price: '$0.1720', change: '+8.44%', up: true },
    { symbol: 'DOT', name: 'Polkadot', price: '$8.340', change: '-0.88%', up: false },
    { symbol: 'AVAX', name: 'Avalanche', price: '$39.120', change: '+4.22%', up: true },
    { symbol: 'LINK', name: 'Chainlink', price: '$18.750', change: '+2.90%', up: true },
];

const TickerItem = ({ item }) => (
    <div className="ticker__item">
        <span className="ticker__symbol">{item.symbol}</span>
        <span className="ticker__price">{item.price}</span>
        <span className={`ticker__change ${item.up ? 'ticker__change--up' : 'ticker__change--down'}`}>
            {item.up ? '▲' : '▼'} {item.change}
        </span>
    </div>
);

const Ticker = () => {
    const doubled = [...tickerData, ...tickerData];

    return (
        <div className="ticker">
            <div className="ticker__track">
                {doubled.map((item, i) => (
                    <TickerItem key={i} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Ticker;
