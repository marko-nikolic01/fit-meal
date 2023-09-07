import './styles/NavigationBarItem.css'

function NavigationBarItem(props) {
    const { theme, content } = props

    return (
        <>
            <div className={`navigation-bar-item background-${theme}-primary text-${theme}-primary`}>
                <div className={`navigation-bar-item-content`}>
                    {content}
                </div>
            </div>
        </>
    )
}

export default NavigationBarItem