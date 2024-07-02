/**
 * InfoCard component displays a card with a title and content.
 *
 * @component
 * @example
 * // Example usage:
 * // <InfoCard title="Card Title" info={true}>
 * //   <p>Some content</p>
 * // </InfoCard>
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the card.
 * @param {string} props.title - The title of the card.
 * @param {boolean} [props.info=false] - Determines if the card should have the 'info' class applied.
 *
 * @returns {JSX.Element} A styled information card component.
 */

import "./infoCard.style.css";
function InfoCard({ children, title, info = false }) {
    return (
        <div className={`${info && "info"} info__card`}>
            <p className="info__title">{title}</p>
            <div className="info__data">{children}</div>
        </div>
    );
}

export default InfoCard;
