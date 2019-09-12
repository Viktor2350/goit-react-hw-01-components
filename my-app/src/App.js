import React from 'react';
import transactions from './path/to/transaction.json';
import PricingPlan from './PricingPlan/PricingPlan';
import Profile from './Profile/Profile';
import pricingPlanItems from './path/to/pricing-plan.json';
import Stats from './Stats/Stats';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

const App = () => {
  return (
    <div>
      <Profile user={user} />
      <PricingPlan items={pricingPlanItems} />
      <Stats title="Upload stats" stats={stats} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
