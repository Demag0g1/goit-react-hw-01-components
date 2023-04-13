import { ProfileCard } from './ProfileCard';

export const Profile = ({ items }) => {
  return (items = (
    <ul>
      {item => (
        <li>
          <ProfileCard item={item} />
        </li>
      )}
    </ul>
  ));
};
