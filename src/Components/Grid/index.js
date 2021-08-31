import React from 'react';

//styles
import { Wrapper, Content } from './Grid.styles';

// here children is a default prop in react
const Grid = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);

export default Grid;