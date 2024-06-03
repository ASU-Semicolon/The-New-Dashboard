import "./input-with-label.style.css";
/**
 * InputWithLabel component renders a labeled input field.
 * It supports both single-line text input and multi-line text areas.
 * 
 * @param {Object} props - The component props.
 * @param {string} [props.label=''] - The label for the input field.
 * @param {string} [props.placeholder=''] - The placeholder text for the input field.
 * @param {boolean} [props.multiline=false] - Whether the input should be a textarea (multi-line).
 * @param {string} [props.inputType='text'] - The type of the input field (ignored if multiline is true).
 * @param {string} [props.defaultValue=''] - The default value for the input field.
 * @returns {JSX.Element} The InputWithLabel component.
 */
function InputWithLabel({ label='', placeholder='', multiline=false , inputType='text' ,defaultValue=false}) {
    return (
        <div className="input">
            <label className="label" htmlFor={label}>{label}</label>
            {
                multiline ? (
                    <textarea className="inputBar" name={label} placeholder={placeholder?placeholder:''} />
                ):(
                    <input className = "inputBar" name={label} type={inputType}  defaultValue={defaultValue?defaultValue:null} placeholder={placeholder?placeholder:''}/>
                ) 
            }
           
        </div>
    );
}
export default InputWithLabel;