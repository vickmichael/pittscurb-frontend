import React from 'react';
import styled from 'styled-components';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { mdiChevronLeft } from '@mdi/js';
import { Icon } from '@mdi/react';

import { Logo } from '../../common/components';

const NavContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #ffffff;
  width: 100%;
  height: 4rem;
  box-shadow: 0rem .25rem 1rem rgba(0,0,0,0.25);
  padding: 1rem 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const BreadCrumbs = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;
  white-space: nowrap;
  text-transform: capitalize;
`;

const NavLogo = styled(Logo)`
  height: 2rem;
  flex: 0 0 auto;
`;

const Chevron = styled(Icon)`
  margin: 0rem 1rem;
`;

export default ({ children }) => {
  const history = useHistory();

  const newProjectMatch = useRouteMatch('/manage/new-project');
  const projectMatch    = useRouteMatch('/manage/:project');
  const newRegionMatch  = useRouteMatch('/manage/:project/new-region');
  const regionEditMatch = useRouteMatch('/manage/:project/:region');

  const urlParams = {
    ...(newProjectMatch ? newProjectMatch.params : {}),
    ...(projectMatch    ? projectMatch.params    : {}),
    ...(newRegionMatch  ? newRegionMatch.params  : {}),
    ...(regionEditMatch ? regionEditMatch.params : {}),
    ...(newProjectMatch ? { url: newProjectMatch.url } : {}),
    ...(projectMatch    ? { url: projectMatch.url }    : {}),
    ...(newRegionMatch  ? { url: newRegionMatch.url }  : {}),
    ...(regionEditMatch ? { url: regionEditMatch.url } : {}),
  };

  // TODO: Pull project/region name from redux instead of using the raw url

  return (
    <NavContainer>
      <BreadCrumbs>
        <NavLogo onClick={() => history.push('/manage/')} />
        {Object.prototype.hasOwnProperty.call(urlParams, 'project') && (
          <>
            <Chevron size="1.5rem" path={mdiChevronLeft} />
            {Object.prototype.hasOwnProperty.call(urlParams, 'region') ? (
              <Link to={`/manage/${urlParams.project}/`}>
                {urlParams.project.replace(/-/g, ' ')}
              </Link>
            ) : urlParams.project.replace(/-/g, ' ')}
          </>
        )}
        {Object.prototype.hasOwnProperty.call(urlParams, 'region') && (
          <>
            <Chevron size="1.5rem" path={mdiChevronLeft} />
            {urlParams.region.replace(/-/g, ' ')}
          </>
        )}
      </BreadCrumbs>
      <div>
        {children}
      </div>
      <div>
        {/* User logout/profile menu */}
      </div>
    </NavContainer>
  );
};
