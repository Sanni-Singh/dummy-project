import Genre from "./components/genre/Genre";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Movies from './components/movies/Movies';
import Search from './components/Search/Search';
import TvShows from './components/TvShows/TvShows';
import TvDetails from "./components/TvDetails/TvDetails";
import MovieDetail from './components/movieDetails/MovieDetail';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieContext from "./context/movieContext";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs"

const router = createBrowserRouter([
  {
    path : "/",
    element : <> <Navbar /> <Home /> <Footer /> </>
  },
  {
    path : '/genre/:id/:name',
    element : <> <Navbar /> <Genre /> <Footer /> </>
  },
  {
    path : '/TvShows/:id/:name',
    element : <> <Navbar /> <TvShows /> <Footer /> </>
  },
  {
    path : "/movies/:name",
    element : <> <Navbar /> <Movies /> <Footer /> </>
  },
  {
    path : "/search",
    element : <> <Navbar/> <Search /> <Footer /> </>
  },
  {
    path : "/movieDetail/:Movieid",
    element : <> <Navbar /> <MovieDetail /> <Footer /> </>
  },
  {
    path : "/TvShowDetail/:TvShowid",
    element : <> <Navbar /> <TvDetails /> <Footer /> </>
  },
  {
    path : "/ContactUs",
    element : <> <Navbar /> <ContactUs /> <Footer /> </>
  }

])
function App() {
  return (
    <MovieContext>
      <RouterProvider router={router} />
    </MovieContext>
  )
}

export default App;
