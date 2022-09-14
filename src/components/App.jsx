import "../components/App.css"
import Profile from "./Profile/Profile";
import user from "../data/user.json";
import Statistics from "./Statistics/Statistics";
import FriendListItem from "./FriendListItem/FriendListItem";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../data/transactions.json"
import data from "../data/data.json"
import friends from "../data/friends.json"


export const App = () => {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data}/>
      <FriendList>
        <FriendListItem friends={friends} />
      </FriendList>
      <TransactionHistory items={transactions}/>
      
     
    </div>
  );
};
