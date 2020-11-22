import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/AuthContext';
import { Label, Input, Button, Card } from '../common';

function Form() {
	const { dispatch } = useContext(AuthContext);
	const [actionLabel, setActionLabel] = useState('Login');
	const [email, setEmail] = useState('');
	const [displayName, setDisplayName] = useState('');
	const [password, setPassword] = useState('');
	const [isLogin, setIsLogin] = useState(true);

	const toggleLogin = () => {
		setIsLogin(!isLogin);
		setActionLabel(!isLogin ? 'Login' : 'Register');
	};

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: 'USER_LOGIN', token: null });
		console.log('DONE');
	};

	return (
		<form onSubmit={onSubmit}>
			<Card padding='20px' width='300px'>
				<Header>{actionLabel}</Header>
				{!isLogin ? (
					<Controls>
						<Label htmlFor='displayName'>Display Name</Label>
						<Input
							type='text'
							value={displayName}
							onChange={(e) => setDisplayName(e.target.value)}
							name='displayName'
						/>
					</Controls>
				) : null}

				<Controls>
					<Label htmlFor='email'>Email</Label>
					<Input
						type='email'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Controls>
				<Controls>
					<Label htmlFor='password'>Password</Label>
					<Input
						type='password'
						name='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Controls>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<Button type='submit'>{actionLabel}</Button>
					<AltAction onClick={toggleLogin}>
						{isLogin
							? 'Not registered? Click here to register'
							: 'Already a member, click to Login'}
					</AltAction>
				</div>
			</Card>
		</form>
	);
}

const Header = styled.h1`
	margin: 0;
	padding: 0;
	font-weight: 500;
	margin-bottom: 50px;
	font-size: 2em;
	text-align: center;
`;

const AltAction = styled.div`
	text-align: center;
	margin-top: 15px;
	cursor: pointer;
	font-size: 0.8em;
`;

const Controls = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	margin: 15px 0;
`;

export default Form;
