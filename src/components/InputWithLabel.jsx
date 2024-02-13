import "./inputWithLabel.css"
function InputWithLabel(props) {
    const type = props.Type;
    if (type == "input") {
        return (
            <div className="input">
                <label className="label" >{props.Labelvalue}</label>
                <form >
                    <input type="text" placeholder={"Enter " + props.Labelvalue}/>
                </form>
            </div>
        );
    }
     else {
        return (
            <div className="input">
                <label className="label">{props.Labelvalue}</label>
                <textarea placeholder={"Enter " + props.Labelvalue}  />
                
            </div>
        );
    }
}
export default InputWithLabel;






