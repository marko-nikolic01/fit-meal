import { useState } from "react"
import validate from "../utilities/validation/foodSearchValidation.js"
import { getToken, authorize } from "../utilities/security/JWTSecurity.js"
import axios from "axios"
import './styles/Foods.css'
import UnauthorizedAccess from './UnauthorizedAccess.jsx'
import FoodsItem from './FoodsItem.jsx'

function Foods(props) {
    const { theme, isUserAuthenticated } = props
    const [searchQuery, setSearchQuery] = useState("")
    const [foods, setFoods] = useState([])

    function handleChange(event) {
        const { value } = event.target
        setSearchQuery(value)
    }

    function search() {
        if (validate(searchQuery)) {
            handleSearchRequest()
        }
    }

    async function handleSearchRequest() {
        axios.get('https://localhost:7166/api/foods/search' + `?query=${encodeURIComponent(searchQuery)}` + `&jwt=${encodeURIComponent(getToken())}`)
            .then(response => {
                if (response.status === 200) {
                    setFoods(response.data.foods)
                }
            })
            .catch(error => {
            });
    }

    function ItemList() {
        return (
            <div className='foods-item-list'>
                {foods.map(food => (
                    <FoodsItem theme={theme} food={food} />
                ))}
            </div>
        );
    }

    return (
        <>
            {isUserAuthenticated
                ? <div className={`foods background-${theme}-secondary`}>
                    <div className='foods-search-bar'>
                        <input className={`foods-search-bar-input text-${theme}-primary background-${theme}-primary border-${theme}-secondary`} type="text" placeholder="Search" value={searchQuery} onChange={handleChange} />
                        <button className={`foods-search-bar-button button-${theme}-primary`} onClick={search}>
                            <img className='foods-search-bar-button-icon' src="./images/Search.svg"></img>
                        </button>
                    </div>
                    <ItemList />
                </div>
                : <UnauthorizedAccess theme={theme} />
            }
        </>
    )
}

export default Foods