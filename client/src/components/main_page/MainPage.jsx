import React from 'react';
import ItemCard from './ItemCard';

const MainPage = (props) => {
    return (
        <div className="main_page_conatiner">
            <p>Main Page</p>
            <div className="container">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    );
}

export default MainPage;