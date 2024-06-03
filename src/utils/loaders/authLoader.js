import { getToken,isUserAdmin } from "../authData";
export default function authLoader(){
return {
 token: getToken(),
 isAdmin:isUserAdmin()
}
}