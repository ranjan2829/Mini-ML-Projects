from fastapi import FastAPI ,Request,Depends
from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session
import models,crud,database,utility,schemas
from database import engine,sessionLocal
from starlette.concurrency import run_in_threadpool



app=FastAPI()

templates=Jinja2Templates(directory="Template")
def get_db():
     db=sessionLocal()
     try:
          yield db
     finally:
          db.close()

@app.get("/")
def read_root(req:Request):
     return templates.TemplateResponse("index.html",{"request":req})

@app.post("/generate/")
async def generate_content(payLoad:schemas.GeneratePayLoad,db:Session=Depends(get_db)):
     generated_text=await run_in_threadpool(utility.generate_content,db,payLoad.topic)
     