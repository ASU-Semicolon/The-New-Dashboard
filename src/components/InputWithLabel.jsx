import "./inputWithLabel.css"
function InputWithLabel({ Labelvalue, placeholder, multiline }) {
    if (!multiline) {
        return (
            <div className="input">
                <label className="label">{Labelvalue}</label>
                <input type="text" placeholder={placeholder}/>
            </div>
        );
    } else {
        return (
            <div className="input">
                <label className="label">{Labelvalue}</label>
                <textarea placeholder={placeholder} />
            </div>
        );
    }
}
export default InputWithLabel;






