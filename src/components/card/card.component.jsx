import "./card.style.css";
/**
 * @param {Object} props
 * @param {String} props.title
 * @param {Object<string, string>} props.data
 * @param {"small" | "big"} props.size
 * The data will be displayed in card it will be represented as key: value
 * if data has one prop it will display its value only
 */
function Card({ title, data, size = "big" }) {
    const isDataMultiple = Object.keys(data).length > 1;
    const dataList = (
        <div className="card-list">
            {Object.keys(data).map((key) => [
                <span key={key + " name"} className="card-description">
                    {`${key}:`}
                </span>,
                <span key={key + " value"} className="card-description">
                    {data[key]}
                </span>,
            ])}
        </div>
    );
    return (
        <div className={`${size.toLowerCase()} card`}>
            <div className="card-text-cont">
                <p className="card-title">{title}</p>
                {isDataMultiple ? (
                    dataList
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
