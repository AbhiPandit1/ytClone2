Features
Trending Videos: Users can view a list of trending videos on the platform. Trending videos are determined based on view counts, likes, and other engagement metrics.

User Subscriptions: Registered users can subscribe to channels they are interested in. Subscribed channels' videos will appear in the user's feed.

Google Sign-In: Users can easily create accounts and sign in using their Google accounts, simplifying the registration and login process.

Video Upload: Registered users can upload their own videos to the platform. They can provide video titles, descriptions, and tags.

User Comments: Users can leave comments on videos, promoting engagement and discussion.

Video Search: Users can search for videos based on keywords, titles, or tags.

Responsive Design: The application is designed to work well on various devices, including desktop and mobile, ensuring a consistent user experience.

Technologies Used
Frontend:
React: A popular JavaScript library for building user interfaces.
Redux: State management library for managing application state.
Material-UI: A UI component library for React.
Axios: A library for making HTTP requests.
Backend:
Node.js: A JavaScript runtime for building server-side applications.
Express.js: A popular Node.js framework for building APIs.
MongoDB: A NoSQL database for storing application data.
JWT.js: A middleware for authentication.
Authentication:
Google OAuth: Used for Google Sign-In.
Getting Started
To run the application locally, follow these steps:

Clone the repository:



cd ytclone
Install the dependencies for both the frontend and backend:

bash
Copy code
cd client
npm install
cd ../server
npm install
Set up your Google OAuth credentials:

Go to the Google Developer Console.
Create a new project and enable the Google+ API.
Create OAuth 2.0 credentials and configure the redirect URI.
Add the client ID and client secret to your server's .env file.
Start the server:

bash
Copy code
cd server
npm start
Start the frontend development server:

bash
Copy code
cd client
npm start
Access the application in your web browser at http://localhost:3000.

Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository.

Create a new branch for your feature or bug fix:

css
Copy code
git checkout -b feature-name
Make your changes and commit them:

MONGO DB
Copy code
git commit -m "Add feature or fix bug"
Push your branch to your forked repository:


License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Special thanks to the creators and contributors of the libraries and technologies used in this project.
Inspiration from YouTube and its community of content creators.
Contact
If you have any questions or need further assistance, feel free to reach out to 224abhishekjha@gmail.com.

Enjoy building your own YouTube clone!
