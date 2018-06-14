import React from 'react';
import ItemCard from './ItemCard';
import SearchBar from './SearchBar';
import SideMenu from './SideMenu';
import '../../styles/main_page.css';

const MainPage = (props) => {
    return (
        <div className="main_page_conatiner">
            <SearchBar />
            <div className="container">
                <SideMenu />
                <div className="iemt_card_container">
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
            </div>
        </div>
    );
}

export default MainPage;