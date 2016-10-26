from app import app
import json, requests
from pprint import pprint
from flask import render_template

@app.route('/')
def index():
    # payload = {'key': KEY, 'lat': LAT, 'long': LON}
    # r = requests.get('https://api.darksky.net/forecast/226a25cb31fbb2ed072467294908ee15/40.7934,-77.8600')
    # data = r.json()
    # pprint(data)
    # pprint(data['currently'])

    return render_template("base.html")

