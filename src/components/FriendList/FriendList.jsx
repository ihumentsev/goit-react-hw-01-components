import css from '../FriendList/FriendList.module.css'
import PropTypes from 'prop-types';

export default function FriendList({ children }) {
    return (
        <ul className={css.list}>
            {children}
</ul>
    );
}

FriendList.propTypes = {
   children: PropTypes.object, 
}
