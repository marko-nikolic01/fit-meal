import { useState } from "react"
import validate from "../utilities/validation/signInValidation.js"
import axios from "axios"
import './styles/Foods.css'
import UnauthorizedAccess from './UnauthorizedAccess.jsx'

function Foods(props) {
    const { theme, isUserAuthenticated } = props
    const [searchQuery, setsearchQuery] = useState("")

    function handleChange(event) {
        const { value } = event.target
        setsearchQuery(value)
    }

    function search() {
        if (validate(searchQuery)) {
            //handleSearchRequest()
        }
    }

   /* async function handleSearchRequest() {
        const errors = { emailOrUsername: '', password: '' }
        axios.post('https://localhost:7166/api/food/signin', form)
            .then(response => {
                if (response.status === 200) {
                }
            })
            .catch(error => {
            });
    }*/

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