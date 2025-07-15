from fastapi import APIRouter, HTTPException, Body
from pydantic import BaseModel
from firebase_config import auth, db

router = APIRouter()

# Exemple de route simple
@router.get("/hello")
def dire_bonjour():
    return {"message": "Bonjour depuis une route dédiée !"}

# Modèle de données pour la connexion (login)
class LoginRequest(BaseModel):
    email: str
    password: str

# Route pour la connexion utilisateur
@router.post("/login")
def login(data: LoginRequest):
    try:
        # Recherche l'utilisateur par email dans Firebase Auth
        user = auth.get_user_by_email(data.email)
        # ⚠️ La vérification du mot de passe se fait côté client avec Firebase Auth
        # Ici, on retourne juste les infos de l'utilisateur si trouvé
        return {"uid": user.uid, "email": user.email}
    except Exception as e:
        # Si l'utilisateur n'existe pas ou erreur, on retourne une erreur 401
        raise HTTPException(status_code=401, detail="Identifiants invalides ou utilisateur non trouvé.")

# Modèle de données pour un message
class MessageRequest(BaseModel):
    sender: str      # Expéditeur
    receiver: str    # Destinataire
    content: str     # Contenu du message

# Route pour envoyer un message (stocké dans Firestore)
@router.post("/messages")
def send_message(msg: MessageRequest):
    # Ajoute le message à la collection "messages" dans Firestore
    doc_ref = db.collection("messages").add(msg.dict())
    return {"message": "Message envoyé", "id": doc_ref[1].id}

# Route pour récupérer les messages entre deux utilisateurs
@router.get("/messages/{user1}/{user2}")
def get_messages(user1: str, user2: str):
    # Recherche les messages où l'expéditeur et le destinataire correspondent aux deux utilisateurs
    messages = db.collection("messages")\
        .where("sender", "in", [user1, user2])\
        .where("receiver", "in", [user1, user2])\
        .stream()
    # Retourne la liste des messages trouvés
    result = [m.to_dict() for m in messages]
    return result 