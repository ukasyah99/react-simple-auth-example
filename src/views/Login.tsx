import { useFormik } from 'formik';
import Cookies from 'js-cookie';

const Login = () => {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: ({ email, password }) => {
      if (email !== 'admin@example.com' && email !== 'staff@example.com') {
        alert('Invalid email or password');
      } else if (password !== 'secret') {
        alert('Invalid email or password');
      } else {
        // TODO: Request token from the server
        const token = JSON.stringify({
          email,
          role: email === 'admin@example.com' ? 'admin' : 'staff',
        });
        
        Cookies.set('my_token', token, {
          // expires: 3, // in days
        });

        // Force reload
        window.location.reload();
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Login</h1>
      <p>
        Email: admin@example.com, Pass: secret, Role: admin
      </p>
      <p>
        Email: staff@example.com, Pass: secret, Role: staff
      </p>
      <div>
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
