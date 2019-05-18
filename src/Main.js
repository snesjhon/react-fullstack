import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: 50vh 1fr;
`;

class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch("/api")
      .then(res => res.json())
      .then(users => console.log(users));
  }
  render() {
    return <Container>testing</Container>;
  }
}

export default Main;
