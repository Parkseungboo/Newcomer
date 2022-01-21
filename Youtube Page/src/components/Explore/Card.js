import styles from "./Card.module.css";

function Card({ value }) {
  return (
    <a target="_blank" href={`https://youtube.com/watch?v=${value.id}`}>
      <div className={styles.card}>
        <img
          className={styles.thumbnail}
          src={value.thumbnail}
          alt={`${value.title}의 썸네일`}
        />
        <div className={styles.info}>
          <div className={styles.title}>{value.title}</div>
          <div className={styles.meta}>
            <a
              href={`https://www.youtube.com/channel/${value.channelId}`}
              className={styles.uploader}
            >
              {value.channelTitle}
            </a>
            <div className={styles.view}>{value.viewCount}</div>
            <div className={styles.time}>{value.date}</div>
          </div>
          <div className={styles.desc}>{value.description}</div>
        </div>
      </div>
    </a>
  );
}

export default Card;
