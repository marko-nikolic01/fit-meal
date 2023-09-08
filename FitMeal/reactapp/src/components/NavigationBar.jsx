import { useState } from 'react'
import './styles/NavigationBar.css'
import NavigationBarItem from './NavigationBarItem.jsx'

function NavigationBar(props) {
    const { theme, selectedTab } = props

    return (
        <>
            <div className={`navigation-bar background-${theme}-primary`}>
                <NavigationBarItem theme={theme} content='Home' path='/home' isSelected={selectedTab === 'Home' ? true : false} />
                <NavigationBarItem theme={theme} content='Foods' path='/foods' isSelected={selectedTab === 'Foods' ? true : false} />
                <NavigationBarItem theme={theme} content='Diary' path='/home' isSelected={selectedTab === 'Diary' ? true : false} />
                <NavigationBarItem theme={theme} content='Meal maker' path='/home' isSelected={selectedTab === 'Meal maker' ? true : false} />
            </div>
        </>
    )
}

export default NavigationBar