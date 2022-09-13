import css from '../FriendList/FriendList.module.css'


export default function FriendList({ children}) {
    return (
        <ul className={css.list}>
            {children}
</ul>
    );
}