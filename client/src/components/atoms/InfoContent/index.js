import React from 'react';

import './style.scss';

const InfoContent = (props) => (
        <>
                <h1>{props.title}</h1>
                <h5>{props.subtitle}</h5>
        </>
);

export default InfoContent;