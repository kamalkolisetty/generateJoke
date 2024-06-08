

# Joker App

## Having a Bad Day? We've Got You Covered!

Welcome to the Joker App! This simple React application is here to brighten your day with a random joke whenever you need a good laugh.

## Features

- Fetches a random joke from the [Official Joke API](https://official-joke-api.appspot.com/random_joke).
- Displays the joke setup and punchline.
- Provides a button to fetch another joke and keep the laughter going.
- Uses inline CSS for styling.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/joker-app.git
   cd joker-app
``

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

## Usage

Once the development server is running, open your browser and navigate to `http://localhost:3000`. You’ll be greeted with a random joke to lighten your mood. Click the button to fetch another joke and keep the smiles coming.

## Code Explanation

The main component, `Joker`, fetches a random joke from an API and displays it. 



### How It Works

- **useState**: Manages the state of the joke.
- **useEffect**: Fetches the first joke when the component mounts.
- **getJoke**: Fetches a new joke from the API and updates the state.
- **Inline CSS**: Styles the button to make it appealing and interactive.
