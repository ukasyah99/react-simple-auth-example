import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

const Home = () => {
  const { user } = useSelector((s: RootState) => s.auth);

  return (
    <>
      <h1>Home</h1>
      <p>
        Pesan ini dapat dilihat oleh semua role.
      </p>
      {user?.role === 'admin' && (
        <p>
          Pesan ini hanya muncul jika rolenya admin.
        </p>
      )}
      {user?.role === 'staff' && (
        <p>
          Pesan ini hanya muncul jika rolenya staff.
        </p>
      )}
    </>
  );
};

export default Home;
