export const getMovies = async () =>{
    const API_KEY = "75905955c5cb7a222fd5f2c4819df993"

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        const data = await response.json();
        return data.results; // <- this is what TestAPI will receive
      } catch (error) {
        console.error('Error fetching popular movies:', error);
        return []; // <- return empty array on error
      }
};

  

  