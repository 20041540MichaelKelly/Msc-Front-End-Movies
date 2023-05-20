/**
 * Authentication process
 * @param {*} email 
 * @param {*} password 
 * @param {*} firstName 
 * @param {*} lastName 
 * @returns 
 */

export const signup = (email, password, firstName, lastName) => {
  return fetch('/api/accounts', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ email: email, password: password, firstName: firstName, lastName: lastName })
  }).then(res => res.json())
};

export const login = (email, password) => {
  return fetch('/api/accounts/security/token', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ email: email, password: password })
  }).then(res => res.json())
};

/**
 * Movies Section
 * @returns 
 */

export const getMovies = () => {
    return fetch(
      `/api/movies`
    ).then((res) => res.json());
  };
  
  export const getMovie = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `/api/movies/${id}`,{headers: {
        'Authorization': window.localStorage.getItem('token')
     }}
    ).then((res) => res.json());
  };

  export const getGenres = () => {
    return fetch(
      `/api/genres`, {headers: {
        'Authorization': window.localStorage.getItem('token')
     }}
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieImages = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };
  