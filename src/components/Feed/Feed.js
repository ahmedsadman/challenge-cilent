import React from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import Tweets from './Challenges';
import Menu from './Menu';
import FollowCard from './FollowCard/FollowCard';

function Feed(props) {
	return (
		<Container fluid>
			<Row>
				<Hidden xs>
					<Col xs={1}></Col>
				</Hidden>
				<Col md={6}>
					<Menu />
				</Col>
			</Row>
			<Row>
				<Hidden xs>
					<Col xs={1}></Col>
				</Hidden>
				<Col md={6}>
					{/* Render the Tweets feed here */}
					<Tweets history={props.history} />
				</Col>
				<Col md={4}>
					{/* Render the Tweets feed here */}
					<FollowCard />
				</Col>
				<Hidden xs>
					<Col xs={1}></Col>
				</Hidden>
			</Row>
		</Container>
	);
}

export default Feed;
