import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

const StyledHeader = styled.header`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
`;
const StyledButton = styled(Button)`
	padding: 3%, %5, 3%, 5%;
`;
const CenteredDiv = styled.div`
	text-align: center;
`;

function App() {
	return (
		<CenteredDiv className='App'>
			<StyledHeader className='App-header'>
				<ButtonToolbar className='custom-btn-toolbar'>
					<LinkContainer to='/componentsView'>
						<StyledButton>View Components</StyledButton>
					</LinkContainer>
				</ButtonToolbar>
			</StyledHeader>
		</CenteredDiv>
	);
}

export default App;
