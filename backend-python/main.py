from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app import router

app = FastAPI()

# Configuration CORS (à adapter selon tes besoins)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Autorise toutes les origines
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def lire_racine():
    return {"message": "Bienvenue sur le backend Python de Fildaily !"} 