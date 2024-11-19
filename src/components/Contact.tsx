import footer_img from '../assets/img/footerHand.png';
import '../styles/contact-styles/contact-styles.css';

const Contact = () => {
  return (
    <section>
        <div className="contact">
            <div className="contact-container">
                <div className="contact-info-container">
                    <p className="contact-info">We're here to help. Call us at <a className='contact-phone' href="tel:630-472-4784">(630 472-4784)</a> or&nbsp;&nbsp;<a href="mailto:storeoperations@acehardware.com" className='contact-email'>Email us</a></p> 
                </div>
                <div className="contact-img-container">
                    <img className="contact-img" src={footer_img} alt="phone" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact