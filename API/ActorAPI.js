export const getActors = async () => {
    const API_KEY = "0c73625e289bd4fecc5eddb87dc73df2";
  
    try {
      const response = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching popular actors:", error);
      return [];
    }
  };
  