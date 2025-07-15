# Backend Python

Ce dossier contient le backend Python du projet Fildaily.

## Démarrage rapide

1. Crée un environnement virtuel :
   ```bash
   python -m venv venv
   ```
2. Active l'environnement virtuel :
   - Windows : `venv\Scripts\activate`
   - Mac/Linux : `source venv/bin/activate`
3. Installe les dépendances :
   ```bash
   pip install -r requirements.txt
   ```
4. Lance le serveur :
   ```bash
   python main.py
   ```

## Structure recommandée
- `main.py` : Point d'entrée de l'API (exemple avec FastAPI)
- `requirements.txt` : Dépendances Python
- `app/` : Code source de l'application 