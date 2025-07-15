import firebase_admin
from firebase_admin import credentials, auth, firestore
import os

# Charger la clé de service depuis le fichier JSON
cred = credentials.Certificate(os.path.join(os.path.dirname(__file__), 'serviceAccountKey.json'))

# Initialiser l'app Firebase
firebase_admin.initialize_app(cred)

db = firestore.client() 