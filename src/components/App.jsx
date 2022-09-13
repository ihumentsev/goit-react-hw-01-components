import "../components/App.css"
import Profile from "./Profile/Profile";
import user from "../components/data/user.json";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import FriendListItem from "./FriendListItem/FriendListItem";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../components/data/transactions.json"
import data from "../components/data/data.json"
import friends from "../components/data/friends.json"

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
      <Section title="Upload stats">
        <Statistics data={data}/>
      </Section>
      <FriendList>
        <FriendListItem friends={friends} />
      </FriendList>
      <TransactionHistory items={transactions}/>
      
     
    </div>
  );
};
