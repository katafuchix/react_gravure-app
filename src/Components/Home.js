import React from 'react';
import { Button, Col, Form, Jumbotron, Row } from 'react-bootstrap';
import styled from 'styled-components';
import AppDataStore from '../stores/AppDataStore';
import * as common from './common/BaseComponent';
import { withRouter } from 'react-router-dom';
import About from './About'

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

interface IProps extends common.IProps {
}

interface IState extends common.IState {
}

class Home extends common.BaseComponent<IProps, IState> {
//export default class Home extends React.Component {

  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
        <About />
        </Col>
      </Row>
    );
  }
/*
  render() {
    return (   <GridWrapper>
        <h2>Home</h2>
        <p>State at ceiling lay on arms while you're using the keyboard so this human feeds me.<a href="about-us">about</a></p>
        <p>I am a kitty cat, sup, feed me, no cares in the world</p>
        <p>Meow meow, I tell my human purr for no reason but to chase after</p>
              <a href="about-us">about</a>

      </GridWrapper> )
*/
/*      return (
        <div class="container">
          <div class="row">
            <div class="col-sm">
              One of three columns
            </div>
            <div class="col-sm">
              One of three columns
            </div>
            <div class="col-sm">
              One of three columns
            </div>
          </div>
        </div>
      )*/
//  }
}
//export default Home;

export default AppDataStore.withStores(Home);

//export default withRouter(AppDataStore.withStores(Home));
