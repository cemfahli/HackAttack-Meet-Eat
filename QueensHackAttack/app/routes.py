from app import app
from flask import render_template, jsonify, request, redirect, url_for
import json

@app.route('/', methods = ['POST', 'GET'])
def index():
	if(request.method=='GET'):
		return render_template('index.html')



if __name__ == '__main__':
	app.run(debug=True)
