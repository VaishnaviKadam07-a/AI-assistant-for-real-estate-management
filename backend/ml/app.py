
from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.linear_model import LinearRegression
import pandas as pd

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}}) 

# ---  Property Price Prediction Setup ---
data = pd.DataFrame({
    'area': [800, 1200, 1500, 900, 1800, 2000],
    'bedrooms': [2, 3, 3, 2, 4, 4],
    'bathrooms': [1, 2, 2, 1, 3, 3],
    'location_score': [6, 8, 9, 5, 9, 10],
    'age_of_property': [10, 5, 2, 12, 1, 0],
    'price': [40, 70, 90, 45, 120, 130]
})

X = data[['area', 'bedrooms', 'bathrooms', 'location_score', 'age_of_property']]
y = data['price']

model = LinearRegression()
model.fit(X, y)

@app.route('/')
def home():
    return "✅ Flask server is running"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        content = request.json
        features = [[
            content['area'],
            content['bedrooms'],
            content['bathrooms'],
            content['location_score'],
            content['age_of_property']
        ]]
        prediction = model.predict(features)[0]
        return jsonify({'estimated_price_lakhs': round(prediction, 2)})
    except Exception as e:
        return jsonify({'error': str(e)})

# --- 🔷 Chatbot API ---
@app.route('/chat', methods=['POST'])
def chat():
    try:
        user_input = request.json.get('message', '')
        if not user_input:
            return jsonify({'reply': "Please ask something about real estate."})

        # Dummy reply logic — replace with OpenAI or database later
        if "price" in user_input.lower():
            reply = "To get the estimated price, please enter area, bedrooms, etc."
        elif "trend" in user_input.lower():
            reply = "Property trends in Pune are upward. Good time to invest!"
        else:
            reply = f"You asked: '{user_input}'. I'll help you with that shortly."

        return jsonify({'reply': reply})
    except Exception as e:
        return jsonify({'reply': f"⚠️ Error: {str(e)}"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
