import "./inputwithlabel.style.css";
function InputWithLabel({ Label, placeholder, multiline }) {
    return (
        <div className="input">
            <label className="label">{Label}</label>
            {
                multiline ? (
                    <textarea placeholder={placeholder} />
                ):(
                    <input type="text" placeholder={placeholder}/>
                ) 
            }
           
        </div>
    );
}
export default InputWithLabel;