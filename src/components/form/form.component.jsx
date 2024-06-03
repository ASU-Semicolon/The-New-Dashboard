import { Form, useNavigation } from "react-router-dom";
import Button from "../button/button.component";
import InputWithLabel from "../Input-with-label/Input-with-label.component";
import './form.style.css'
import { useEffect, useRef, useState} from "react";
import Dropdown from "../dropdown/dropdown.component";

/**
 * Renders a modal form with various input fields.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {string} [props.method='post'] - The HTTP method to be used for the form submission.
 * @param {Array<Field>} [props.fieldsArr=[]] - An array of field objects to be rendered in the form.
 * @param {string} [props.title=''] - The title of the form.
 * @param {string} [props.buttonText='Add'] - The text to display on the submit button.
 * @param {boolean} [props.showModal=false] - Indicates whether the modal is shown.
 * @param {string} [props.id=''] - The unique identifier for the form.
 * @param {function} [props.cancelButtonHandler=() => {}] - Function to call when the cancel button is clicked.
 * @returns {JSX.Element} - The ModalForm component.
 *
 * @typedef {Object} Field
 * @property {string} label - The label for the field.
 * @property {string} [placeholder] - The placeholder text for the field.
 * @property {string} [defaultValue] - The default value for the field.
 * @property {string} [inputType] - The type of the field (e.g., text, dropdown).
 * @property {Array<string>} [options] - The options for dropdown inputType.
 * @property {boolean} [multiline] - Whether the input is multiline (textarea).
 */
function ModalForm({method='post',fieldsArr=[],title='',buttonText='Add' ,showModal=false, id='' ,cancelButtonHandler=()=>{}}) {
  const formRef=useRef()
 const navigation= useNavigation()
 const isSubmitting=navigation.state==='submitting'
 const [selectedValue,setSelectedValue]=useState('')
 let selectedName;
 let selectedDef;
 useEffect(() => {
  
  if (!isSubmitting) {
    if(formRef.current){
      
      formRef.current.reset()
    }
    cancelButtonHandler()
  }
}, [isSubmitting]);
useEffect(()=>{
  if(!showModal&&!id&&formRef.current){
    formRef.current.reset()
  }
},[showModal])
 
  return ( <div className="form__cont">
  <h2 className="primary__title">{title}</h2>
  <Form ref={formRef} className="modal__form" method={method}>

{fieldsArr.map((field)=>{
  if(field.inputType&&field.inputType==='dropdown'){
    if(field.deafultValue){
      setSelectedValue(field.deafultValue)
    }
    selectedName=field.label
    selectedDef=field.defaultValue

    return( <div key={field.label} className="input">
      <label className="label"> {field.label}</label>
<Dropdown   onSelect={setSelectedValue} options={field.options} deafultValue={field.defaultValue|| `select a ${field.label}`}/>
    </div>
    )
  }else{
    return <InputWithLabel key={field.label}  label={field.label} multiline={field.multiline?field.multiline:false} defaultValue={field.defaultValue?field.defaultValue:null} placeholder={field.placeholder?field.placeholder:`Enter ${field.label}`} inputType={field.inputType?field.inputType:'text'} />
  }
})}
{id&&<input type="hidden" name="id" value={id}/>}
{selectedName&&<input type="hidden" name={selectedName} value={selectedValue||selectedDef}/>}
<div className="form__button_cont">

<Button type="submit" disabled={isSubmitting}   rounded={false} outline={false} small={true} large={false}>{isSubmitting?'Submitting...':buttonText}</Button>
<Button rounded={false}  outline={true} small={true} large={false} onClick={()=>{
  if(formRef.current&&!id){
    formRef.current.reset()
  }
 
  cancelButtonHandler()}}>Cancel</Button>
</div>

  </Form>
</div>
   );
}

export default ModalForm;