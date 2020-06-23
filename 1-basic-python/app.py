# Simple Flask API
from flask import Flask
app = Flask(__name__)

# Our main endpoint
@app.route('/')
def hello_world():
    return 'Hello, World!'

# Run the app if we do `python app.py`
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)