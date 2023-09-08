import { useNavigate } from 'react-router-dom'
import './styles/NavigationBarItem.css'

function NavigationBarItem(props) {
    const { theme, content, path, isSelected } = props

    const navigate = useNavigate()

    return (
        <>
            <div className={`navigation-bar-item navigation-bar-item-background-${theme}-${isSelected ? 'secondary' : 'primary'} text-${theme}-secondary`} onClick={() => navigate(path)}>
                <div className={`navigation-bar-item-content`}>
                    {content}
                </div>
            </div>
        </>
    )
}

export default NavigationBarItem