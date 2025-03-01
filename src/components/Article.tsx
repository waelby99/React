import React from 'react';
import {ArticleProps} from "../entities/ArticleProps.ts";



const Article: React.FC<ArticleProps> = ({ title, content, imageUrl }) => {
    return (
        <article style={styles.article}>
            {imageUrl && <img src={imageUrl} alt={title} style={styles.image} />}
            <h2 style={styles.title}>{title}</h2>
            <p style={styles.content}>{content}</p>
        </article>
    );
};

const styles = {
    article: {
        marginBottom: '20px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    title: {
        marginTop: '10px',
        fontSize: '24px',
    },
    content: {
        fontSize: '16px',
        lineHeight: '1.6',
    },
};

export default Article;