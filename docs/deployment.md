# Deployment Guide

## Docker Deployment

### Build Image

```bash
docker build -t autoflow .
```

### Run Container

```bash
docker run -p 5678:5678 -e DB_TYPE=postgres autoflow
```

## Docker Compose

```bash
docker-compose up -d
```

## Environment Variables

See `.env.example` for all available configuration options.

## Production Setup

1. Set `NODE_ENV=production`
2. Use PostgreSQL or MySQL for database
3. Configure Redis for caching
4. Set strong JWT and encryption keys
5. Use a reverse proxy (nginx/traefik)
6. Enable HTTPS/SSL

## Health Check

```bash
curl http://localhost:5678/health
```
