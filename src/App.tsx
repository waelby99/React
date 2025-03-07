import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Article from './components/Article';
import ProductCard from './components/ProductCard';

function App() {
    // useState pour le panier
    const [cart, setCart] = useState<{ name: string; price: number }[]>([]);

    // useState pour la couleur
    const [color, setColor] = useState('red'); // Couleur initiale : noir

    // Fonction pour ajouter un produit au panier
    const addToCart = (name: string, price: number) => {
        setCart([...cart, { name, price }]);
        alert(`${name} a été ajouté au panier !`);
    };

    // Fonction pour changer la couleur
    const changeColor = () => {
        const colors = ['red', 'green', 'blue', 'purple', 'orange'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Choisir une couleur aléatoire
        setColor(randomColor);
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
                    {/* Affichage de la couleur */}
                    <p style={{ color: color }}>
                        La couleur actuelle est : <strong>{color}</strong>
                    </p>
                    <button onClick={changeColor} style={styles.colorButton}>
                        Changer la couleur
                    </button>
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
    colorButton: {
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        marginBottom: '20px',
    },
};

export default App;