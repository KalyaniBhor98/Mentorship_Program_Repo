import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import loginIcon from './loginIcon.png';

function Login() {
  const navigate = useNavigate();
  const initialValues = { username: '', email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [show, setShow] = useState(false);

  const WelcomePage = () => {
    navigate('/welcomePage');
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('formvalues', formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = 'Username is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This Is Not an Valid Email Format!';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be more than 6 characters!';
    } else if (values.password.length > 10) {
      errors.password = 'Password cannot exceed more than 10 characters!';
    }
    return errors;
  };
  if (Object.keys(formErrors).length === 0 && isSubmit ) {
    WelcomePage();
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div style={{ textAlign: 'center'}}>
        <h2>Login Form</h2>

        <button onClick={handleShow} style={{ width: 'auto'}}>Login</button>
      </div>
      {show === true ? (
        <div show={show} className="modal">
        <form
          className="modal-content animate"
          onSubmit={handleSubmit}
        >
          <div className="imgcontainer">
            <span onClick={handleClose} className="close" title="Close Modal">×</span>
            <img src={loginIcon} alt="Avatar" className="avatar" />
          </div>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <h3 style={{ color: 'green', textAlign: 'center' }}>Signed In Successfully!</h3>
          ) : (
            <div />
          )}
          <div className="container">
            <label htmlFor="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              value={ formValues.username}
              onChange={handleChange}
            />
            <p style={{ color: 'red'}}>{formErrors.username}</p>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={ formValues.email}
              onChange={handleChange}
            />
            <p style={{ color: 'red'}}>{formErrors.email}</p>
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={ formValues.password}
              name="password"
              onChange={handleChange}
            />
            <p style={{ color: 'red'}}>{formErrors.password}</p>
            <button type="submit">Login</button>
          </div>
          <div className="cancelbtn" style={{ backgroundColor: "#f1f1f1" }}>
            <button
              type="button"
              onClick={handleClose}
              className="cancelbtn"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>) : (
        <div />
      )}
    </div>
  );
}

export default Login;
