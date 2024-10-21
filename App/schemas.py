from pydantic import BaseModel
class GeneratePayLoad(BaseModel):
     topic:str
class AnalyzePayLoad(BaseModel):
     content:str