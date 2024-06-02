# Twitter Clone with AI-Powered Disaster Tweet Detection

Welcome to the Twitter Clone project! This application allows users to post tweets, and uses an AI model to predict whether a tweet is about a real disaster or not. The project is built with a React frontend and a Flask backend.

![Twitter Clone Screenshot](screenshot.png)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Model Details](#model-details)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Post Tweets**: Users can post tweets in real-time.
- **Disaster Detection**: An AI model predicts if a tweet is about a real disaster.
- **Responsive Design**: The application is fully responsive and works on all device sizes.
- **Notifications**: Users receive notifications about new interactions.
- **Explore Page**: Discover trending topics and popular tweets.
- **Profile Customization**: Users can customize their profiles with pictures and bio information.

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **CSS**: Styling the components.

### Backend

- **Flask**: A lightweight WSGI web application framework.
- **Flask-CORS**: A Flask extension for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible.
- **Joblib**: For loading the pre-trained model.
- **NLTK**: Natural Language Toolkit, used for text preprocessing.

### Machine Learning

- **scikit-learn**: For building and training the model.
- **TfidfVectorizer**: Converts text data into numerical feature vectors.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/twitter-clone.git
   cd twitter-clone

2. **Set up the backend**:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   pip install -r requirements.txt
   python app.py

3. **Set up the frontend**:
   ```bash
   cd ../frontend
   npm install
   npm start

4. **Run the application**:
   
   Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Post a Tweet**: Type your tweet into the text area and click "Tweet".
- **View Predictions**: The application will display if the tweet is predicted to be about a disaster.

## Model Details

The AI model is trained on the "Natural Language Processing with Disaster Tweets" dataset from Kaggle. It uses a TfidfVectorizer for text vectorization and a machine learning model to classify the tweets.
- Model: Logistic Regression
- Accuracy: 79%
- Precision: 79%
- Recall: 69%
- F1-Score: 74%

## Contributing

We welcome contributions from the community! To contribute:

- Fork the repository.
- Create a new branch `git checkout -b feature-branch`.
- Make your changes.
- Commit your changes `git commit -am 'Add new feature`.
- Push to the branch `git push origin feature-branch`.
- Open a pull request.
