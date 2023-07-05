from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def index():
    return {"message": "Hello World"}


@app.get("/api/")
async def api_index():
    return {"message": "This is API index"}
