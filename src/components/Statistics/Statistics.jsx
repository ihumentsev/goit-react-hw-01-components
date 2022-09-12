import data from "../../data.json"

export default function Statistics() {
    return (
        <ul className="stat-list">
            {data.map((item) => {
                return (
                    <li className="item" key={item.id}>
                        <span className="label">{item.label}</span>
                        <span className="percentage">{item.percentage}%</span>
                    </li>
                );
            })}
            
        </ul>
    );
}