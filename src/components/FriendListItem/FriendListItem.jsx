import friends from "../../friends.json"
import "../FriendListItem/FriendListItem.css"
export default function FriendListItem() {
    return (
        friends.map((friend) => {
            return (
                <li className="item" key={friend.id}>
                    <span className="status"></span>
                    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p className="name">{friend.name}</p>
                </li>
            );
        })

    );
}