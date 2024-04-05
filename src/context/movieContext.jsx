import  { useState } from 'react'
import movieContext from './context'
// eslint-disable-next-line react/prop-types
const MovieContext = ({children}) => {
  const [searchval , setSearchVal] = useState("");
  return (
    <movieContext.Provider value={{searchval , setSearchVal}}>
      {children}
    </movieContext.Provider>
  )
}

export default MovieContext