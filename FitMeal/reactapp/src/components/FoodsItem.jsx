import './styles/FoodsItem.css'

function FoodsItem(props) {
    const { theme, food } = props

    return (
        <>
            <div className={`foods-item background-${theme}-primary border-${theme}-primary`}>
                <div className={`foods-item-information text-${theme}-primary`}>{food.name}, {food.nutrition.energy.amount} kcal</div>
                <button className={`foods-item-button button-${theme}-primary text-${theme}-secondary`}>Add to diary</button>
            </div>
        </>
    )
}

export default FoodsItem