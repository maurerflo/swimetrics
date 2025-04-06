---
sidebar_position: 3
---

# Architecture Overview

This document outlines the architecture of the Swimetrics platform, a swimming analytics application.


## System Components
Swimetrics follows a modern web application architecture with these main components:


Frontend: React application with TypeScript
Backend: Node.js server
Database: PostgreSQL for storing structured data
Object Storage: MinIO for storing media files
Authentication: Keycloak for identity and access management
Documentation: Docusaurus for technical documentation

## Infrastructure
The application is containerized using Docker Compose with the following services:


PostgreSQL database
MinIO object storage
Node.js application server
Frontend development server

## Authentication Flow
Swimetrics uses Keycloak for authentication:
Users are redirected to Keycloak for login
Keycloak issues tokens after successful authentication
Auth.js integrates with Keycloak using OpenID Connect
Protected routes verify tokens before granting access

## Data Flow
Frontend React components request data from backend APIs
Node.js backend processes requests and queries PostgreSQL
Media files are stored in and retrieved from MinIO
Authentication state is maintained via secure cookies
Project Structure


## Project Structure

## Environment Configuration

## Development Workflow
