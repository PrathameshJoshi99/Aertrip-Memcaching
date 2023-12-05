# backend/app/config.py

class Config:
    SQLALCHEMY_DATABASE_URI = 'mysql://username:password@localhost/db_name'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    MEMCACHED_SERVERS = ['127.0.0.1:11211']
