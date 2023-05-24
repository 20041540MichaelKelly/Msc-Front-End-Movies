/**
 * Authentication process
 * @param {*} email 
 * @param {*} password 
 * @param {*} firstName 
 * @param {*} lastName 
 * @returns User object
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
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ email: email, password: password })
  }).then(res => res.json())
};

export const getUserByEmail = (email) => {
  return fetch(`/api/accounts/${email}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'get',
  }).then(res => res.json())
};

export const addFavourite = (id, movie) => {
  return fetch(`/api/accounts/${id}/favourite`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ movieId: movie.id })
  }).then(res => res.json())
};

export const getFavourites = (id) => {
  return fetch(`/api/accounts/${id}/favourite`, {
    headers: {
      'Content-Type': 'application/json'
    },
  }
  ).then((res) => res.json());
};

export const addFavouriteTvShow = (id) => {
  return fetch(`/api/accounts/${id}/favouriteTvShow`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ tvShowId: id })
  }).then(res => res.json())
};

export const addFavouritePerson = (id) => {
  return fetch(`/api/accounts/${id}/favouritePerson`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ personId: id })
  }).then(res => res.json())
};
/**
 * ******************Movies Section************************
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

export const getPopularMovies = (args) => {
  const [, pagePart] = args.queryKey;
  const { page } = pagePart;
  page ? page : 1;
  return fetch(
    `/api/movies/popular`, {
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

export const getMovieCredits = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/${id}/credits`, {
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

export const getSimilarMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/${id}/similar`, {
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
/***************Fantasy Movies */
export const addFantasyMovie = (title, time, genres, productionCompnay, overview) => {
  return fetch('/api/fantasy', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ title: title, time: time, genres: genres, productionCompany: productionCompnay, overView: overview })
  }).then(res => res.json())

};

export const getFantasyMovie = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/fantasy/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then((res) => res.json());
};

/**
 * ***********People*********************************
 */

export const getActors = (args) => {
  const [, pagePart] = args.queryKey;
  const { page } = pagePart;
  page ? page : 1;
  return fetch(
    `/api/person/popular`, {
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

export const getActor = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/person/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then((res) => res.json());
};

export const getActorCredits = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/person/${id}/movie_credits`, {
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

export const getActorImages = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/person/${id}/images`, {
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

/*----------------Tv Shows--------------------------*/

export const getTvShows = (args) => {
  const [, pagePart] = args.queryKey;
  const { page } = pagePart;
  page ? page : 1;
  return fetch(
    `/api/tv`, {
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

export const getTvShow = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/tv/${id}`, {
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

export const getTvShowImages = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/tv/${id}/images`, {
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


export const getTvShowCredits = (args) => {

  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/tv/${id}/credits`, {
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

export const getTvShowAggregateCredits = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/tv/${id}/aggregate_credits`, {
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

//todo
export const getSimilarTvShows = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/tv/${id}/similar`, {
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

export const getTvGenres = async () => {
  return fetch(
    `/api/genre/tv/list`, {
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