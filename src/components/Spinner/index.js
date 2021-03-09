import React from "react";
import styled, { keyframes } from "styled-components";

const Circle = styled.circle`
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const ProgressNumber = styled.span`
  font-size: 32px;
  position: absolute;
`;

const RotateKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: flex;
  animation: ${RotateKeyframes} 1s cubic-bezier(0.17, 0.67, 0.83, 0.67) infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const SpinnerContainer = styled.div`
  align-items: center;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  padding: 0;
`;

function Spinner(props) {
  const color = props.color || "#409fff";
  const progress = props.progress || 0;
  const radius = props.radius || 100;
  const stroke = props.stroke || 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <SpinnerContainer role="spinner">
      <Rotate>
        <svg height={radius * 2} width={radius * 2}>
          <Circle
            stroke={color}
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset }}
            stroke-width={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
      </Rotate>
      <ProgressNumber>{progress}%</ProgressNumber>
    </SpinnerContainer>
  );
}

export default Spinner;
