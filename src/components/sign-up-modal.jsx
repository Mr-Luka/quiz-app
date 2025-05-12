import { useRef, useImperativeHandle, forwardRef, useState } from 'react';

import SignUpModalScrollToAccept from './sign-up-modal-details';

const SignUpModal = forwardRef((props, ref) => {
  const dialog = useRef();
  const [signUp, setSignUp] = useState(false);

  const handleFinalSignUp = () => {  
    props.onClose();
    props.onSignUpSuccess(); // call the success callback
  };

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current && !dialog.current.open) {
        dialog.current.showModal();
      }
    },
    close() {
      if (dialog.current) {
        dialog.current.close();
        setSignUp(false); 
      }
    }
  }));

  const handleSubmit = (e) => {
    e.preventDefault();  
    setSignUp(true);
  };


   return (
    <dialog ref={dialog} className="signup-modal">
      {!signUp ? (
        <form className="sign-up-form" onSubmit={handleSubmit} method="dialog">
          <div className="input-wrap">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" required />
          </div>
          <div className="input-wrap">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" required />
          </div>
          <div className="age">
            <small className='my-age'>I am over 21 years of age</small>
            <div>
              <small>No</small>
              <div className="switch">
                <input type="checkbox" required /> 
                <span className="slider"></span>
              </div>
              <small>Yes</small>
            </div>
          </div>
          <button className="sign-up-2" type="submit">Sign Me Up!</button>
        </form>
      ) : (
        <SignUpModalScrollToAccept onAccept={handleFinalSignUp} />
      )}
      <button className="close-signup" onClick={props.close}>
        <span className="material-symbol-outlined">x</span>
      </button>
    </dialog>
  );
});

export default SignUpModal;