import styled from 'styled-components';

const FlexDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const FlexDivCol = FlexDiv.extend`
	flex-direction: column;
`;

export { FlexDiv, FlexDivCol, };