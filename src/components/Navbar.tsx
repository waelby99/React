import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.logo}>Ma Boutique</h1>
            <ul style={styles.navLinks}>
                <li><a href="" style={styles.link}>Accueil</a></li>
                <li><a href="" style={styles.link}>Produits</a></li>
                <li><a href="" style={styles.link}>Contact</a></li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
    },
    logo: {
        margin: 0,
        fontSize: '24px',
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
    },
};

export default Navbar;