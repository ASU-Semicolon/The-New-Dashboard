import "./input-with-label.style.css";
function InputWithLabel({ label, placeholder, multiline }) {
    return (
        <div className="input">
            <label className="label">{label}</label>
            {multiline ? (
                <textarea placeholder={placeholder} />
            ) : (
                <input type="text" placeholder={placeholder} />
            )}
        </div>
    );
}
export default InputWithLabel;
