import Genre from "./components/genre/Genre";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Movies from './components/movies/Movies';
import Search from './components/Search/Search';
import TvShows from './components/TvShows/TvShows';
import TvDetails from "./components/TvDetails/TvDetails";
import MovieDetail from './components/movieDetails/MovieDetail';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MovieContext from "./context/movieContext";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs"

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children : [
      {
        path : "",
        element : <Home />
      },
      {
        path : '/genre/:id/:name',
        element :  <Genre /> 
      },
      {
        path : '/TvShows/:id/:name',
        element :  <TvShows /> 
      },
      {
        path : "/movies/:name",
        element :  <Movies /> 
      },
      {
        path : "/search",
        element :  <Search /> 
      },
      {
        path : "/movieDetail/:Movieid",
        element : <MovieDetail /> 
      },
      {
        path : "/TvShowDetail/:TvShowid",
        element :  <TvDetails /> 
      },
      {
        path : "/ContactUs",
        element :  <ContactUs /> 
      }
    ]
  },
  

])
function App() {
  return (
    <MovieContext>
      <RouterProvider router={router} />
    </MovieContext>
  )
}

export default App;
