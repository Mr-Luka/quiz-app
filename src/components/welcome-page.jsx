import welcomeVideo from '../../public/welcome-page.mp4';
import '../index.css';
import SignUpModal from './sign-up-modal.jsx';
import { useRef, useState } from 'react';

export default function WelcomePage({onRegisterSuccess}) {
    const [modalOpen, setModalOpen] = useState(false)
  const modalRef = useRef();

  function handleSignUpButton() {
    modalRef.current?.open();
    setModalOpen(true)
  }

  function handleCloseModal() {
  modalRef.current?.close();
  setModalOpen(false);
}

const handleSuccessfulSignUp = (name) => {
  handleCloseModal(); // close the modal
  onRegisterSuccess(name) // update the userRegistered state in app
}

  return (
    <>
      <div className="welcome-video-sign-up">
        <div className="content-welcome">
          {!modalOpen && (
            <>
              <h1>Welcome to Space Tourism</h1>
              <button onClick={handleSignUpButton} className="btn-sign-up" id="form-open-btn">
                Sign Up
              </button>
            </>
          )}
        </div>
        <video src={welcomeVideo} autoPlay loop muted></video>
      </div>
      <SignUpModal ref={modalRef} onClose={handleCloseModal} onSignUpSuccess={handleSuccessfulSignUp} />
    </>
  );
}