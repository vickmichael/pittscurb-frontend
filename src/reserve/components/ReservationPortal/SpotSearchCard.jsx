import React from 'react';
import {
  ExampleHeader,
  ExampleWrapper,
  SubmitButton,
  Wrapper,
} from './SpotSearchCardStyles';

import { Link, useRouteMatch } from 'react-router-dom';

import Autocomplete from './Autocomplete';
import TimeSelect from './TimeSelect';

const testSubmit = () => {
  console.log('Spot search submit button clicked');
};

const SpotSearchCard = () => {
  const match = useRouteMatch();

  return (
    <Wrapper>
      <div className="top-section">
        <h2>
          Pitts
          <span>Curb</span>
        </h2>

        <h4>
          What business are you picking up from?
        </h4>

        <form onSubmit={testSubmit}>

          <Autocomplete />
          <TimeSelect />

          <Link to={`${match.url}search`}>
            <SubmitButton type="submit">
              Find a spot
            </SubmitButton>
          </Link>
        </form>
      </div>


      <ExampleWrapper>
        <ExampleHeader className="example-header">
          Examples
        </ExampleHeader>

        <div className="example-item">
          <span>Restaurant</span> - "Mad Mex, Round Corner"
        </div>

        <div className="example-item">
          <span>Retail</span> - "Brambler Boutique"
        </div>

        <div className="example-item">
          <span>Address</span> - "502 E. Ohio St., Pittsburgh"
        </div>
      </ExampleWrapper>
    </Wrapper>
  );
};

export default SpotSearchCard;
