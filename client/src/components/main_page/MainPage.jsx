import React from "react";
import ItemCard from "./ItemCard";
import SearchBar from "./SearchBar";
import SideMenu from "./SideMenu";
import { connect } from "react-redux";
import "../../styles/main_page.css";

const MainPage = props => {
  return (
    <div className="main_page_conatiner">
      <SearchBar />
      <div className="container">
        <div className="side_menu_container">
          {props.groups.map(group => {
            return (
              <SideMenu
                key={group._id}
                name={group.groupName}
                items={props.items}
                subGroup={group.subGroup}
              />
            );
          })}
        </div>
        <div className="iemt_card_container">
          {props.items.map(item => {
            return <ItemCard key={item._id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    groups: state.groups,
    items: state.items
  };
};

export default connect(mapStateToProps)(MainPage);
