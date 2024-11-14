import { IconData } from "../data";

const IconSelection = () => {
  return (
    <section>
        <div className="icon-section">
            {IconData.map((item) => {
            const { id, title, img } = item;
            return (
              <div key={id} className="icon-card">
                <img src={img} alt={title} className="icon-img" />
                <h3 className="icon-title">{title}</h3>
              </div>
            );
          })}   
        </div>
    </section>
  )
}

export default IconSelection