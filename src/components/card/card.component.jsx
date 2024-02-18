import "./card.style.css";
function Card({ title, data, size }) {
    return (
        <div className={`${size} card`}>
            <div className="card-text-cont">
                <p className="card-title">{title}</p>
                {Object.keys(data).length > 1 ? (
                    <ul className="card-list">
                        {Object.keys(data).map((key) => (
                            <li
                                key={key}
                                className="card-description card-item"
                            >
                                <span> {`${key}:`}</span>
                                <span>{data[key]}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <span className="card-description">
                        {Object.values(data)[0]}
                    </span>
                )}
            </div>
            <div className="card-button-cont">
                <button>Edit</button> <button>Delete</button>
            </div>
        </div>
    );
}

export default Card;
