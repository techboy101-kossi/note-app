import styled from 'styled-components';

export const UserNavContainer = styled.nav`
	width: 100%;
	height: 50px;
	background-color: var(--color-primary);
	background-color: #cddbdb70;
	padding: 0 20px;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
`;

export const UserNavWrapper = styled.ul`
	width: 100%;
	height: 100%;
	display: flex;
  align-items: center;
	gap: 50px;
`;

export const UserNavLink = styled.li`
	height: 100%;
	a {
		display: flex;
		align-items: center;
		gap: 10px;
		color: var(--color-secondary);
		height: 100%;
		border-bottom: 3px solid var(--color-secondary);

		svg,
		img {
			color: var(--color-secondary);
		}

		div {
			width: 30px;
			height: 30px;
			background-color: var(--bgColorIcon);
			border-radius: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;

export const UserNavNumOfItemsBox = styled.div`

`
