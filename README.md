# Aertrip.com - Airport Information System

## Overview

Aertrip.com is a travel and flight booking website that provides information about airports. This project consists of a backend implemented in Flask (Python) with MySQL for data storage and Memcached for caching. The frontend includes a React app for user interaction and an Angular admin panel for administrative tasks.

## Features

- **User Interface (React App):**
  - Allows users to enter an airport code and fetch information.
  - Utilizes Memcached for caching to improve response times.

- **Admin Panel (Angular App):**
  - Designed for internal use or administrative purposes.
  - Provides the same functionality as the React app but with an administrative interface.

- **Backend (Flask):**
  - Exposes API endpoints for retrieving airport information.
  - Utilizes MySQL for database storage and Memcached for caching.

## Project Structure

- **backend:**
  - Flask application for the backend.
  - MySQL for data storage.
  - Memcached for caching.

- **frontend:**
  - **react_app:**
    - React app for user interaction.
  - **angular_admin:**
    - Angular app for administrative tasks
