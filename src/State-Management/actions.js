import fetchWrapper from "../../utils/fetchWrapper";

export function addBrandImage(image) {
  return {
    type: "ADD_IMAGE",
    payload: image
  }
}

export function deleteBrandImage(image) {
  return {
    type: "DELETE_IMAGE",
    payload: image
  }
}

export function getUser() {
  return async function (dispatch) {
    try {
      const token = JSON.parse(localStorage.getItem("user"))?.token || "";
      const response = await fetchWrapper(
        "/user",
        token,
        "GET"
      );

      if (response.message === "user found") {
        dispatch({
          type: "SET_USER",
          payload: response.user,
        });
      }
    } catch (error) {
      console.error("Could not fetch user:", error);
      // Optionally, dispatch an error action here
    }
  };
}

export function getImages() {
  return async function (dispatch) {
    try {
      const token = JSON.parse(localStorage.getItem("user"))?.token || "";
      const response = await fetchWrapper(
        "/images",
        token,
        "GET"
      );

      if (response.message === "images found") {
        dispatch({
          type: "SET_IMAGES",
          payload: response.images,
        });
      }
    } catch (error) {
      console.error("Could not fetch user:", error);
      // Optionally, dispatch an error action here
    }
  };
}

export function getThreads() {
  return async function (dispatch) {
    try {
      const token = JSON.parse(localStorage.getItem("user"))?.token || "";
      const response = await fetchWrapper(
        "/threads",
        token,
        "GET"
      );

      if (response.message === "threads found") {
        dispatch({
          type: "SET_THREADS",
          payload: response.threads,
        });
      }
    } catch (error) {
      console.error("Could not fetch user:", error);
      // Optionally, dispatch an error action here
    }
  };
}

export function getPages() {
  return async function (dispatch) {
    try {
      const token = JSON.parse(localStorage.getItem("user"))?.token || "";
      const response = await fetchWrapper(
        "/pages",
        token,
        "GET"
      );

      if (response.message === "pages found") {
        dispatch({
          type: "SET_PAGES",
          payload: response.pages,
        });
      }
    } catch (error) {
      console.error("Could not fetch pages:", error);
      // Optionally, dispatch an error action here
    }
  };
}