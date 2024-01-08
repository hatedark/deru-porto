'use client';

import styles from './works.module.css';
import Project from './components/projects';

const projects = [
    {
        title: 'Project 1',
        src: 'project1.png',
        color: '#000000',
    },
    {
        title: 'Project 2',
        src: 'project2.png',
        color: '#000000',
    },
    {
        title: 'Project 3',
        src: 'project3.png',
        color: '#000000',
    },
    {
        title: 'Project 4',
        src: 'project4.png',
        color: '#000000',
    },
];

export default function Works() {
    return (
        <div className={styles.main}>
            <div className={styles.body}>
                {projects.map((project, index) => {
                    return (
                        <Project
                            index={index}
                            title={project.title}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}
