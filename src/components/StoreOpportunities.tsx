import StoreCards from './StoreCards'
import '../styles/store-opportunities-styles/store-opportunities.styles.css'

const StoreOpportunities = () => {
  return (
    <section>
        <div className="store-opportunities">
            <h2 className="store-opportunities-header">My store opportunities</h2>
            <p className="store-opportunities-content">Here's your store's largest opportunities for operational improvement.</p>
            <StoreCards />
            <a href ="https://adw.acehardware.com/ibi_apps/bip/portal/Stores?IBToken=kB29ph7y1dv8Ur4LzfajE6KsJjvPsC4L1nmhhKAtplFrOrXpaRBAv%2bKgPJMv6IxbAm8Tyv4cumrej1snkMRvP7U0zSz%2fZEG1xXxVKmt3zPA%3d" className='store-opportunities-analyticslink' target='blank'>Analytics dashboard</a>
        </div>
    </section>
  )
}

export default StoreOpportunities