web: gunicorn dioflames.wsgi --log-file -
worker: celery worker --backend=tasks.backend
