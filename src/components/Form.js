import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Form = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const movieName = queryParams.get('movie');

    const [formData, setFormData] = useState({
        movieName: movieName || '',
        time: '',
        email: '',
        phone: '',
        date: ''
    });

    useEffect(() => {
        // Optional: Fetch other predefined values based on the movie name
    }, [movieName]);

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Handle form submission, e.g., send data to server
        console.log(formData); // Log form data for demonstration
    };

    return (
        <div className='form-container'>
            <h2>Book Ticket</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Movie Name:</label>
                    <input type="text" name="movieName" value={formData.movieName} readOnly />
                </div>
                <div>
                    <label>Time:</label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                    <label>Pick a date:</label>
                    <input type="date" name="date"  placeholder="mm/dd/yyyy" value={formData.date} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary form-btn">Submit</button>
            </form>
        </div>
    );
};

export default Form;
