from flask import Flask, render_template

app = Flask(__name__)

# Dashboard Page
@app.route("/")
def dashboard():
    return render_template("dashboard.html")

# Traffic API
@app.route("/traffic")
def traffic():
    return {"status": "Normal", "congestion": "Low"}

# Energy API
@app.route("/energy")
def energy():
    return {"power": "72%", "status": "Stable"}

# Waste API
@app.route("/waste")
def waste():
    return {"collection": "On Schedule", "zone": "A"}

# Run locally (Render ignores this)
if __name__ == "__main__":
    app.run(debug=True)