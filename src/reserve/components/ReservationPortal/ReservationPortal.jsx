import React from 'react';
import {
  Feedback,
  Overlay,
  SalesPoints,
  SearchSection,
  Wrapper,
} from './styles';

import SpotSearchCard from './SpotSearchCard';

import burgerAndSoda from '../../../common/svgs/burger_and_soda.svg';
import arrow from '../../../common/svgs/arrow.svg';
import hamburger from '../../../common/svgs/hamburger.svg';
import cellphoneOuter from '../../../common/svgs/cellphone_outer.svg';

export default () => (
  <Wrapper>
    <Overlay>
      <h2>
        Find & reserve open parking spots
      </h2>

      <h4>
        The up-to-date parking map for picking up anything from food to dry cleaning.
      </h4>
    </Overlay>

    <SearchSection>
      <SpotSearchCard />

      <div className="icon-container">
        <img src={arrow} alt="" />

        <div>
          Closest spot to me
        </div>
      </div>

      <div className="icon-container">
        <img src={burgerAndSoda} alt="" />

        <div>
          Local specials
        </div>
      </div>
    </SearchSection>

    <SalesPoints>
      <h2>
        The easiest way to search and save parking spaces, updated in real time.
      </h2>

      <div className="sales-points-list">
        <div className="sales-point-item">
          <img src={hamburger} alt="" />

          <div>
            Search your destination, or find one near you
          </div>
        </div>

        <div className="sales-point-item">
          <img src={hamburger} alt="" />

          <div>
            We’ll auto-find the best available spot
          </div>
        </div>

        <div className="sales-point-item">
          <img src={cellphoneOuter} alt="" />

          <div>
            Reserve in one quick step, and we’ll text you any updates
          </div>
        </div>
      </div>
    </SalesPoints>

    <Feedback>
      <div className="feedback-content">
        <div>
          Questions? Feedback?
        </div>

        <div className="feedback-email">
          <a href="mailto:help@getaspot.io">
            Email us at help@getaspot.io
          </a>
        </div>
      </div>
    </Feedback>
  </Wrapper>
);
