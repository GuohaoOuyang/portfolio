import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  bullepoints: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getInfo(){
    try {
      const res = await axios.get('myResume/v1');
      dispatch({
        type: 'GET_INFO',
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: 'LOADING_ERROR',
        payload: err.response.data.error
      });
  }
}

  async function deleteBulletPoint(id) {
    try {
      await axios.delete(`myResume/v1/${id}`);
      dispatch({
        type: 'DELETE_POINT',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'LOADING_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addBulletPoint(point) {
    const config = {
      header: {
        'Context-type': 'application/json'
      }
    }
    try {
      const res = await axios.post('myResume/v1',point, config);
      dispatch({
        type: 'ADD_POINT',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'LOADING_ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (<GlobalContext.Provider value={{
    bullepoints: state.bullepoints,
    error: state.error,
    loading: state.loading,
    getInfo,
    deleteBulletPoint,
    addBulletPoint
  }}>
    {children}
  </GlobalContext.Provider>);
}
