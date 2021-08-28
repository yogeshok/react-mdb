import React from 'react';

//styles
import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = ({ image, title, text }) => (
    <Wrapper image={image}>
        <content>
            <text>
                <h1>{title}</h1>
                <p>{text}</p>
            </text>
        </content>
    </Wrapper>

);

export default HeroImage;