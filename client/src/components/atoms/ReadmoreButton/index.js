import React from 'react';

import './style.scss';

const ReadMoreButton  = (props) => (
        <>
                <button type="button" className="readmore__button">
                        {props.title}
                </button>
        </>
);

export default ReadMoreButton;