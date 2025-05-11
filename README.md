# Wolt Split Calculator

**Author:** Kislev Levy

## Project Overview

Wolt Split Calculator is a sleek, dark-themed React application designed to simplify bill splitting for Wolt food delivery orders. The app calculates how much each person should pay (including service and delivery fees), with special consideration for the order host who pays any remaining amount after rounding others' shares upward.

## Features

- **Person Management**: Add people to your order with their name and order amount
- **Host Designation**: Mark one person as the host (first person is automatically set as host)
- **Fee Distribution**: Smart calculation of delivery and service fees across all participants
- **Intelligent Rounding**: Round up non-host payments to integers, with the host paying the remainder
- **Modern UI**: Sleek dark-themed interface with the Monokai Pro color scheme
- **Responsive Design**: Works well on all screen sizes
- **Smooth Animations**: Subtle animations for a polished user experience

## Technologies and Tools

### Frontend:

- **React**: Component-based UI library for building interactive user interfaces
- **TypeScript**: Static typing for improved code quality and developer experience
- **Vite**: Next-generation frontend tooling for faster development
- **Styled Components**: CSS-in-JS library for component-based styling
- **Framer Motion**: Animation library for smooth UI transitions
- **UUID**: For generating unique IDs for list items

## Project Structure

```
wolt-split-calculator/
├── public/                # Static files
├── src/
│   ├── components/        # React components
│   ├── hooks/             # Custom React hooks
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Entry point
│   └── vite-env.d.ts      # Vite environment declarations
├── .eslintrc.cjs          # ESLint configuration
├── index.html             # HTML entry point
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## Skills Demonstrated

- **React component design and state management**: Building modular components with clean state management
- **TypeScript typing**: Using TypeScript for improved code reliability
- **CSS-in-JS with styled-components**: Creating a consistent and maintainable styling system
- **Mathematical calculations**: Implementing fair bill-splitting logic with proper rounding
- **Responsive UI design**: Creating a responsive layout that works on various devices
- **Animation with Framer Motion**: Adding subtle animations for improved user experience

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/kislevlevy/wolt-split-calculator
   ```
2. Navigate to the project directory:
   ```bash
   cd wolt-split-calculator
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Development Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production version
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## How to Use

1. **Add People to Order**:

   - Enter a person's name and their order amount
   - Check the "Host" box if this person is the host (first person is host by default)
   - Click "Add" to add them to the list

2. **Enter Fees**:

   - Enter the delivery fee amount
   - Enter the service fee amount

3. **Calculate Split**:

   - Click "Calculate" to compute how much each person should pay
   - Non-host payments are rounded up to the nearest integer
   - The host pays whatever is left after rounding (typically less)

4. **Review Results**:

   - See each person's original order amount and final amount to pay
   - The summary shows the total order amount, fees, and grand total

5. **Manage People**:
   - Remove people from the list if needed by clicking the "✕" button

## Design Approach

The application follows a clean, modern design with the Monokai Pro dark color scheme. Special attention was paid to:

- **Usability**: Clear visual hierarchy and intuitive interface
- **Aesthetics**: Pleasing color palette and subtle animations
- **Responsiveness**: Works well on devices of all sizes
- **Feedback**: Visual cues for user actions

## Contribution

Feel free to contribute to this project by opening issues or submitting pull requests.
