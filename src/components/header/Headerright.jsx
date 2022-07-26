import React from 'react';
import PropTypes from 'prop-types';

Headerright.propTypes = {
    
};

function Headerright(props) {
    return (
                <div className="col-md-8">
        <div className='headerright-seach'>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Tye Something to search"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
            >
              Seach
            </button>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Headerright;