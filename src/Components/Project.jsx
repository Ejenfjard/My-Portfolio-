/** @format */

/** @format */

import React from "react";
import styled from "styled-components";

const Project = ({ item }) => {
  const { title, description, image, technologies, video } = item;
  return (
    <Container className="project">
      <div className="media-div">
        {video ? (
          <video className="responsive-video" autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Din webbläsare stödjer inte videouppspelning.
          </video>
        ) : (
          <img src={image} alt="project" />
        )}
      </div>
      <div className="disc">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="tech">
          {technologies.map((tech, index) => (
            <TechSpan key={index}>{tech}</TechSpan>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: auto;
  height: 700px;
  margin: 0 0.5rem;
  padding: 1ch;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    to top,
    rgba(117, 111, 123, 0.1),
    rgba(170, 151, 186, 0.8)
  );

  .media-div {
    display: flex;
    justify-content: center;
    width: 100%; /* Fyller hela förälderns bredd */
    overflow: hidden; /* Döljer överskjutande innehåll */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .responsive-video {
    width: 100%; /* Gör videon 100% av förälderns bredd */
    height: auto; /* Bevarar aspektsförhållandet */
    object-fit: cover; /* Fyller behållaren */
  }

  .disc {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    right: 0;
    left: 0;
    height: min-content;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;

    transition: all 400ms ease-in-out;

    h1 {
      font-size: 1rem;
      margin: 0;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
    }

    p {
      width: 100%;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; // Gör höjden automatisk för mindre skärmar

    .media-div {
      width: 100%; /* Säkerställ att behållaren är 100% på mobila enheter */
    }

    .disc {
      padding: 1rem; // Mer padding för läsbarhet
    }

    h1 {
      font-size: 1.2rem; // Större text på mobila enheter
    }

    p {
      font-size: 0.9rem; // Lite större text för bättre läsbarhet
    }

    img {
      object-fit: cover; // Gör så att bilden fyller behållaren bättre
    }

    .tech {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

const TechSpan = styled.span`
  margin: 0.2rem;
  border-radius: 0.25rem;
  background-color: #e5e5e5;
  padding: 0.25rem 0.5rem;
  font-size: 10px;

  color: #6b21a8;
`;
