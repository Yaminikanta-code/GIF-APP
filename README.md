# Random GIF Generator

A simple React website that fetches and displays random GIFs using the Giphy API. The project utilizes a custom hook, `useGif`, to handle API requests and state management. It has two main features:

1. **Random GIF**: Displays a random GIF and allows users to fetch another random GIF by clicking a button.
2. **Tag-based GIF**: Allows users to enter a tag and fetch a random GIF related to that tag.

---

## Features

- Fetch and display a random GIF from the Giphy API.
- Fetch a tag-specific GIF based on user input.
- Uses a reusable custom React hook (`useGif`) for API integration.

---

## Technologies Used

- **React.js**: For building the user interface.
- **Axios**: For making HTTP requests to the Giphy API.
- **Custom Hooks**: Encapsulates reusable logic for API calls.
- **Vite**: Development environment for faster builds.

---

### Prerequisites

- Node.js installed on your machine.
- A Giphy API key. You can get one by creating an account at [Giphy Developers](https://developers.giphy.com/).

### Create `.env` File

1. In the root directory of your project, create a file named `.env`.
2. Add the following line to your `.env` file, replacing `your_giphy_api_key` with your actual Giphy API key:
   ```env
   VITE_API_KEY=your_giphy_api_key
   ```
