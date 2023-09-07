import './styles/NavigationBarItem.css'

function NavigationBarItem(props) {
    const { theme, content, isSelected, setSelectedTab } = props

    function navigate() {
        console.log(content)
        setSelectedTab(content)
    }

    return (
        <>
            <div className={`navigation-bar-item navigation-bar-item-background-${theme}-${isSelected ? 'secondary' : 'primary'} text-${theme}-${isSelected ? 'secondary' : 'primary'}`} onClick={navigate}>
                <div className={`navigation-bar-item-content`}>
                    {content}
                </div>
            </div>
        </>
    )
}

export default NavigationBarItem