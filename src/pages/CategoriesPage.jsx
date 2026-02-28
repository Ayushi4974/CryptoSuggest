import '../components/Categories.css';
import Categories from '../components/Categories';

const CategoriesPage = () => {
    return (
        <main className="categories-page">
            <div className="categories-page__header">
                <div className="container">
                    <nav className="breadcrumbs">
                        <a href="/">Home</a>
                        <span className="separator">›</span>
                        <span className="current">All Categories</span>
                    </nav>
                    <h1 className="categories-page__title">Browse all <span className="gradient-text">Categories</span></h1>
                    <p className="categories-page__subtitle">
                        Explore our comprehensive directory of verified crypto platforms organized by their ecosystem and utility.
                    </p>
                </div>
            </div>

            <div className="categories-page__content">
                <Categories showHeader={false} />
            </div>


        </main>
    );
};

export default CategoriesPage;
