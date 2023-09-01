// src/actions/pagesActions.js

export const setPageData = (data) => ({
  type: "SET_PAGE_DATA",
  payload: data,
});

export const fetchPageData = () => {
  // Implement your API request logic here to fetch page data
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/api/pages");
      const data = await response.json();
      dispatch(setPageData(data));
    } catch (error) {
      console.error("Error fetching page data:", error);
    }
  };
};
