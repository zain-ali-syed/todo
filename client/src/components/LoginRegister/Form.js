import React from 'react';

const Form = ({
  title,
  buttonText,
  email,
  password,
  handleSubmit,
  handleChange
}) => {
  return (
    <div className="valign-wrapper row login-box">
      <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
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
            </div>
          </div>
          <div className="card-action right-align">
            <input
              type="submit"
              className="btn blue waves-effect waves-light"
              value={buttonText}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
