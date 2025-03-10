import react from 'react';
import { fetchData } from '../services/api';
import { useState, useEffect } from 'react';

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchData('Label of what is inside the api');
            setData(data);
            setLoading(false);
        };
        fetchData();
    }
        , []);
    
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
        <h1></h1>
        </div>
    );
};
    
export default Home;