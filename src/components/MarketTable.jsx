import './MarketTable.css';

const coins = [
    { rank: 1, name: 'Bitcoin', symbol: 'BTC', price: '$67,420.50', change1h: '+0.42%', change24h: '+2.34%', change7d: '+8.12%', cap: '$1.32T', volume: '$28.4B', sparkColor: '#10b981', up: true },
    { rank: 2, name: 'Ethereum', symbol: 'ETH', price: '$3,521.80', change1h: '+0.18%', change24h: '+1.87%', change7d: '+12.3%', cap: '$423.1B', volume: '$14.2B', sparkColor: '#8b5cf6', up: true },
    { rank: 3, name: 'BNB', symbol: 'BNB', price: '$412.30', change1h: '-0.12%', change24h: '-0.52%', change7d: '+3.44%', cap: '$63.4B', volume: '$1.87B', sparkColor: '#ef4444', up: false },
    { rank: 4, name: 'Solana', symbol: 'SOL', price: '$178.90', change1h: '+1.22%', change24h: '+5.61%', change7d: '+22.1%', cap: '$77.2B', volume: '$3.92B', sparkColor: '#10b981', up: true },
    { rank: 5, name: 'XRP', symbol: 'XRP', price: '$0.621', change1h: '+0.34%', change24h: '+3.12%', change7d: '+6.87%', cap: '$33.8B', volume: '$1.42B', sparkColor: '#10b981', up: true },
    { rank: 6, name: 'Cardano', symbol: 'ADA', price: '$0.589', change1h: '-0.22%', change24h: '-1.20%', change7d: '+1.33%', cap: '$20.7B', volume: '$642M', sparkColor: '#ef4444', up: false },
    { rank: 7, name: 'Dogecoin', symbol: 'DOGE', price: '$0.172', change1h: '+2.11%', change24h: '+8.44%', change7d: '+18.7%', cap: '$23.4B', volume: '$2.18B', sparkColor: '#10b981', up: true },
    { rank: 8, name: 'Avalanche', symbol: 'AVAX', price: '$39.12', change1h: '+0.88%', change24h: '+4.22%', change7d: '+15.2%', cap: '$15.9B', volume: '$892M', sparkColor: '#10b981', up: true },
];

const iconColors = {
    BTC: '#f59e0b', ETH: '#8b5cf6', BNB: '#f59e0b', SOL: '#06b6d4',
    XRP: '#3b82f6', ADA: '#3b82f6', DOGE: '#f59e0b', AVAX: '#ef4444',
};

const miniSparkline = (up) => {
    const points = up
        ? '0,30 10,25 20,28 30,18 40,20 50,12 60,15 70,5 80,8 90,2'
        : '0,5 10,10 20,8 30,18 40,15 50,22 60,20 70,28 80,25 90,30';
    return (
        <svg width="90" height="35" viewBox="0 0 90 35" fill="none">
            <polyline
                points={points}
                stroke={up ? '#10b981' : '#ef4444'}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const MarketTable = () => {
    return (
        <section className="market" id="market">
            <div className="container">
                <div className="market__header">
                    <div className="section-label">📊 Live Markets</div>
                    <h2 className="market__title">
                        Today's <span className="gradient-text">Crypto</span> Market
                    </h2>
                    <p className="market__subtitle">Track real-time prices, volume, and market cap of top cryptocurrencies</p>
                </div>

                {/* Tabs */}
                <div className="market__tabs">
                    {['All Assets', 'Gainers', 'Losers', 'New Listings', 'DeFi'].map((tab, i) => (
                        <button key={tab} id={`market-tab-${i}`} className={`market__tab ${i === 0 ? 'market__tab--active' : ''}`}>
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="market__table-wrapper">
                    <table className="market__table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>1h %</th>
                                <th>24h %</th>
                                <th>7d %</th>
                                <th>Market Cap</th>
                                <th>Volume (24h)</th>
                                <th>Last 7 Days</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map((coin) => (
                                <tr key={coin.symbol} className="market__row">
                                    <td className="market__rank">{coin.rank}</td>
                                    <td className="market__name-cell">
                                        <div className="market__coin-icon" style={{ background: `${iconColors[coin.symbol]}22`, border: `1px solid ${iconColors[coin.symbol]}44` }}>
                                            <span style={{ color: iconColors[coin.symbol], fontWeight: 700, fontSize: '0.7rem' }}>{coin.symbol.slice(0, 1)}</span>
                                        </div>
                                        <div>
                                            <div className="market__coin-name">{coin.name}</div>
                                            <div className="market__coin-symbol">{coin.symbol}</div>
                                        </div>
                                    </td>
                                    <td className="market__price">{coin.price}</td>
                                    <td className={coin.up ? 'market__up' : 'market__down'}>{coin.change1h}</td>
                                    <td className={coin.up ? 'market__up' : 'market__down'}>{coin.change24h}</td>
                                    <td className={coin.up ? 'market__up' : 'market__down'}>{coin.change7d}</td>
                                    <td className="market__cap">{coin.cap}</td>
                                    <td className="market__volume">{coin.volume}</td>
                                    <td>{miniSparkline(coin.up)}</td>
                                    <td>
                                        <button className="market__buy-btn" id={`buy-${coin.symbol}`}>Trade</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="market__footer">
                    <button className="btn-secondary" id="view-all-btn">View All Cryptocurrencies →</button>
                </div>
            </div>
        </section>
    );
};

export default MarketTable;
