# backend/app.py
from flask import Flask, request, jsonify
import re
import joblib
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from flask_cors import CORS  

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
model = joblib.load('disaster_tweet_model.pkl')
vectorizer = joblib.load('tfidf_vectorizer.pkl')

nltk.download('stopwords')
nltk.download('punkt')

def clean_text(text):
    text = text.lower()
    text = re.sub(r'http\S+|www\S+|https\S+', '', text, flags=re.MULTILINE)
    text = re.sub(r'\@w+|\#', '', text)
    text = re.sub(r'[^A-Za-z0-9 ]+', '', text)
    text = text.strip()
    return text

def preprocess_text(text):
    stop_words = set(stopwords.words('english'))
    word_tokens = word_tokenize(text)
    filtered_text = [word for word in word_tokens if word not in stop_words]
    return ' '.join(filtered_text)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    tweet = data['tweet']
    tweet_cleaned = clean_text(tweet)
    tweet_preprocessed = preprocess_text(tweet_cleaned)
    tweet_vectorized = vectorizer.transform([tweet_preprocessed])
    prediction = model.predict(tweet_vectorized)
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
