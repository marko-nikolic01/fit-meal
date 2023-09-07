import { useNavigate } from 'react-router-dom'
import './styles/NavigationBar.css'
import NavigationBarItem from './NavigationBarItem.jsx'

function NavigationBar(props) {
    const { theme } = props

    const navigate = useNavigate();

    return (
        <>
            <div className={`navigation-bar background-${theme}-primary`}>
                <NavigationBarItem theme={theme} content='Home' />
                <NavigationBarItem theme={theme} content='Foods' />
                <NavigationBarItem theme={theme} content='Diary' />
                <NavigationBarItem theme={theme} content='Meal maker' />
            </div>
        </>
    )
}

export default NavigationBar