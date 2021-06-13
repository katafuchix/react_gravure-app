import React from 'react';
//import styled from 'styled-components';
//import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
/*
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
*/

export default class About extends React.Component {
//function About() {
  /*
  return   <GridWrapper>
      <h2>About</h2>
      <p>State at ceiling lay on arms while you're using the keyboard so this human feeds me.</p>
      <p>I am a kitty cat, sup, feed me, no cares in the world</p>
      <p>Meow meow, I tell my human purr for no reason but to chase after</p>
    </GridWrapper>;
  */
  render() {
    return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="4">.col-4</MDBCol>
        <MDBCol size="4">.col-4</MDBCol>
        <MDBCol size="4">.col-4</MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol sm="4">.col-sm-4</MDBCol>
        <MDBCol sm="4">.col-sm-4</MDBCol>
        <MDBCol sm="4">.col-sm-4</MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="4">.col-md-4</MDBCol>
        <MDBCol md="4">.col-md-4</MDBCol>
        <MDBCol md="4">.col-md-4</MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol lg="4">.col-lg-4</MDBCol>
        <MDBCol lg="4">.col-lg-4</MDBCol>
        <MDBCol lg="4">.col-lg-4</MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol xl="4">.col-xl-4</MDBCol>
        <MDBCol xl="4">.col-xl-4</MDBCol>
        <MDBCol xl="4">.col-xl-4</MDBCol>
      </MDBRow>
    </MDBContainer>
    )
  }
}
//export default About;
