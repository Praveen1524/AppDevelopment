export const login = (username, password) => {
    return (dispatch) => {
      dispatch({ type: 'LOGIN_REQUEST' });
        setTimeout(() => {
        if (username === 'admin' && password === 'password') {
          dispatch({ type: 'LOGIN_SUCCESS', payload: { username } });
        } else {
          dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid username or password' });
        }
      }, 2000); 
    };
  };
  