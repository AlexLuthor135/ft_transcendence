# Generated by Django 5.0.6 on 2024-08-04 18:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_user_blocked_users'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='losses',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='user',
            name='wins',
            field=models.IntegerField(default=0),
        ),
    ]
