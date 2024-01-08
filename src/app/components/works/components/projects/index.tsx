'use client';

import React from 'react';
import styles from './projects.module.css';

export default function Project({ index, title }: any) {
    return (
        <div
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            className={styles.project}
        >
            <h2>{title}</h2>
            <p>Development</p>
        </div>
    );
}
