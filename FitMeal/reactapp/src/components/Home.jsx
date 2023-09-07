import './styles/Home.css'
import UnauthorizedAccess from './UnauthorizedAccess.jsx'

function Home(props) {
    const { theme, isUserAuthenticated } = props

    return (
        <>
            {isUserAuthenticated
                ? <div className={`home background-${theme}-secondary`}></div>
                : <UnauthorizedAccess theme={theme} />
            } 
        </>
    )
}

export default Home