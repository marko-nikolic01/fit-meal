import './styles/Home.css'
import UnauthorizedAccess from './UnauthorizedAccess.jsx'

function Home(props) {
    const { theme, isUserAuthenticated } = props

    return (
        <>
            {isUserAuthenticated
                ? <div className='home'>Welcome!</div>
                : <UnauthorizedAccess theme={theme} />
            } 
        </>
    )
}

export default Home