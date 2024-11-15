import { PillsData } from "../data";

const Pills = () => {
  return (
    <div className="pills">
        <p className="pills-container">
            {PillsData.map((item) => {
                    return (
                        <a href={`#${item.title}`} key={item.id} className="pills-link">
                            {item.title}
                        </a>
                    )
                }
            )}
            <a href="#home" className="pills-link">Home</a>
        </p>
    </div>
  )
}

export default Pills