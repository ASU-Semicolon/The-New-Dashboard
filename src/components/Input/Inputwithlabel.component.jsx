import "./inputwithlabel.style.css";
function InputWithLabel({ Label, placeholder, multiline }) {
    return (
        <div className="input">
            <label className="label" htmlFor="labelId">{Label}</label>
            {
                multiline ? (
                    <textarea className="inputBar" placeholder={placeholder} />
                ):(
                    <input className = "inputBar" type="text" id="labelId" placeholder={placeholder}/>
                ) 
            }
           
        </div>
    );
}
export default InputWithLabel;