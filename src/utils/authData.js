export function getToken(){
  return localStorage.getItem('token')
 
}
export function isUserAdmin(){
  return localStorage.getItem('role')==='admin'
}