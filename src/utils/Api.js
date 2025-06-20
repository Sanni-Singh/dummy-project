// const token = import.meta.env.VITE_TOKEN;
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTRkNDA3NjU4YWI3MjkyMDlmNmQ3ZTM3YzdhZjAyZSIsIm5iZiI6MTcxMTYzMDU1MS41OTUsInN1YiI6IjY2MDU2OGQ3ZWNhZWY1MDE2MWFmOWI2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nReFhKbkU5ojRqqOyo9czsmUZQRD3UXvVB9qGgQJUq4'
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
 export const ApiCall = async (url) => {
    
    try{
      const response = await fetch(`https://api.themoviedb.org/3/${url}`, options);
      const convertedResponse = await response.json();
      return convertedResponse;
    }
    catch (error) {
      return error
    }
  }