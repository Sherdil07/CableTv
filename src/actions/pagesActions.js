// src/actions/pagesActions.js
import axios from "axios";
import { setPageData } from "../reducers/pagesReducer";

// export const setPageData = (data) => ({
//   type: "SET_PAGE_DATA",
//   payload: data,
// });

export const fetchPageData = () => {
  // Implement your API request logic here to fetch page data
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/api/pages");
      const data = response.data; // Access data directly from response
      dispatch(setPageData(data));
    } catch (error) {
      console.error("Error fetching page data:", error);
    }
  };
};
