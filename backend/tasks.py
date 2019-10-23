from celery.decorators  import task
from .email import send_welcome_email
from celery.utils.log import get_task_logger
logger = get_task_logger(__name__)
@task(name="send_asyn_email")
def send_async_email(email,name):
    # try:
        logger.info("sent welcome email")
        return send_welcome_email(email,name)
    # except Exception as ex:
    #     logger.exception(ex)
    #     retry(countdown=3**request.retries)