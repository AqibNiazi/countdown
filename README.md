# Countdown App

A React-based countdown application designed to practice **Refs** and **Portals**. The app allows users to enter their name and participate in four different challenges, where they can start and stop timers to earn scores.

## Features
- **User Input**: Enter your name before starting the challenges.
- **Four Challenges**: Users can start and stop any of the available challenges.
- **Scoring System**:
  - If a user stops a challenge before the time expires, they earn points.
  - If the time expires without stopping, the user loses.
  - Maximum score is awarded when the user stops the timer as close as possible to the initial start time.
- **React Portals & Refs**:
  - Portals are used for rendering UI elements outside the main DOM hierarchy.
  - Refs are used for handling timer functionality efficiently.

## Technologies Used
- **React** (Functional components, Hooks, Refs, Portals)
- **JavaScript**
- **CSS** (for styling)

## Getting Started

### Prerequisites
Make sure you have **Node.js** installed on your system.

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/AqibNiazi/countdown.git
   ```
2. Navigate to the project directory:
   ```sh
   cd countdown
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Usage
1. Enter your name in the input field.
2. Start any of the four available challenges.
3. Stop the timer manually before it expires to earn points.
4. If the timer reaches zero, you lose.
5. Try to stop the timer as close as possible to the initial time to maximize your score.

## Future Improvements
- Add difficulty levels.
- Implement a leaderboard.
- Enhance UI/UX.

## Author
[Aqib Niazi](https://github.com/AqibNiazi)

## License
This project is licensed under the MIT License.

