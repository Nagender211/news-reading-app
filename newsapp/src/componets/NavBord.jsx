import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavItems from './NavItems';

const NavBord = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=87ede0e5518b4bfca6b80a08b2d17c51`;
            try {
                console.log('Fetching data from:', url);
                const response = await axios.get(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                console.log('Response:', response);
                if (response.status !== 200) {
                    throw new Error(`Failed to fetch articles: ${response.status}`);
                }
                const data = response.data;
                console.log('Data received:', data);
                if (data.articles) {
                    setArticles(data.articles);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                if (error.response) {
                    console.error('Response error:', error.response.status, error.response.data);
                } else if (error.request) {
                    console.error('Request error:', error.request);
                } else {
                    console.error('Unexpected error:', error.message);
                }
            }
        };

        fetchData();
    }, [category]);

    return (
        <div className="container mt-4">
            <h2 className='text-center mb-4'>Latest <span className='badge bg-danger'>News</span></h2>
            <div className="row">
                {articles.map((news, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <NavItems
                            title={news.title}
                            description={news.description}
                            src={news.urlToImage}
                            url={news.url}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NavBord;
