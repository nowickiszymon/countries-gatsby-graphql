import React, { Children } from 'react';

const style = {
        width: '100%',
        height: 'auto',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'flex-end'
}

const EndRow = ({children}) => {
        return (
                <div className="centerrow" style={style}>
                        {children}
                </div>
        );
};

export default EndRow;