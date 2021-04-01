# Generated by Django 3.1 on 2021-04-01 08:20

import django.core.validators
from django.db import migrations, models
import restaurant.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('category', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('country', models.CharField(max_length=170, verbose_name='Country')),
                ('street', models.CharField(max_length=70, verbose_name='Street')),
                ('city', models.CharField(max_length=70, verbose_name='City')),
                ('zip_code', models.CharField(blank=True, max_length=70, verbose_name='ZIP / Postal code')),
                ('website', models.CharField(blank=True, max_length=70)),
                ('phone', models.CharField(max_length=17, validators=[django.core.validators.RegexValidator(message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.", regex='^\\+?1?\\d{5,15}$')])),
                ('email', models.EmailField(blank=True, max_length=70)),
                ('opening_hours_from', models.CharField(max_length=20, null=True)),
                ('opening_hours_to', models.CharField(max_length=20, null=True)),
                ('avatar', models.ImageField(blank=True, null=True, upload_to=restaurant.models.user_directory_path)),
                ('created', models.DateTimeField(auto_now_add=True, null=True)),
                ('longitude', models.CharField(blank=True, max_length=50, null=True)),
                ('latitude', models.CharField(blank=True, max_length=50, null=True)),
                ('price_level', models.CharField(choices=[('0', 'No information'), ('1', '$'), ('2', '$$'), ('3', '$$$')], default='0', max_length=2)),
                ('WIFI', models.BooleanField(null=True)),
                ('take_away', models.BooleanField(null=True, verbose_name='Take away')),
                ('delivery', models.BooleanField(null=True)),
                ('take_reservations', models.BooleanField(null=True, verbose_name='Take reservations')),
                ('credit_cards', models.BooleanField(null=True, verbose_name='Credit cards')),
                ('waiter_service', models.BooleanField(null=True, verbose_name='Waiter service')),
                ('noise_level', models.CharField(blank=True, choices=[('0', 'No information'), ('1', '!'), ('2', '!!'), ('3', '!!!')], default='0', max_length=2, verbose_name='Noise level')),
                ('categories', models.ManyToManyField(blank=True, related_name='restaurants', to='category.Category')),
            ],
        ),
    ]
