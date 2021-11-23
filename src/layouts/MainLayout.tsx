import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { RootState } from 'src/redux/store';

const MainLayout = () => {
  const navigate = useNavigate();
  const { loading, user } = useSelector((s: RootState) => s.auth);

  const handleLogout = () => {
    Cookies.remove('my_token');
    window.location.reload();
  };

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth/login');
    }
  }, [loading, user, navigate]);

  if (loading || !user) return null;

  return (
    <>
      <h1>MainLayout</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>

      <ul>
        <li>
          <Link to="/admin">Home</Link>
        </li>
        <li>
          <Link to="/admin/users">UserList</Link>
        </li>
        {user.role === 'admin' && (
          <li>
            <Link to="/admin/users/form">UserForm - Admin only</Link>
          </li>
        )}
        <li>
          <a href="#logout" onClick={handleLogout}>Logout</a>
        </li>
      </ul>

      <Outlet />
    </>
  )
};

export default MainLayout;
