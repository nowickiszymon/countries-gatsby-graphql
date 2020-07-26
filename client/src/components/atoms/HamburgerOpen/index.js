import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const style = {
        width: 'auto',
        height: 'auto',
        border: 'none',
        backgroundColor : 'black',
        marginLeft : '20%',
        marginTop  : '5%'
}


export const HamburgerOpen = (props) => (
        <>
                <button type="button" style={style} onClick={props.click}>
                        <FontAwesomeIcon icon={faBars} size='1x' color='#dadada' />                
                </button>
        </>
);