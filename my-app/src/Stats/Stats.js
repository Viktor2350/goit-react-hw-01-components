/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Stats.module.css';

const Stats = ({ title, stats }) => {
  return (
    <section className={styles.statsSection}>
      {title ? (
        <section className={styles.statsSection}>
          <h2 className={styles.title}>{title}</h2>
          <ul className={styles.statList}>
            {stats.map(stat => (
              <li key={stat.id} className={styles.item}>
                <span className={styles.label}>{stat.label} </span>
                <span className={styles.percentage}>{stat.percentage}%</span>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <ul className={styles.statList}>
          {stats.map(stat => (
            <li key={stat.id} className={styles.item}>
              <span className={styles.label}>{stat.label} </span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Stats;
