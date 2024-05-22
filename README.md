# DemoPrisma
Back End que utiliza NodeJS,Express,Prisma,Docker, SQL Server 2019

PRISMA REQUIERE NODEJS v16.13.0 O SUPERIOR

Paquetes utilizados:
- prisma
- express
- nodemon
- @prisma/client
- express-validator

Para probar el proyecto instalar nodejs

https://nodejs.org/dist/v16.20.2/node-v16.20.2-x64.msi

Instalar docker

https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe



Ejecutar en una terminal
```
docker pull mcr.microsoft.com/mssql/server:2019-latest
```

```
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Root2024*" -p 1433:1433 --name sql1 --hostname sql1 -d mcr.microsoft.com/mssql/server:2019-latest
```

Instalar Azure Data Studio

https://go.microsoft.com/fwlink/?linkid=2261569

Para conectarse desde Azure Data Studio o Sql Server Management Studio
```
Server:localhost
Authentication type:SQL Login
Username:sa
Password:Root2024*
Encrypt:Optional
Trust serve certificate:True
Server group:<Default>
```

Script SQL

Conectarse a la base de datos y ejecutar demoPrisma.sql

1. Para probar el proyecto, primero ejecuta el script de SQL, posteriormente los siguientes comandos
```
npm install
npx prisma generate
npm run dev
```

2. Para probar el proyecto, migrando desde prisma, se crean las tablas vacias
```
npm install
npx prisma migrate dev --name initial
npm run dev
```

PUEDE PROBAR EL BACK CON POSTMAN O UN CLIENTE REST PARA VISUAL STUDIO CODE