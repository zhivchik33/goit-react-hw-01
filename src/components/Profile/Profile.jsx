import style from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={style.userProfile}>
      <div className={style.userCard}>
        <img src={image} alt={tag} />
        <p className={style.info}>{name}</p>
        <p className={style.info}>@{tag}</p>
        <p className={style.info}>{location}</p>
      </div>

      <ul className={style.list}>
        <li className={style.item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={style.item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={style.item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
