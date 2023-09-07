import './styles/NavigationBarItem.css'

function NavigationBarItem(props) {
    const { theme, content } = props

    return (
        <>
            <div className='navigation-bar-item'>
                {content}
            </div>
        </>
    )
}

export default NavigationBarItem