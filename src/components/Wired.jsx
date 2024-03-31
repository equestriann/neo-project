export default function Wired(props) {
    return (
        <div>
            <div className="good">
                <img src={props.good.picture} alt=""/>
                <div className="good-details">
                    <p>
                        {props.good.title}
                        <span className="good-price">{props.good.price}₽</span>
                    </p>
                    <p>
                        <span className="star">&#9733;</span>
                        {props.good.rating}
                        <button className="buy-button">Купить</button>
                    </p>
                </div>
            </div>
        </div>
    )
}