import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { RootState } from 'src/redux/store';

const AuthLayout = () => {
  const navigate = useNavigate();
  const { loading, user } = useSelector((s: RootState) => s.auth);

  useEffect(() => {
    if (!loading && user) {
      navigate('/admin');
    }
  }, [loading, user, navigate]);

  if (loading || user) return null;

  return (
    <>
      <h1>AuthLayout</h1>
      <Outlet />
    </>
  );
};

export default AuthLayout;
