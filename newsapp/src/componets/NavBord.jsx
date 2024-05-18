import React, { useEffect, useState } from 'react';
import NavItems from './NavItems';

const NavBord = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=87ede0e5518b4bfca6b80a08b2d17c51`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch articles');
                }
                return response.json();
            })
            .then(data => {
                if (data.articles) {
                    setArticles(data.articles);
                }
            })
            .catch(error => console.log('Error fetching data:', error));
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
