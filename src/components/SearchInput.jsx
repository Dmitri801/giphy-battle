import React, {useState} from 'react'
import axios from "axios"
function SearchInput() {
    const [searchValue, setSearchValue] = useState("")

    const onInputChange = (value) => {
        setSearchValue(value)
        searchGiphy(value)
    }

    const searchGiphy = async (value) => {
        try {
            const response = await axios(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&${searchValue}`)
            console.log(response)
        } catch(err) {
            console.log(err)
        }
    }
  return (
    <div className="searchInput-container">
      <input placeholder="Search the GIPHYs.." type="text" value={searchValue} onChange={(e) => onInputChange(e.target.value)}/>
    </div>
  )
}

export default SearchInput
