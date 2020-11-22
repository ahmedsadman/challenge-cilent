import React from 'react';
import styled from 'styled-components';
import { Button } from '../../common';

// Each user item in follow card

function RowItem(props) {
	const { name } = props;
	return (
		<Container>
			<UserInfo>
				<ProfileImage src={`https://i.pravatar.cc/50?u=${name}`} />
				<div style={{ fontSize: '0.9em' }}>{name}</div>
			</UserInfo>
			<Button style={{ minWidth: '50px', fontSize: '0.8em' }}>
				Follow
			</Button>
		</Container>
	);
}

const Container = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ddd;
	margin: 0 5px;

	&:last-child {
		border-bottom: none;
	}
`;

const ProfileImage = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 15px;
	margin-right: 10px;
`;

const UserInfo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export default RowItem;
