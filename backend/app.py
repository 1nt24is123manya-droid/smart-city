from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Smart City Backend is Running 🚀"

@app.route("/traffic")
def traffic():
    return {"status": "Normal", "congestion": "Low"}

# 👇 ALWAYS at the bottom
if __name__ == "__main__":
    app.run()