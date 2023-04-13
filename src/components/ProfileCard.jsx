import PropTypes from 'prop-types';

export const ProfileCard = ({
  item: { username, avatar, tag, location, stats, followers, views, likes },
}) => {
  return (
    <div>
      <img src={avatar} alt={username} width="40" />
      <h2>{username}</h2>
      <p>{tag}</p>
      <p>{location}</p>
      <ul>
        {stats}
        <li>
          <span>Followers</span>
          <h3>{followers}</h3>
        </li>
        <li>
          <span>Views</span>
          <h3>{views}</h3>
        </li>
        <li>
          <span>Likes</span>
          <h3>{likes}</h3>
        </li>
      </ul>
    </div>
  );
};

ProfileCard.propTypes = {
  item: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
