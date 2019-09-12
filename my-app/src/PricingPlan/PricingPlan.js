/* eslint-disable react/prop-types */
import React from 'react';
import PricingItem from './PricingItem';
import styles from './PricingPlan.module.css';

const PricingPlan = ({ items }) => {
  return (
    <ul className={styles.pricingPlan}>
      {items.map(item => (
        <li key={item.id} className={styles.item}>
          <PricingItem
            item={items}
            label={item.label}
            icon={item.icon}
            capacity={item.capacity}
            price={item.price}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  );
};

export default PricingPlan;
