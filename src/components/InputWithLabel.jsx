function InputWithLabel(props) {
    const type = props.Type;
    const divStyle = {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        paddingBottom: "30px"
    };
    const labelStyle = {
        color: "black",
        fontSize: "16px",
        position: "absolute",
        top: "-25px", 
    };
    const inputStyle = {
        padding: "12px",
        paddingLeft: "16px",
        width: "270px",
        height: "20px",
        borderRadius: "7px",
        marginTop: "6px",
    };
    const textareaStyle = {
        padding: "12px",
        paddingLeft: "16px",
        width: "270px",
        height: "60px",
        borderRadius: "7px",
        marginTop: "6px"
    };
    if (type == "input") {
        return (
            <div className="input" style={divStyle}>
                <label style={labelStyle} >{props.Labelvalue}</label>
                <form >
                    <input type="text" placeholder={"Enter " + props.Labelvalue} style={inputStyle}/>
                </form>
            </div>
        );
    }
     else {
        return (
            <div className="input" style={divStyle}>
                <label style={labelStyle}>{props.Labelvalue}</label>
                <textarea placeholder={"Enter " + props.Labelvalue} style={textareaStyle} />
                
            </div>
        );
    }
}
export default InputWithLabel;






