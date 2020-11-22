import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/AuthContext';

function Menu() {
	const { authData } = useContext(AuthContext);
	return (
		<Container>
			<Item>
				<Link to='/feed'>{`Welcome ${authData.username}`}</Link>
			</Item>
			<Item>
				<Link to='/feed'>Feed</Link>
			</Item>
			<Item>
				<Link to='/challenge'>Create Challenge</Link>
			</Item>
			<Item>
				<Link to='/logout'>Logout</Link>
			</Item>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	margin: 20px 0;
`;

const Item = styled.div`
	margin-right: 20px;
`;

export default Menu;
