import React from 'react';

import styles from './Contact.scss';

export default class Contact extends React.Component {
  render() {
    return (
      <div className={styles.about}>
        <h1 className={styles.about__header}>About Ninja Ocean</h1>
        <p className={styles.about__description}>Ninja Ocean is comprised of a team of passionate developers, hackers & scientists, aimed to do good.</p>
      </div>
    );
  }
}