import Card from "../card/card.component";
import "./cardGrid.style.css";
/**
 * Renders a grid of cards based on the provided data.
 *
 * @component
* @param {Object} props - The component properties.
 * @param {Array<Card>} props.cards - An array of card objects to be rendered in the grid.
 * @param {string} [props.fallbackText="No Data Available Yet!"] - The text to display when no cards are available.
 * @param {"small" | "big"} [props.gridSize="big"] - The size of the grid.
 * @param {"small" | "big"} [props.cardSize="small"] - The size of the cards.
 * @param {string} [props.cardFormTitle=""] - The title for the card form.
 * @param {string} [props.cardFormButtonText=""] - The text for the card form button.
 * @param {boolean} [props.disableButtons=false] - Flag to disable buttons in the card.
 * @returns {JSX.Element} - The CardGrid component.
 *
 * @typedef {Object} Card
 * @property {string} id - The unique identifier for the card.
 * @property {string} title - The title of the card.
 * @property {Object} data - The description data of card.
 * @property {Array<CardFormField>} [cardFormFields=[]] - The fields to be included in the card form.
 
* @typedef {Object} CardFormField
* @property {string} label - The label for the form field.
* @property {string} [placeholder] - The placeholder text for the form field.
* @property {string|number|boolean} [defaultValue] - The default value for the form field.
* @property {string} [inputType] - The type of the form field (e.g., text, dropdown).
* @property {Array<string>} [options] - The options for dropdown inputType.
*/
function CardGrid({
    cardFormTitle='',
    cards=[],
    cardFormButtonText='',
    fallbackText = "No Data Available Yet!",
    gridSize = "big",
    disableButtons=false,
    cardSize='small',
}) {
    const isDataEmpty = !cards || cards.length === 0;
    return (
        <div className={`${gridSize.toLowerCase()} grid`}>
            {isDataEmpty && <p className="fallbackText">{fallbackText}</p>}
            {!isDataEmpty &&
                cards.map((card) => (
                    <Card key={card.id} disableButtons={disableButtons} cardFormButtonText={cardFormButtonText} cardFormTitle={cardFormTitle}   size={cardSize} {...card} />
                ))}
        </div>
    );
}

export default CardGrid;
