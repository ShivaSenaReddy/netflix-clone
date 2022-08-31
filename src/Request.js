const APIKey = '8ff078b8a5cf62c2551c2ec0a95b1052'

const request = {
    fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`,
    fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKey}`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=en-US&page=1`,
    fetchAction: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
    fetchSciFi: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878`,
    fetchNetflix: `https://api.themoviedb.org/3/discover/tv?api_key=${APIKey}&with_networks=213`,
    fetchRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751`,
    fetchAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16`
}

export default request;