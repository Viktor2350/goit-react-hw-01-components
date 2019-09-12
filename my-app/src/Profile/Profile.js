import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src="https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg"
          alt="user avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{user.name}</p>
        <p className={styles.tag}>{user.tag}</p>
        <p className={styles.location}>{user.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.markup}>
          <span className={styles.label}>Followers </span>
          <span className={styles.quentity}>{user.stats.followers}</span>
        </li>
        <li className={styles.markup}>
          <span className={styles.label}>Views </span>
          <span className={styles.quentity}>{user.stats.views}</span>
        </li>
        <li className={styles.markup}>
          <span className={styles.label}>Likes </span>
          <span className={styles.quentity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Profile;
