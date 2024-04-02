// src/store.js
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  brand_images: null,
  brand_pages: null,
  brand_threads: null
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        user: action.payload
      }
    }
    case "ADD_IMAGE": {
      return {
        ...state,
        brand_images: state.brand_images ? [...state.brand_images, action.payload] : [action.payload]
      }
    }
    case "DELETE_IMAGE": {
      const { brand_images } = state;

      const filtered_images = brand_images.filter((image) => image.image_id !== action.payload.image_id);

      return {
        ...state,
        brand_images: [...filtered_images]
      }
    }
    case "SET_IMAGES": {
      return {
        ...state,
        brand_images: action.payload
      }
    }
    case "SET_PAGES": {
      return {
        ...state,
        brand_pages: action.payload
      }
    }
    case "SET_THREADS": {
      return {
        ...state,
        brand_threads: action.payload
      }
    }

    default:
      return state;
  }
}

const store = configureStore({
  reducer: {
    app: appReducer, // Wrap your reducer in an object
  },
});

export default store;
