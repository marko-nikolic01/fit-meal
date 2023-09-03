import { useNavigate } from "react-router-dom"
import './styles/Home.css'

function UnauthorizedAccess(props) {
    const { theme } = props

    const navigate = useNavigate();

    const toSignUp = () => {
        navigate('/signup');
        window.scrollTo(0, 0);
    }

    return (
        <>
            <div>Unauthorized access!</div>
        </>
    )
}

export default UnauthorizedAccess