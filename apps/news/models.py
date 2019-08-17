from django.db import models

# Create your models here.

class NewsLetters(models.Model):
    email = models.EmailField(unique=True)
    suscribed = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at',]
        verbose_name = 'Subscriber'
        verbose_name_plural = 'Subscribers'
    def __str__(self):
        return self.email