# DemoPrisma
Back End que utiliza NodeJS,Express,Prisma,Base de datos SQL Server 2019


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
- docker pull mcr.microsoft.com/mssql/server:2019-latest
- docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Root2024*" -p 1433:1433 --name sql1 --hostname sql1 -d mcr.microsoft.com/mssql/server:2019-latest

Para conectarse desde Sql Server Management Studio
```
localhost
sa
Root2024*
```

Para probar el proyecto
- npm install
- npm run dev

