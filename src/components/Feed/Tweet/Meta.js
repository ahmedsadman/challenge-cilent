import React from 'react';
import styled from 'styled-components';

function Meta(props) {
	const { authorName } = props;
	return (
		<MetaContainer>
			<ProfileImage
				src={`https://i.pravatar.cc/50?u=${authorName}`}
				alt='profile_image'
			/>
			<AuthorInfo>
				<div style={{ fontWeight: 500 }}>{authorName}</div>
				<div style={{ fontSize: '0.9em' }}>21st Jun, 2020</div>
			</AuthorInfo>
		</MetaContainer>
	);
}

const MetaContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const AuthorInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

const ProfileImage = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 25px;
	margin-right: 10px;
`;

export default Meta;
