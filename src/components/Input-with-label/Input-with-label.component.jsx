import "./input-with-label.style.css";
function InputWithLabel({ label, placeholder, multiline , inputType}) {
    return (
        <div className="input">
            <label className="label" htmlFor={label}>{label}</label>
            {
                multiline ? (
                    <textarea className="inputBar" placeholder={placeholder} />
                ):(
                    <input className = "inputBar" type={inputType} id={label} placeholder={placeholder}/>
                ) 
            }
           
        </div>
    );
}
export default InputWithLabel;