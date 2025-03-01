import React from 'react';

type ProductCardProps = {
    name: string;
    price: number;
    imageUrl: string;
    onAddToCart: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl, onAddToCart }) => {
    return (
        <div style={styles.card}>
            <img src={imageUrl} alt={name} style={styles.image} />
            <h3>{name}</h3>
            <p>Prix : {price} €</p>
            {price > 40 && (
                React.createElement(
                    'small',
                    { style: styles.discount },
                    'Vous avez une réduction !'
                )
            )}
            <button onClick={onAddToCart} style={styles.button}>
                Ajouter au panier
            </button>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        width: '200px',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    button: {
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    discount: {
        color: 'red',
        fontWeight: 'bold',
    },
};

export default ProductCard;