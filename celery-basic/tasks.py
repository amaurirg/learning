import time

from celery import Celery


# app = Celery('tasks', broker='pyamqp://guest@localhost//')
app = Celery('tasks', backend='rpc://', broker='pyamqp://')

@app.task
def add(x, y):
    time.sleep(6000)
    return f"A soma é {x + y}"








