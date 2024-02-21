import Card from "../card/card.component";
import "./cardGrid.style.css";
/**
 * Renders a grid of cards based on the provided data.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {Array} props.cards - An array of card objects to be rendered in the grid
 * @param {string} [props.fallbackText="No Data Available Yet!"] - The text to display when no cards are available.
 *  @param {"small" | "big"} props.gridSize -The size of gird
 *  @param {"small" | "big"} props.cardSize -The size of cards
 * @returns {JSX.Element} - The CardGrid component.
 *
 * @typedef {Object} Card
 * @property {string} id - The unique identifier for the card.
 * @property {string} title - The title of the card.
 * @property {Object} data - The description data of card.
 
 */
function CardGrid({
    cards,
    fallbackText = "No Data Available Yet!",
    gridSize = "big",
    cardSize,
}) {
    const isDataEmpty = !cards || cards.length === 0;
    return (
        <div className={`${gridSize.toLowerCase()} grid`}>
            {isDataEmpty && <p className="fallbackText">{fallbackText}</p>}
            {!isDataEmpty &&
                cards.map((card) => (
                    <Card key={card.id} size={cardSize} {...card} />
                ))}
        </div>
    );
}

export default CardGrid;
