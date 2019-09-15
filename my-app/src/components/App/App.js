import React from 'react';
import transactions from '../../JSON/transaction.json';
import PricingPlan from '../PricingPlan/PricingPlan';
import Profile from '../Profile/Profile';
import pricingPlanItems from '../../JSON/pricing-plan.json';
import Stats from '../Stats/Stats';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { user, stats } from './data';

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <PricingPlan items={pricingPlanItems} />
      <Stats title="Upload stats" stats={stats} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
