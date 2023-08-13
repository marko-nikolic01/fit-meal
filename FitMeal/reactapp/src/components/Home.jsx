import { useNavigate } from "react-router-dom"
import './styles/Home.css'

function Home(props) {
    const { theme } = props

    const navigate = useNavigate();

    const toSignUp = () => {
        navigate('/signup');
        window.scrollTo(0, 0);
    }

    return (
        <>
            <div>Welcome!</div>
        </>
    )
}

export default Home