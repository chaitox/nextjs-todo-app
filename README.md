# development

1. Levantar la base de datos

```
docker compose up -d
```

2. Renombrar el .env_template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el SEED para [crear la base de datos](localhost:3000/api/seed)

# Prisma command

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
