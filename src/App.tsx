import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Routes, Route } from 'react-router-dom';
import LazyPage from 'src/components/LazyPage';
import useAuth from 'src/hooks/useAuth';
import AuthLayout from 'src/layouts/AuthLayout';
import MainLayout from 'src/layouts/MainLayout';
import sleep from 'src/lib/sleep';
import { RootState } from 'src/redux/store';

const lazyImport = (f: () => any) => lazy(async () => {
  await sleep(500);
  return f();
});

const Home = lazyImport(() => import('./views/Home'));
const Login = lazyImport(() => import('./views/Login'));
const UserForm = lazyImport(() => import('./views/UserForm'));
const UserList = lazyImport(() => import('./views/UserList'));

const App = () => {
  useAuth();

  const { loading } = useSelector((s: RootState) => s.auth);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth/login" element={<LazyPage><Login /></LazyPage>} />
        </Route>
        <Route path="/admin" element={<MainLayout />}>
          <Route path="/admin" element={<LazyPage><Home /></LazyPage>} />
          <Route path="/admin/users" element={<LazyPage><UserList /></LazyPage>} />
          <Route path="/admin/users/form" element={<LazyPage><UserForm /></LazyPage>} />
        </Route>
        <Route path="/" element={<Navigate replace to="/admin" />} />
      </Routes>
    </>
  );
};

export default App;
