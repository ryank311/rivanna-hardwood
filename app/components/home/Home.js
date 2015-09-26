import React from 'react';
import styles from './Home.scss';

export default class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
            <div className={styles['home-logo-container']}>
                <div className={styles['home-logo']}>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
