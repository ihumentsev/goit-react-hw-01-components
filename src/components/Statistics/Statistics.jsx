
import css from "../Statistics/Statistics.module.css"
import PropTypes from 'prop-types';

export default function Statistics({data}) {
    return (
        <ul className={css.list}>
            {data.map(({id, label, percentage}) => {
                return (
                    <li className={css.item} key={id}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>
                );
            })}
            
        </ul>
    );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    
  })
  )
}