
import css from "../FriendListItem/FriendListItem.module.css"
import PropTypes from 'prop-types';

export default function FriendListItem({friends}) {
    return (
        friends.map(({id, isOnline,  avatar, name}) => {
            return (
                <li className={css.item} key={id}>
                    <span className={css.status}>{ isOnline?"🟢": "🔴"}</span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>
            );
        })

    );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
    
  })
  )
}