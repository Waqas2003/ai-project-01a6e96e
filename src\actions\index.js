import axios from 'axios';

export const fetchProducts = () => {
  return dispatch => {
    axios.get('/api/products')
      .then(response => {
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const addToCart = product => {
  return { type: 'ADD_TO_CART', payload: product };
};

export const removeFromCart = productId => {
  return { type: 'REMOVE_FROM_CART', payload: productId };
};

export const login = credentials => {
  return dispatch => {
    axios.post('/api/login', credentials)
      .then(response => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const logout = () => {
  return { type: 'LOGOUT' };
};