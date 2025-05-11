import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.background};
    color: ${theme.colors.foreground};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button, input, select, textarea {
    font-family: inherit;
  }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${theme.spacing.lg};
`;

export const Header = styled.header`
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
`;

export const Title = styled.h1`
  color: ${theme.colors.tertiary};
  margin-bottom: ${theme.spacing.sm};
  font-size: ${theme.fontSizes["3xl"]};
`;

export const Subtitle = styled.p`
  color: ${theme.colors.comment};
  font-size: ${theme.fontSizes.md};
`;

export const Card = styled.div`
  background-color: #363438;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
  margin-bottom: ${theme.spacing.lg};
`;

export const Form = styled.form`
  margin-bottom: ${theme.spacing.lg};
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

export const Label = styled.label`
  color: ${theme.colors.tertiary};
  font-size: ${theme.fontSizes.sm};
`;

export const Input = styled.input`
  background-color: #2a2729;
  border: 1px solid #4a474b;
  border-radius: ${theme.borderRadius.sm};
  color: ${theme.colors.foreground};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.fontSizes.md};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.accent};
  }
`;

export const Button = styled.button`
  background-color: ${theme.colors.accent};
  color: #000000;
  border: none;
  border-radius: ${theme.borderRadius.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.fontSizes.md};
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #8bc160;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${theme.colors.quinary};

  &:hover {
    background-color: #9d8fe2;
  }
`;

export const PersonList = styled.ul`
  list-style: none;
  margin-top: ${theme.spacing.md};
`;

export const PersonItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.md};
  border-bottom: 1px solid #4a474b;

  &:last-child {
    border-bottom: none;
  }
`;

export const PersonName = styled.span`
  color: ${theme.colors.foreground};
  font-weight: 500;
`;

export const PersonAmount = styled.span`
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.monospace};
`;

export const Tag = styled.span`
  background-color: ${theme.colors.quinary};
  color: ${theme.colors.background};
  padding: 2px ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.xs};
  margin-left: ${theme.spacing.xs};
`;

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${theme.spacing.lg};
  border-top: 1px solid #4a474b;
  padding-top: ${theme.spacing.md};
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.quaternary};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.error};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
`;

export const TotalAmount = styled.div`
  font-size: ${theme.fontSizes.lg};
  font-weight: bold;
  color: ${theme.colors.tertiary};
  margin-top: ${theme.spacing.md};
`;

export const SectionTitle = styled.h2`
  color: ${theme.colors.quaternary};
  font-size: ${theme.fontSizes.xl};
  margin-bottom: ${theme.spacing.md};
`;
