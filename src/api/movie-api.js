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
    `/api/movies/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then((res) => res.json());
};

export const getGenres = () => {
  return fetch(
    `/api/genres`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then((response) => {
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
    `/api/movies/${id}/images`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
    .catch((error) => {
      throw error
    });
};

export const getMovieReviews = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/${id}/reviews`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
    .catch((error) => {
      throw error
    });
};

export const getUpcomingMovies = (args) => {
  const [, pagePart] = args.queryKey;
  const { page } = pagePart;
  page ? page : 1;
  return fetch(
    `/api/movies/upcoming`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  }).catch((error) => {
    throw error
  });
};

export const postMovieReviews = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/${id}/reviews`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    },
    method: 'POST',
    body: JSON.stringify({ data })
  }).then(res => res.json())
    .then(res => console.log(res));
};

export const getMoviesNowPlaying = (args) => {
  const [, pagePart] = args.queryKey;
  const { page } = pagePart;
  page ? page : 1;
  return fetch(
    `/api/movies/now_playing`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }}).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

export const getPopularMovies = (args) => {
  const [, pagePart] = args.queryKey;
  const { page } = pagePart;
  page ? page : 1;
  return fetch(
    `/api/movies/popular`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }}).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const getMovieCredits = ( args ) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `/api/movies/${id}/credits`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }}).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
         throw error
      });
    };

