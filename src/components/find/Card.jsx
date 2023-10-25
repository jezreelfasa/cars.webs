import styles from './Find.module.css';

// eslint-disable-next-line react/prop-types
function Card ({image,make}) {
  return (
    <div className={styles.card}>
      <img src={image} alt='/' />
      <p>{make}</p>
    </div>
  );
}

export default Card;
