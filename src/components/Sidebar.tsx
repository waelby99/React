import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <aside style={styles.sidebar}>
            <h2 style={styles.title}>Catégories</h2>
            <ul style={styles.categoryList}>
                <li style={styles.categoryItem}>Hommes</li>
                <li style={styles.categoryItem}>Femmes</li>
                <li style={styles.categoryItem}>Enfants</li>
                <li style={styles.categoryItem}>Promotions</li>
            </ul>
        </aside>
    );
};

const styles = {
    sidebar: {
        width: '200px',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRight: '1px solid #ccc',
    },
    title: {
        marginTop: 0,
        fontSize: '20px',
    },
    categoryList: {
        listStyle: 'none',
        padding: 0,
    },
    categoryItem: {
        margin: '10px 0',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default Sidebar;