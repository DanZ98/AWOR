import { TrendingContentData, LatestContentData } from "../data";
import '../styles/topics-styles/topic-styles.css';

const Topics = () => {
  return (
    <section>
        <div className="topics">
            <div className="topics-container">
                <div className="topics-content">
                    <h3 className="topics-title">Trending Topics</h3>
                    {
                        TrendingContentData.map((trending) => {
                            return (
                                <div className="topics-item-container" key={trending.id}>
                                    <div className="topics-item-imgcontainer">
                                        <img src={trending.img} alt={trending.title} className="topics-item-img"/>
                                    </div>
                                    <a href="#" className="topics-item-link">{trending.title}</a>
                                </div>
                            );
                        }) 
                    }
                </div>
            </div>
            <div className="topics-container">
                <div className="topics-content">
                    <h3 className="topics-title">Latets Topics</h3>
                    {
                        LatestContentData.map((latest) => {
                            return (
                                <div className="topics-item-container" key={latest.id}>
                                    <div className="topics-item-imgcontainer">
                                        <img src={latest.img} alt={latest.title} className="topics-item-img"/>
                                    </div>
                                    <a href="#" className="topics-item-link">{latest.title}</a>
                                </div>
                            );
                        }) 
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Topics