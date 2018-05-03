export let getTokenFromLocalStorage = () =>
  JSON.parse(localStorage.getItem('token'));
