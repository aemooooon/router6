import { Link, Outlet } from 'react-router-dom';
import './index.less';


interface usersProps {

}

function Users(props: usersProps) {

	return (
		<div className="users">
			<div style={{
				display: 'flex',
				justifyContent: 'space-between',
				padding: '32px 0'
			}}>
				<Link to={"/users"}>back</Link>
				<Link to={"new"}>New User</Link>
			</div>
			<Outlet />

		</div>
	);
}
export default Users;