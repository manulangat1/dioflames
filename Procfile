web: gunicorn dioflames.wsgi --log-file -
worker: celery worker --app=tasks.app
