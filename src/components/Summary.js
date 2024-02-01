// Summary.js
import React, { useEffect, useState } from 'react';
import { useParams , Link } from 'react-router-dom';

const Summary = () => {
    const { id } = useParams();
    const [summary, setSummary] = useState('');
    const [movieName, setMovieName] = useState('');

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch summary');
                }
                const data = await response.json();
                setSummary(data.summary);
                setMovieName(data.name);
            } catch (error) {
                console.error('Error fetching summary:', error);
            }
        };

        fetchSummary();
    }, [id]);

    return (
        <div className='summary-container'>
            <h2>Summary</h2>
            <p>{summary}</p>
            <Link to={`/book-ticket/${id}?movie=${encodeURIComponent(movieName)}`} className="btn btn-primary">Book Ticket</Link>
        </div>
    );
};

export default Summary;
