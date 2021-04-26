import React, { memo } from "react";
import styled from "styled-components";

const Loader = memo(function Loader() {
  return <LoaderContainer>Loading...</LoaderContainer>;
});

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex: 1;
  font-size: 24px;
  justify-content: center;
  align-items: center;
`;

export default Loader;
