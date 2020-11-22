import React, { useState, useContext } from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import axios from 'axios';
import styled from 'styled-components';
import DateTimePicker from 'react-datetime-picker';
import { TextArea, Button, Label, Input } from '../common';
import { AuthContext } from '../../contexts/AuthContext';
import { api } from '../../config/api';
import Menu from '../Feed/Menu';

function NewChallenge(props) {
	const [datetime, setDatetime] = useState(new Date());
	const [question, setQuestion] = useState('');
	const [taggedUser, setTaggedUser] = useState([]);
	const [tagName, setTagName] = useState('');
	const { authData } = useContext(AuthContext);

	const createChallenge = async () => {
		try {
			console.log(datetime.toISOString());
			const response = await axios.post(api.createChallenge, {
				author_id: authData.id,
				question,
				expires_on: datetime.toISOString(),
				tags: taggedUser,
			});
			console.log(response.data);
			alert('Challenge created');
		} catch (e) {
			alert('Error occured');
			console.log(e);
		}
	};

	const addTag = () => {
		setTaggedUser([...taggedUser, tagName]);
		setTagName('');
	};

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
				<Col md={6}>
					<TextArea
						style={{ margin: '20px 0' }}
						placeholder='Write your question here...'
						value={question}
						onChange={(e) => setQuestion(e.target.value)}
					/>
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<DateTimePicker
							onChange={setDatetime}
							value={datetime}
						/>
						<Controls>
							<Label htmlFor='tags'>Tags</Label>
							<Input
								name='tags'
								placeholder='Write username'
								value={tagName}
								onChange={(e) => setTagName(e.target.value)}
							/>
							<Button
								style={{
									width: 'auto',
									fontSize: '0.9em',
								}}
								onClick={addTag}
							>
								Add
							</Button>
						</Controls>
						{taggedUser.map((user) => (
							<div key={user}>{user}</div>
						))}
						<Button
							style={{
								margin: '10px 0',
								width: 'auto',
								fontSize: '0.9em',
							}}
							onClick={createChallenge}
						>
							Create
						</Button>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

const Controls = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	margin: 15px 0;
`;

export default NewChallenge;
