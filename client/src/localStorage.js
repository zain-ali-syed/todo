export const loadState = () => {
  try {
    const token =
      localStorage.getItem('token') === null
        ? undefined
        : localStorage.getItem('token');

    const email =
      localStorage.getItem('email') === null
        ? undefined
        : localStorage.getItem('email');

    const loggedIn =
      localStorage.getItem('loggedIn') === null
        ? 'no'
        : localStorage.getItem('loggedIn');

    return { email, token, loggedIn };
  } catch (err) {
    return { email: undefined, token: undefined, loggedIn: 'no' };
  }
};

export const saveState = state => {
  localStorage.setItem('email', state.email);
  localStorage.setItem('token', state.token);
  localStorage.setItem('loggedIn', state.loggedIn);
};
