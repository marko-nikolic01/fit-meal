import './styles/Foods.css'
import UnauthorizedAccess from './UnauthorizedAccess.jsx'

function Foods(props) {
    const { theme, isUserAuthenticated } = props

    return (
        <>
            {isUserAuthenticated
                ? <div className={`foods background-${theme}-secondary`}>
                    <div className='foods-search-bar'>
                        <input className={`foods-search-bar-input text-${theme}-primary background-${theme}-primary border-${theme}-primary`} type="text" placeholder="Search"/>
                        <button className='foods-search-bar-button'>
                            <img className="foods-search-bar-button-icon"/>
                        </button>
                    </div>
                </div>
                : <UnauthorizedAccess theme={theme} />
            }
        </>
    )
}

export default Foods