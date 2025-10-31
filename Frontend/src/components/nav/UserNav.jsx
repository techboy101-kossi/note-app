import { NavLink } from 'react-router-dom';
import * as Styles from './UserNavStyles';
import { userNavs } from './userNavData';

const UserNav = () => {
	return (
		<Styles.UserNavContainer>
			<Styles.UserNavWrapper>
				{userNavs.map((userNav) => (
					<Styles.UserNavLink key={userNav.name}>
						<NavLink to={userNav.path}>
							<img src={userNav.icon} />
							<p>{userNav.name}</p>
							{userNav.numOfItems > 0 && <div>{userNav.numOfItems}</div>}
						</NavLink>
					</Styles.UserNavLink>
				))}
			</Styles.UserNavWrapper>
		</Styles.UserNavContainer>
	);
};

export default UserNav;
