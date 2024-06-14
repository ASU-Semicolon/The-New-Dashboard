import './members.style.css'
import UsersList from '../../components/usersList/usersList.component';
function MembersPage() {
  return (  <> <main className="section__members">
    <div className="title__cont"><h1 className="primary__title">Members</h1></div>
    <div className="seperator"></div>
    <div className='members__grid'>
      <UsersList/>
    </div>
    </main></>);
}

export default MembersPage;