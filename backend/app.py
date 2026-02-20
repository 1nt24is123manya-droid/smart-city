from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Smart City Backend Running 🚀"

if __name__ == "__main__":
    app.run()
