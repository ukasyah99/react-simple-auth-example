import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sleep from 'src/lib/sleep';
import { setAuth } from 'src/redux/reducers/auth';
import { RootState } from 'src/redux/store';
import { User } from 'src/types';

const useAuth = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((s: RootState) => s.auth);
  
  useEffect(() => {
    if (loading) {
      (async () => {
        await sleep(1000);
        
        const token = Cookies.get('my_token');

        if (token) {
          const user: User = JSON.parse(token);
          dispatch(setAuth({ loading: false, user }));
        } else {
          dispatch(setAuth({ loading: false, user: null }));
        }
      })();
    }
  }, [loading, dispatch]);
};

export default useAuth;
