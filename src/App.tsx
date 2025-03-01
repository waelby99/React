import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Article from './components/Article';
import ProductCard from './components/ProductCard';

function App() {
    // useState pour ajouter au panier
    const [cart, setCart] = useState<{ name: string; price: number }[]>([]);

    // fonction pour ajouter un produit au panier
    const addToCart = (name: string, price: number) => {
        setCart([...cart, { name, price }]);
        alert(`${name} a été ajouté au panier !`);
    };

    return (
        <div style={styles.app}>
            <Navbar />
            <div style={styles.container}>
                <Sidebar />
                <main style={styles.mainContent}>
                    <Article
                        title="Bienvenue sur notre boutique en ligne"
                        content="Découvrez nos produits de haute qualité à des prix imbattables."
                        imageUrl="https://via.placeholder.com/800x400"
                    />
                    <h2>Nos produits</h2>
                    <div style={styles.productList}>
                        <ProductCard
                            name="T-shirt"
                            price={20}
                            imageUrl="https://via.placeholder.com/200"
                            onAddToCart={() => addToCart('T-shirt', 20)}
                        />
                        <ProductCard
                            name="Chaussures"
                            price={50}
                            imageUrl="https://via.placeholder.com/200"
                            onAddToCart={() => addToCart('Chaussures', 50)}
                        />
                        <ProductCard
                            name="Sac à dos"
                            price={35}
                            imageUrl="https://via.placeholder.com/200"
                            onAddToCart={() => addToCart('Sac à dos', 35)}
                        />
                    </div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} - {item.price} €
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
        </div>
    );
}

const styles = {
    app: {
        fontFamily: 'Arial, sans-serif',
    },
    container: {
        display: 'flex',
    },
    mainContent: {
        flex: 1,
        padding: '20px',
    },
    productList: {
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
    },
};

export default App;