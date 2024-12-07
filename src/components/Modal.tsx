import '../styles/modal-styles/modal-styles.css';

const Modal = () => {
  return (
    <div className='modal'>
        <div className="modal-container">
            <div className="modal-header">
                <p className="modal-header-content">Send A Message</p>
                <button className="modal-close-btn"></button>
            </div>
            <div className="modal-content">
                <p className="modal-critical-content">If this is pertaining to a time critical issue, please contact the</p>
                <p className="modal-contact-content">Ace Retail Care Center at <a className='modal-contact-number' href="#">800-777-6796</a></p>
                <form className="modal-form">
                    <label htmlFor="message">Enter Message</label>
                    <textarea id="message" name="message" rows={4} cols={50}></textarea>
                    <label htmlFor="name">First Name</label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                    <button className="modal-cancel-btn">Cancel</button>
                    <button className="modal-submit-btn">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Modal