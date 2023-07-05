from fastapi import FastAPI
from .app import create_app

app = FastAPI()

api = create_app()
app.mount("/$api", api)
