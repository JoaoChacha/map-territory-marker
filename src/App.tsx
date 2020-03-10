import React, { FC, FormEvent, useState } from 'react';
import GoogleMap from 'google-map-react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import './index.css';

const App = styled.section`
  width: 100%;
  height: 100%;
`;

const TerritoryWrapper = styled.div`
display: flex;
height: 100%;
`

const TerritoryForm = styled.form`
display: flex;
flex-direction: column;
width: 20rem;
`

const LockMap = styled(Button)``

const MapWrapper = styled.div`
width: 100%;
height: 100%;
`
const Reapp: FC = () => {
  const [mapBlocked, setMapBlocked] = useState(false)
  return (
    <App>
      <TerritoryWrapper>
        <MapWrapper>
          <GoogleMap
            center={{
              lat: 32.7607,
              lng: -16.9595
            }}
            zoom={11}
            draggable={!mapBlocked}>
          </GoogleMap>
        </MapWrapper>
        <TerritoryForm onSubmit={(e: FormEvent) => {
          e.preventDefault();
          console.log('some test');
        }}>
          <LockMap onClick={() => setMapBlocked(!mapBlocked)}>{mapBlocked ? 'Unlock map' : 'Lock map'}</LockMap>
          <Input type="text" name="territoryName" />
          <Input type="number" name="territoryNumber" />
          <Button type="submit">Submit territory</Button>
        </TerritoryForm>
      </TerritoryWrapper>
    </App>
  );
}

export default Reapp;
