import styled from 'styled-components';

const H2Styled = styled.h2`
    font-weight: bold;
    font-size: 36px;
    line-height: 45px;
    margin: 24px 0;
`;

export const H2 = ({ text }) => (
	<H2Styled>{ text }</H2Styled>
);
