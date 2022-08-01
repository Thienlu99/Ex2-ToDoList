import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
    
};

function Button(props) {
    const { buttonClass, title, style,onClick,type } = props;
    return (
        <div className={`buttonClass ${buttonClass}`} style={style} onClick={onClick} type={type}>
            {title}
        </div>
    );
}

export default Button;