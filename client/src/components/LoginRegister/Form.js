import React from 'react';
import { Link } from 'react-router-dom';

const Form = ({
  title,
  buttonText,
  email,
  type,
  password,
  handleSubmit,
  handleChange
}) => {
  return (
    <div className="valign-wrapper row login-box login">
      <div className="col card s10 pull-s1 m6 pull-m3 l4 pull-l4 ">
        <form onSubmit={handleSubmit} noValidate>
          <div className="card-content">
            <h5>{title}</h5>
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={email}
                />
              </div>
              <div className="input-field col s12">
                <label htmlFor="password">Password </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  value={password}
                />
              </div>
              <button
                className="btn green darken-3 waves-effect waves-light col s12"
                type="submit"
              >
                {buttonText}
              </button>
            </div>
            <div>
              {type === 'register' ? (
                <p>
                  Already a member? Please <Link to="/login">login here</Link>
                </p>
              ) : (
                <div>
                  <p>
                    Not a member? Please{' '}
                    <Link to="/register">register here</Link>
                  </p>
                  <p>
                    <br />
                    For demo purposes you can use:
                    <ul>
                      <li>email: demo@admin.com</li>
                      <li>password: admin123</li>
                    </ul>
                  </p>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
