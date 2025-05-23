import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: ${theme.fonts.body};
    background: linear-gradient(135deg, ${theme.colors.background} 0%, #1A1A1A 100%);
    color: ${theme.colors.foreground};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }

  button, input, select, textarea {
    font-family: inherit;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.md};
  min-height: 100vh;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  padding: ${theme.spacing.xl} 0;
`;

export const Title = styled.h1`
  color: ${theme.colors.foreground};
  margin-bottom: ${theme.spacing.sm};
  font-size: ${theme.fontSizes["3xl"]};
  font-weight: ${theme.fontWeights.bold};
  background: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.accent} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes["4xl"]};
  }
`;

export const Subtitle = styled.p`
  color: ${theme.colors.muted};
  font-size: ${theme.fontSizes.lg};
  max-width: 600px;
  margin: 0 auto;
`;

export const Card = styled.div`
  background: ${theme.colors.surface};
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.lg};
  margin-bottom: ${theme.spacing.xl};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${theme.colors.borderLight};
    box-shadow: ${theme.shadows.xl};
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    align-items: end;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  flex: 1;
`;

export const Label = styled.label`
  color: ${theme.colors.foreground};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
`;

export const Input = styled.input`
  background: ${theme.colors.surfaceElevated};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  color: ${theme.colors.foreground};
  padding: ${theme.spacing.md};
  font-size: ${theme.fontSizes.base};
  transition: all 0.2s ease;
  width: 100%;

  &::placeholder {
    color: ${theme.colors.muted};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &:hover:not(:focus) {
    border-color: ${theme.colors.borderLight};
  }

  &[type="checkbox"] {
    width: auto;
    margin-right: ${theme.spacing.xs};
  }
`;

export const Select = styled.select`
  background: ${theme.colors.surfaceElevated};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  color: ${theme.colors.foreground};
  padding: ${theme.spacing.md};
  font-size: ${theme.fontSizes.base};
  transition: all 0.2s ease;
  cursor: pointer;
  min-width: 120px;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &:hover:not(:focus) {
    border-color: ${theme.colors.borderLight};
  }

  option {
    background: ${theme.colors.surfaceElevated};
    color: ${theme.colors.foreground};
  }
`;

export const Button = styled.button`
  background: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.primaryHover} 100%
  );
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  min-height: 48px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${theme.shadows.lg};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const SecondaryButton = styled(Button)`
  background: linear-gradient(
    135deg,
    ${theme.colors.secondary} 0%,
    ${theme.colors.secondaryHover} 100%
  );
`;

export const DangerButton = styled(Button)`
  background: linear-gradient(135deg, ${theme.colors.error} 0%, #dc2626 100%);
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.muted};
  cursor: pointer;
  padding: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.md};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  min-height: 32px;

  &:hover {
    color: ${theme.colors.error};
    background: rgba(239, 68, 68, 0.1);
  }
`;

export const PersonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.lg};
`;

export const PersonItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.md};
  background: ${theme.colors.surfaceElevated};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${theme.colors.borderLight};
    transform: translateY(-1px);
    box-shadow: ${theme.shadows.md};
  }
`;

export const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  flex: 1;

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PersonName = styled.span`
  color: ${theme.colors.foreground};
  font-weight: ${theme.fontWeights.medium};
  font-size: ${theme.fontSizes.base};
`;

export const PersonAmount = styled.span`
  color: ${theme.colors.muted};
  font-family: ${theme.fonts.monospace};
  font-size: ${theme.fontSizes.sm};
`;

export const PersonFinalAmount = styled.span`
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.monospace};
  font-weight: ${theme.fontWeights.semibold};
  font-size: ${theme.fontSizes.base};
`;

export const Tag = styled.span`
  background: linear-gradient(135deg, ${theme.colors.accent} 0%, #f59e0b 100%);
  color: white;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};
  margin-left: ${theme.spacing.sm};
`;

export const SectionTitle = styled.h2`
  color: ${theme.colors.foreground};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  margin-bottom: ${theme.spacing.lg};
`;

export const Summary = styled.div`
  background: linear-gradient(
    135deg,
    ${theme.colors.surfaceElevated} 0%,
    ${theme.colors.surface} 100%
  );
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
`;

export const SummaryGrid = styled.div`
  display: grid;
  gap: ${theme.spacing.lg};
  grid-template-columns: 1fr;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SummarySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.sm} 0;
  border-bottom: 1px solid ${theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

export const SummaryLabel = styled.span`
  color: ${theme.colors.muted};
  font-size: ${theme.fontSizes.sm};
`;

export const SummaryValue = styled.span`
  color: ${theme.colors.foreground};
  font-family: ${theme.fonts.monospace};
  font-weight: ${theme.fontWeights.medium};
`;

export const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.md};
  background: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.primaryHover} 100%
  );
  border-radius: ${theme.borderRadius.lg};
  margin-top: ${theme.spacing.lg};

  span {
    color: white;
    font-weight: ${theme.fontWeights.semibold};
  }

  .amount {
    font-family: ${theme.fonts.monospace};
    font-size: ${theme.fontSizes.lg};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: ${theme.breakpoints.md}) {
    flex-wrap: nowrap;
  }
`;

export const ModeToggle = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md};
  background: ${theme.colors.surfaceElevated};
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing.lg};
`;

export const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.foreground};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  user-select: none;

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
  }
`;
