from fastapi import FastAPI
from server.api import create_app

app = FastAPI()

api = create_app()
app.mount("/api", api)
