import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/NavigationBar.css'
import NavigationBarItem from './NavigationBarItem.jsx'

function NavigationBar(props) {
    const { theme } = props
    const [selectedTab, setSelectedTab] = useState('Home')

    const navigate = useNavigate();

    return (
        <>
            <div className={`navigation-bar background-${theme}-primary`}>
                <NavigationBarItem theme={theme} content='Home' isSelected={selectedTab === 'Home' ? true : false} setSelectedTab={setSelectedTab} />
                <NavigationBarItem theme={theme} content='Foods' isSelected={selectedTab === 'Foods' ? true : false} setSelectedTab={setSelectedTab} />
                <NavigationBarItem theme={theme} content='Diary' isSelected={selectedTab === 'Diary' ? true : false} setSelectedTab={setSelectedTab} />
                <NavigationBarItem theme={theme} content='Meal maker' isSelected={selectedTab === 'Meal maker' ? true : false} setSelectedTab={setSelectedTab} />
            </div>
        </>
    )
}

export default NavigationBar