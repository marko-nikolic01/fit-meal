import { useNavigate } from 'react-router-dom'
import './styles/NavigationBar.css'
import NavigationBarItem from './NavigationBarItem.jsx'

function NavigationBar(props) {
    const { theme } = props

    const navigate = useNavigate();

    return (
        <>
            <div className={`navigation-bar background-${theme}-primary`}>
                <NavigationBarItem content='ok' />
                <NavigationBarItem content='lol' />
                <NavigationBarItem content='lmao' />
            </div>
        </>
    )
}

export default NavigationBar