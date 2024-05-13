import sonnyImage from '../components/sonny.jpg';
import '../App.css';
// placeholder
const Users = () => {
    return (
        <div>
            <h2>User Management</h2>
            <p>This is the User Management component.</p>
            <img src={sonnyImage} alt="User Management" className="sonnyImage" />
        </div>
    );
};

export default Users;
