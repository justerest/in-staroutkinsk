import styles from './header.module.scss';

const Header: React.FC = (props) => (
  <header>
    <h1>
      В Староуткинске
      <br />
      <span className={styles.subtitle}>{props.children}</span>
    </h1>
  </header>
);

export default Header;
