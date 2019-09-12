import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingPlan.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => {
  return (
    <div className="pricing-item">
      <i className={styles.icon} style={{ content: `url(${icon})` }} />
      <h2 className={styles.label}>{label}</h2>
      <p className={styles.capacity}>{capacity}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}/MO</p>
      <button className={styles.button} type="button">
        Get Started
      </button>
    </div>
  );
};

PricingItem.defaultProps = {
  icon: 'links to picture',
  description: 'text about plan',
};

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
};

export default PricingItem;
