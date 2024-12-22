import '../styles/modal-styles/modal-styles.scss';
import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modalSlice';

const Modal = () => {

    const dispatch = useDispatch();

    return (
      <div className="modal">
        <div className="modal-container">
          <div className="modal-header">
            <p className="modal-header-content">Send A Message</p>
            <button 
                className="modal-close-btn"
                onClick={() => dispatch(closeModal())}
            ></button>
          </div>
          <div className="modal-content">
            <p className="modal-critical-content">
              If this is pertaining to a time critical issue, please contact the
            </p>
            <p className="modal-contact-content">
              Ace Retail Care Center at{" "}
              <a className="modal-contact-number" href="tel:800-777-6796">
                800-777-6796
              </a>
            </p>
            <p className="modal-help">How can we help?</p>
            <form className="modal-form">
              <textarea
                className="modal-message"
                id="message"
                name="message"
                placeholder="Enter message..."
                rows={4}
                cols={50}
              ></textarea>
              <div className="modal-name-container">
                <div className="modal-input-label">
                  <label htmlFor="name">
                    First Name: <span>(required)</span>
                  </label>
                  <input type="text" id="name" name="name" />
                </div>
                <div className="modal-input-label">
                  <label htmlFor="last-name">
                    Last Name: <span>(required)</span>
                  </label>
                  <input type="text" id="last-name" name="last-name" />
                </div>
              </div>
              <div className="modal-name-container">
                <div className="modal-input-label">
                  <label htmlFor="phone">
                    Phone Number: <span>(required)</span>
                  </label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="modal-input-label">
                  <label htmlFor="email">
                    Email: <span>(required)</span>
                  </label>
                  <input type="email" id="email" name="email" />
                </div>
              </div>
              <div className="modal-btn-container">
                <button
                  className="modal-btn modal-cancel-btn"
                  onClick={() => dispatch(closeModal())}
                >
                  CANCEL
                </button>
                <button className="modal-btn modal-send-btn">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Modal;