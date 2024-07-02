/**
 * UserInfo component displays user information in a list format.
 *
 * @component
 * @example
 * // Example usage:
 * // <UserInfo userInfo={{ name: 'John Doe', age: 30, email: 'john@example.com' }} />
 *
 * @param {Object} props - The props object.
 * @param {Object} [props.userInfo={}] - The user information to be displayed. It is an object where the keys are the info labels and the values are the info details.
 *
 * @returns {JSX.Element} A styled list of user information.
 */
import './userInfo.style.css'
function UserInfo({userInfo={}}) {
  return ( <ul className='user_info'>
  {Object.keys(userInfo).map((info)=><li key={info} className=" description user_info__item">{`${info}: ${userInfo[info]}`}</li>)}
  </ul> );
}

export default UserInfo;