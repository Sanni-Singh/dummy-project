import Crousal_section from "./crousal/Crousal-section"
import Movies_List_Section from "./MoviesListSection/Movies_List_Section"
import LatestMoviesSection from "./LatestMoviesSection/LatestMovieSection"
import About from "./about/about"


const Home = () => {
  return (
    <div style={{backgroundColor : "whitesmoke", paddingBottom : "0.1rem" , color : "white"}}>
      <Crousal_section />
      <Movies_List_Section />
      <LatestMoviesSection />
      <About />
    </div>
  )
}

export default Home ;