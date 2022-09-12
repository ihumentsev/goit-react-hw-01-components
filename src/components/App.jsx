import Profile from "./Profile/Profile";
import user from "../user.json";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import FriendListItem from "./FriendListItem/FriendListItem";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../transactions.json"
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Section title="Upload stats">
        <Statistics/>
      </Section>
      <FriendList>
        <FriendListItem/>
      </FriendList>
      <TransactionHistory items={transactions}/>
      
     
    </div>
  );
};
