import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { authorize } from '../utilities/security/JWTSecurity'
import UnauthorizedAccess from './UnauthorizedAccess.jsx'

function Home(props) {
    const { theme } = props
    const [isUserSignedIn, setIsUserSignedIn] = useState(authorize())

    const navigate = useNavigate();

    const toSignUp = () => {
        navigate('/signup');
        window.scrollTo(0, 0);
    }

    return (
        <>
            {isUserSignedIn
                ? <div>Welcome!</div>
                : <UnauthorizedAccess theme={theme} />
            } 
        </>
    )
}

export default Home