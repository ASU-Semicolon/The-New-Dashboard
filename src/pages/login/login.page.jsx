import NavBar from "../../components/navBar/navBar.component";
import InputWithLabel from "../../components/Input-with-label/Input-with-label.component";
import Button from "../../components/button/button.component";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import './login.style.css'
function Login() {
  const navigation=useNavigation()
  const errors=useActionData()
  console.log(errors)
  const isSubmitting=navigation.state==='submitting'
  return (  <>
 
  <NavBar isAuthenticated={false}/>
 <main className="main__login" >
  <section className="section__login">

  <h1 className="primary__title">Log In To Dashboard</h1>
 <Form className='login__form' method="post">
  <InputWithLabel label='phone' placeholder='Enter Phone Number' inputType='text' />
  <InputWithLabel label='password' placeholder='Enter Password' inputType='text' />
  <Button type="submit" rounded={false} disabled={isSubmitting} outline={false} small={false} large={true}>{isSubmitting?'Submitting...':"Continue To Dashboard"}</Button>
 </Form>
  </section>
 
 </main>
  </>);
}

export default Login;
export async function action({request}){
  const data=await request.formData()
  const user={
    phone:data.get('phone'),
    password:data.get('password')

  }
  const response=await fetch('http://localhost:8000/users/login',{
    method:request.method,
    body:JSON.stringify(user),
    headers:{
      'Content-Type':'application/json'
    }
  })
  if (response.status!==200){
    
    return response
  }
  const responseData=await response.json()
  
  localStorage.setItem('token',responseData.data.token)
  localStorage.setItem('role',responseData.data.role)

  return redirect('/committees')

}