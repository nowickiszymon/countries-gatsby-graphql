import React from 'react';

import './style.scss';

export const PrimaryButton = (props) => (
        <>
             <button type="button" className="primary__button">
                        {props.title}
                </button>
        </>
);

export default PrimaryButton;