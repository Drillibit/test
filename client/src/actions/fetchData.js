import axios from "axios";
import { addGroup } from "./group";
import { addItem } from "./item";

export const fetchData = () => {
  return async dispatch => {
    let groupsData = await axios.get("/api/get_groups");
    groupsData.data.groups.map(group => {
      dispatch(addGroup({ ...group }));
      return group;
    });
    let itemsData = await axios.get("/api/get_items");
    itemsData.data.map(item => {
      dispatch(addItem({ ...item }));
      return item;
    });
  };
};
