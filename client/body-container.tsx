import styles from './body-container.module.scss';

const BodyContainer: React.FC = (props) => <div className={styles.container}>{props.children}</div>;

export default BodyContainer;
