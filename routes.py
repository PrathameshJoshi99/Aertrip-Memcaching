# backend/app/routes.py

from flask import Blueprint, jsonify
from app.models import Airport, db
from app.config import Config
import memcache

main = Blueprint('main', __name__)

# Connect to Memcached server
mc = memcache.Client(Config.MEMCACHED_SERVERS)

@main.route('/airport/<code>', methods=['GET'])
def get_airport(code):
    # Check if data is in the cache
    airport_info = mc.get(code)

    if airport_info is None:
        # If not in cache, fetch from the database
        airport = Airport.query.filter_by(code=code).first()

        if airport:
            airport_info = {
                'code': airport.code,
                'name': airport.name,
                'city': airport.city,
                'country': airport.country
            }

            # Store data in Memcached with expiration time (e.g., 3600 seconds)
            mc.set(code, airport_info, time=3600)

    return jsonify(airport_info)
