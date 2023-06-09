import { FriendList } from './FriendList/Friendlist';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './HistoryTransactions/TransactionHistory';
import transactions from './HistoryTransactions/transactions.json';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistic/Statistics';
import data from './Statistic/data.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        color: '#010101',
      }}
    >
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
