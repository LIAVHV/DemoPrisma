# DemoPrisma
Back End que utiliza NodeJS,Express,Express-Validator,Prisma,SQL Server Express 2019

PRISMA REQUIERE NODEJS v16.13.0 O SUPERIOR

Paquetes utilizados:
- prisma
- express
- nodemon
- @prisma/client
- express-validator

PARA PROBAR EL PROYECTO INSTALAR NODEJS

https://nodejs.org/dist/v16.20.2/node-v16.20.2-x64.msi

INSTALAR SQL SERVER EXPRESS 2019

[SQL Server 2019](https://go.microsoft.com/fwlink/?LinkID=866658)

INSTALAR AZURE DATA STUDIO

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

DESDE EL NAVEGADOR
http://localhost:3000/api/Estados