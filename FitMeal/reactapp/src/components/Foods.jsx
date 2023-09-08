import { useState } from "react"
import './styles/Foods.css'
import UnauthorizedAccess from './UnauthorizedAccess.jsx'

function Foods(props) {
    const { theme, isUserAuthenticated } = props
    const [search, setSearch] = useState("opened")

    function handleChange(event) {
        const { value } = event.target
        setSearch(value)
    }

    return (
        <>
            {isUserAuthenticated
                ? <div className={`foods background-${theme}-secondary`}>
                    <div className='foods-search-bar'>
                        <input className={`foods-search-bar-input text-${theme}-primary background-${theme}-primary border-${theme}-secondary`} type="text" placeholder="Search" value={search} onChange={handleChange} />
                        <button className={`foods-search-bar-button button-${theme}-primary`}>
                            <img className='foods-search-bar-button-icon' src="./images/Search.svg"></img>
                        </button>
                    </div>
                </div>
                : <UnauthorizedAccess theme={theme} />
            }
        </>
    )
}

export default Foods