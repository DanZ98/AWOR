import StoreCards from './StoreCards'
import '../styles/store-opportunities-styles/store-opportunities.styles.css'

const StoreOpportunities = () => {
  return (
    <section>
        <div className="store-opportunities">
            <h2 className="store-opportunities-header">My store opportunities</h2>
            <p className="store-opportunities-content">Here's your store's largest opportunities for operational improvement.</p>
            <StoreCards />
            <a href ="#" className='store-opportunities-analyticslink'>Analytics dashboard</a>
        </div>
    </section>
  )
}

export default StoreOpportunities