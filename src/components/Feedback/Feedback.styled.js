import styled from 'styled-components';

export const Wrapper = styled.section`
  display: inline-flex;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const Btn = styled.button`
  position: relative;
  background: #ec5990;
  color: ${p => p.theme.colors.white};
  text-transform: uppercase;
  border: ${p => p.theme.borders.none};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  letter-spacing: 2px;
  display: block;
  appearance: none;
  border-radius: ${p => p.theme.radii.normal};
  width: 100%;
  font-weight: ${p => p.theme.fontWeights.normal};
  letter-spacing: 0.5rem;
  transition: 0.3s all;
  cursor: pointer;

  :hover {
    background: #bf1650;
    color: ${p => p.theme.colors.white};
  }

  :active {
    transition: 0.3s all;
    top: 2px;
  }
`;

export const Title = styled.h1`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xl};
`;
