import React from 'react';
import './Home.styles.css';

interface HomeViewProps {
    title: string
}

const Home: React.FC<HomeViewProps> = ({ title }: HomeViewProps) => {
    return <>
         <p>{title}</p>
    </>
}

export default Home;