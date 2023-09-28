import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignInPopup(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
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


  return (
    <PopupWithForm
      title="Sign in"
      name="signin"
      buttonText="Sign in"
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
          id="email-signin"
          name="email"
          value={email}
          type="email"
          onChange={handleEmailChange}
          className="form__input"
          placeholder="Enter email"
        />
        <span
          className={`form__input-error name-error`}
        >

        </span>
      </label>
      <label className="form__label">
        Password
        <input
          required
          id="password-signin"
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="form__input"
          placeholder="Enter password"
        />
        <span
          className={`form__input-error password-error 
            `}
        >
        </span>
      </label>
    </PopupWithForm>
  );
}

export default SignInPopup;
