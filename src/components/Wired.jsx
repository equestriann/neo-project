export default function Wired(props) {
    return (
        <div>
            <div className="good">
                <img src={props.good.picture} alt=""/>
                <div className="good-details">
                    <p>{props.good.title}</p>
                    <p>
                        <span className="star">&#9733;</span>
                        {props.good.rating}
                    </p>
                    <p>{props.good.price}₽</p>
                    <button className="buy-button">Купить</button>
                </div>
            </div>
        </div>
    )
}