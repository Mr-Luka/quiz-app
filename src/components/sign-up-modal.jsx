import { useRef, useImperativeHandle, forwardRef } from 'react';

const SignUpModal = forwardRef((props, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current && !dialog.current.open) {
        dialog.current.showModal();
      }
    },
    close() {
      if (dialog.current) {
        dialog.current.close();
      }
    }
  }));

  return (
    <dialog ref={dialog} className="signup-modal">
      <form className="sign-up-form" method="dialog">
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
              <input type="checkbox" />
              <span className="slider"></span>
            </div>
            <small>Yes</small>
          </div>
        </div>
        <button className="sign-up-2" type="submit">Sign Me Up!</button>
      </form>
      <button className="close-signup" onClick={props.onClose}>
        <span className="material-symbol-outlined">x</span>
      </button>
    </dialog>
  );
});

export default SignUpModal;