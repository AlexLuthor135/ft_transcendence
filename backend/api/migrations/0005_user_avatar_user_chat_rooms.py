# Generated by Django 5.0.5 on 2024-06-09 10:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_user_friends'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='avatar',
            field=models.ImageField(default='default.jpg', upload_to='avatars/'),
        ),
    ]
