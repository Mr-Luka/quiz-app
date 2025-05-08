import React, { useState, useEffect, useRef } from 'react';

export default function SignUpModalScrollToAccept ({ onAccept }) {
  const [isAcceptActive, setIsAcceptActive] = useState(false);
  const termsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = termsRef.current;
      if (element) {
        // Check if the user has scrolled to the bottom
        const isAtBottom =
          element.scrollHeight - element.scrollTop === element.clientHeight;
        setIsAcceptActive(isAtBottom);
      }
    };

    const element = termsRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
      //cleanup
      return () => {
        element.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div className="sign-up-form-2 scroll-to-accept-form">
        <h3 className="consent-form">Consent Form</h3>
        <div className="terms-and-conditions" ref={termsRef}>
         <p className="scroll-to-accept-p">
                        Terms and Conditions for Space Travel Registration<br />

                        Effective Date: [todays date here] <br />

                        By registering for space travel with [Space Travel Agency Name], you acknowledge and agree to the following terms and conditions. Please read carefully before proceeding.
                        <br />
                        1. Eligibility for Travel<b></b>
                        1.1. You must be at least 18 years old to register. Minors may travel only with parental or guardian consent and appropriate documentation.<br />
                        1.2. You must complete all required medical screenings and meet fitness standards as determined by our medical team.<br />

                        2. Health and Safety
                        2.1. Space travel involves inherent risks, including but not limited to changes in gravity, exposure to cosmic radiation, and physical demands.<br />
                        2.2. You agree to disclose all relevant medical conditions during the registration process. Failure to do so may result in denial of travel or forfeiture of your ticket.<br />

                        3. Travel Documentation<br />
                        3.1. All passengers must possess valid interplanetary travel identification (ITID) and any required visas or permits for their destination.<br />
                        3.2. It is your responsibility to provide accurate personal information during registration.<br />

                        4. Cancellations and Refunds<br />
                        4.1. Cancellations made more than 30 Earth days before the scheduled departure will be refunded minus a processing fee.<br />
                        4.2. No refunds will be issued for cancellations made within 30 Earth days of departure or for no-shows.<br />
                        4.3. Trips may be rescheduled or canceled by [Space Travel Agency Name] due to technical, environmental, or regulatory issues. In such cases, refunds or rebookings will be offered.<br />

                        5. Liability Waiver<br />
                        5.1. By registering, you agree to release [Space Travel Agency Name], its affiliates, and crew from liability for injuries, damages, or losses incurred during the trip, except in cases of gross negligence.<br />
                        5.2. You acknowledge that space travel involves risks that cannot be entirely mitigated, even with advanced technology.<br />

                        6. Behavioral Expectations<br />
                        6.1. Passengers must follow all safety protocols and instructions provided by the crew.<br />
                        6.2. Disruptive or dangerous behavior may result in removal from the spacecraft, and you will bear all associated costs.<br />

                        7. Data Privacy
                        7.1. Personal data collected during registration will be used for operational, safety, and legal purposes only.<br />
                        7.2. Data will be stored securely and shared only with authorized entities as required for travel.<br />

                        8. Governing Law
                        8.1. These terms are governed by the laws of the Interstellar Coalition and relevant planetary jurisdictions.<br />

                        9. Acceptance
                        9.1. By scrolling to accept and submitting your registration, you confirm that you have read, understood, and agreed to these terms and conditions.<br />

                        For questions or clarifications, please contact our customer support team at universeTravel@gmail.com.<br />
                        <strong className="i-accept">I accept.</strong>
                        <hr />
                    </p>
        </div>
        <button
          className="scroll-to-accept-button"
          disabled={!isAcceptActive}
          onClick={onAccept}
          autoComplete="off"
        >
          Accept
        </button>
      </div>
    </>
  );
};