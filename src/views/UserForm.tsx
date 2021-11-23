import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

const UserForm = () => {
  const { user } = useSelector((s: RootState) => s.auth);

  return (
    <>
      <h1>UserForm</h1>
      
      {user?.role !== 'admin' && (
        <p>You are not allowed to access this resource.</p>
      )}
    </>
  );
};

export default UserForm;
