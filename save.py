import pyrebase
import json
from time import sleep
import datetime
config = {
  "apiKey": "AIzaSyC9hJh52ifvcDJL-YUxIO09QGscbjLJWL8",
  "authDomain": "hmmarchmadness.firebaseapp.com",
  "databaseURL": "https://hmmarchmadness.firebaseio.com",
  "storageBucket": "hmmarchmadness.appspot.com",
  "serviceAccount": "firebasekey.json"
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
#authenticate a user
user = auth.sign_in_with_email_and_password("server@march.com", "server123")
db = firebase.database()

while True:
	now = datetime.datetime.now()
	data = db.child("/").get("").val()
	with open((str(now)+".json"), 'w') as outfile:
		json.dump(data, outfile)
	print("saved at "+str(now))
	sleep(300)