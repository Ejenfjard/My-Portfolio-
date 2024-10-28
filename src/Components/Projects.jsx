/** @format */

import React from "react";
import { PROJECTS } from "../constants";
import SliderComp from "./Slider";
import { Zoom } from "react-awesome-reveal";
import styled from "styled-components";

function Projects() {
  return (
    <Container id="project">
      <Zoom>
        <h1>
          Några av mina <span className="green">Projekt</span>
        </h1>
      </Zoom>
      <Slide>
        <SliderComp projects={PROJECTS} />
      </Slide>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  h1 {
    font-size: 1.9rem;
    margin: 2rem;
  }
`;

const Slide = styled.div``;
