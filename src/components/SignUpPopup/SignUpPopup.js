import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';


function SignUpPopup(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [user, setUser] = React.useState('');
  const isValid = true;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <PopupWithForm
      title="Sign up"
      name="signup"
      buttonText="Sign up"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      onLinkClick={props.onLinkClick}
      disabledButton={!isValid}
    >
      <label className="form__label">
        Email
        <input
          required
          id="email"
          name="email"
          value={email}
          type="email"
          onChange={handleEmailChange}
          className="form__input"
          placeholder="Enter email"
        />
        <span
          className={`form__input-error name-error `}
        >
        </span>
      </label>
      <label className="form__label">
        Password
        <input
          required
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="form__input"
          placeholder="Enter password"
        />
        <span
          className={`form__input-error password-error `}
        >
        </span>
      </label>
      <label className="form__label">
        Username
        <input
          required
          id="username"
          name="username"
          type="text"
          value={user}
          onChange={handleUserChange}
          className="form__input"
          placeholder="Enter your username"
        />
        <span
          className={`form__input-error username-error `}
        >
        </span>
      </label>
    </PopupWithForm>
  );
}

export default SignUpPopup;
