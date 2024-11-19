import { StoreCardsData } from "../data"
import '../styles/store-cards-styles/store-cards-styles.css';

const StoreCards = () => {
  return (
    <div className="store-card">
        {
            StoreCardsData.map((card) => (
                <a href={card.link} target="blank" className="store-card-link" key={card.id}>
                    <div className="store-card-container">
                        <div className="store-card-flex">
                            <div className="store-card-content">
                                <p className="store-card-title">{card.title}</p>
                                <p className="store-card-description">{card.description}</p>
                                <p className="store-card-metric">{card.metric}</p>
                                <p className="store-cared-goal"><span className="store-card-goal">Goal:</span> {card.goal}</p>
                            </div>
                            <div className="store-card-content">
                                <span className="store-card-chevron">&#62;</span>
                            </div>
                        </div>
                    </div>
                </a>
            ))
        }
    </div>
  )
}

export default StoreCards