import React from 'react';
import * as styles from './SpotSearchCardStyles';

import clockSvg from '../../common/svgs/clock.svg';

const testSubmit = () => {
  console.log('Spot search submit button clicked');
}

const SpotSearchCard = () => {
  return (
    <styles.Wrapper>
      <div className="top-section">
        <h4>
          Where do you need to pick something up?
        </h4>

        <form onSubmit={testSubmit}>
          <input
            type="text"
            placeholder="Search a business, address, or intersection"
          />

          <div className="dropdown-wrapper">
            <img src={clockSvg} alt="" />

            <select name="" id="">
              <option value="asap">
                As soon as possible
              </option>
            </select>
          </div>

          <button type="submit">
            Find a spot
          </button>
        </form>
      </div>


      <styles.ExampleWrapper>
        <div className="example-header">
          Examples
        </div>

        <div className="example-item">
          <span>Restaurant</span> - "Mad Mex, Round Corner"
        </div>

        <div className="example-item">
          <span>Retail</span> - "Brambler Boutique"
        </div>

        <div className="example-item">
          <span>Address</span> - "502 E. Ohio St., Pittsburgh"
        </div>
      </styles.ExampleWrapper>
    </styles.Wrapper>
  );
}

export default SpotSearchCard;