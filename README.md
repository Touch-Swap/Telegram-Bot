# Telegram Tapping Game Bot

## Overview

Welcome to the **Telegram Tapping Game Bot**! This bot is a fun and interactive game where players compete by tapping on their screens as fast as they can within a specified time. The player with the highest number of taps wins the game.

This bot is built using the [grammY](https://grammy.dev/) framework for Telegram bots.

## Features

- **Welcome Message:** Greet new users with a welcome message.
- **Invite Link:** Generate an invite link for friends.
- **Help Text:** Provide information on how to use the bot.
- **Language Selection:** Choose the language for the bot.
- **User Profile:** View your profile.
- **Social Media Links:** Access the bot's social media links.

## Installation

To set up the Telegram Tapping Game Bot on your local machine, follow these steps:

### Running the Next.js App

1. **Clone the Next.js app repository:**
   ```sh
   git clone https://github.com/Touch-Swap/Web-App.git
   cd Web-App
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the app with ngrok:**
   ```sh
   npm run dev
   ngrok http 3000
   ```

4. **Copy the ngrok URL:**
   The ngrok command will generate a URL that looks like `https://abcd1234.ngrok.io`. Copy this URL.

### Setting Up the Telegram Bot

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Touch-Swap/Telegram-Bot.git
   cd Telegram-Bot
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Create a `.env` file:**
   ```sh
   touch .env
   ```

4. **Add your Telegram Bot API token and the ngrok URL to the `.env` file:**
   ```
   BOT_TOKEN=your-telegram-bot-token
   WEBAPP_URL=https://abcd1234.ngrok.io
   API_URL=https://abcd1234.ngrok.io
   ```

5. **Start the bot:**
   ```sh
   npm start
   ```

## Usage

To interact with the bot, use the following commands:

- `/start` - Receive a welcome message.
- `/friend` - Get an invite link to share with friends.
- `/help` - Generate the help text with information on how to use the bot.
- `/language` - Select your preferred language.
- `/profile` - View your user profile.
- `/social` - Access social media links related to the bot.

## Bot Commands

### `/start`
Sends a welcome message to the user. This command is typically used when a user first interacts with the bot.

### `/friend`
Generates an invite link that users can share with their friends to join the game.

### `/help`
Provides help text with detailed information on how to use the bot and its various features.

### `/language`
Allows the user to select their preferred language for interacting with the bot.

### `/profile`
Displays the user's profile, including game stats and other relevant information.

### `/social`
Provides links to the bot's social media profiles and related pages.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
