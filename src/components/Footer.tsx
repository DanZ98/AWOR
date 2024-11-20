import '../styles/footer-styles/footer-styles.css';
import phoneIcon from '../assets/img/phone-icon--light.svg';
import messageIcon from '../assets/img/mail-icon--light.svg';
import googlePlayIcon from '../assets/img/Google Play Store.svg';
import appStoreIcon from '../assets/img/Apple_app_store.svg';

const Footer = () => {
  return (
    <footer>
       <div className="footer">
            <div className="footer-container">
                <div className="footer-col">
                    <h4 className="footer-title">Ace Retailer Care Center</h4>
                    <p className="footer-contact"><img src={phoneIcon} alt="phone" />&nbsp;&nbsp;&nbsp;<a href="tel:8007776797" className='footer-number'>(800) 777-6797</a>&nbsp;&nbsp;or&nbsp;&nbsp;<a href="tel:6309902992" className='footer-number'>(630) 990-2992</a></p>
                    <p className="footer-message"><img src={messageIcon} alt="email" />&nbsp;&nbsp;&nbsp;Send a message</p>
                    <p className="footer-hours-title">Support Hours:</p>
                    <p className="footer-day-time">Monday - Friday 6am - 10pm CST</p>
                    <p className="weekends-time">Weekends &amp; Most Holidays 7am - 7pm CST</p>
                </div>
                <div className="footer-col">
                    <h4 className="footer-title">ACENET Availability</h4>
                    <p className="footer-sun-tues">Sunday - Tuesday 7am - 12am CST</p>
                    <p className="footer-wed-sat">Wednesday - Saturday 7am - 11pm CST</p>
                </div>
                <div className="footer-col">
                    <h4 className="footer-title">Mobile Apps</h4>
                    <p className="footer-ace-retailer">Ace Retailer Mobile Assistant app:</p>
                    <p className="footer-google-apple">
                        <a href="https://itunes.apple.com/us/app/ace-ordering/id1342227979" target='_blank'><img className='footer-app footer-apple-app' src={appStoreIcon} alt="app store" /></a>
                        <a href="http://play.google.com/store/apps/details?id=com.acehardware.aceordering" target='_blank'><img className='footer-app footer-google-app' src={googlePlayIcon} alt="google play" /></a>
                    </p>
                    <a href="https://acenet.aceservices.com//ACENET/Documents/Application%20Documents/AceNet%20PrivacyPolicy.pdf" className="view-all-link" target='_blank'>ACENET Privacy Policy</a>
                </div>
            </div>
        </div> 
    </footer>
  )
}

export default Footer