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

Instalar Azure Data Studio
https://go.microsoft.com/fwlink/?linkid=2261569

Ejecutar en una terminal
```
docker pull mcr.microsoft.com/mssql/server:2019-latest
```

```
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Root2024*" -p 1433:1433 --name sql1 --hostname sql1 -d mcr.microsoft.com/mssql/server:2019-latest
```
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

# Script SQL
Conectarse a la base de datos y ejecutar
```
USE MASTER
GO
CREATE DATABASE PRUEBAS
GO

USE pruebas
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Estados](
	[EstadosId] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](35) NOT NULL,
 CONSTRAINT [PK_Estados] PRIMARY KEY CLUSTERED 
(
	[EstadosId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Municipios](
	[FkEstadosId] [int] NOT NULL,
	[MunicipiosId] [int] NOT NULL,
	[Nombre] [nvarchar](50) NULL,
 CONSTRAINT [PK__Municipi__6BC0DEAEEBF2E9DC] PRIMARY KEY CLUSTERED 
(
	[FkEstadosId] ASC,
	[MunicipiosId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [Estados] ON 

INSERT [Estados] ([EstadosId], [Nombre]) VALUES (1, N'AGUASCALIENTES')
,(2, N'BAJA CALIFORNIA')
,(3, N'BAJA CALIFORNIA SUR')
,(4, N'CAMPECHE')
,(7, N'CHIAPAS')
,(8, N'CHIHUAHUA')
,(9, N'CIUDAD DE MEXICO')
,(5, N'COAHUILA DE ZARAGOZA')
,(6, N'COLIMA')
,(10, N'DURANGO')
,(11, N'GUANAJUATO')
,(12, N'GUERRERO')
,(13, N'HIDALGO')
,(14, N'JALISCO')
,(15, N'MEXICO')
,(16, N'MICHOACAN DE OCAMPO')
,(17, N'MORELOS')
,(18, N'NAYARIT')
,(19, N'NUEVO LEON')
,(20, N'OAXACA')
,(21, N'PUEBLA')
,(22, N'QUERETARO')
,(23, N'QUINTANA ROO')
,(24, N'SAN LUIS POTOSI')
,(25, N'SINALOA')
,(26, N'SONORA')
,(27, N'TABASCO')
,(28, N'TAMAULIPAS')
,(29, N'TLAXCALA')
,(30, N'VERACRUZ DE IGNACIO DE LA LLAVE')
,(31, N'YUCATAN')
,(32, N'ZACATECAS')
SET IDENTITY_INSERT [Estados] OFF
GO
INSERT [Municipios] ([FkEstadosId], [MunicipiosId], [Nombre]) VALUES (15, 1, N'ACAMBAY DE RUIZ CASTAÑEDA')
,(15, 2, N'ACOLMAN')
,(15, 3, N'ACULCO')
,(15, 4, N'ALMOLOYA DE ALQUISIRAS')
,(15, 5, N'ALMOLOYA DE JUAREZ')
,(15, 6, N'ALMOLOYA DEL RIO')
,(15, 7, N'AMANALCO')
,(15, 8, N'AMATEPEC')
,(15, 9, N'AMECAMECA')
,(15, 10, N'APAXCO')
,(15, 11, N'ATENCO')
,(15, 12, N'ATIZAPAN')
,(15, 13, N'ATIZAPAN DE ZARAGOZA')
,(15, 14, N'ATLACOMULCO')
,(15, 15, N'ATLAUTLA')
,(15, 16, N'AXAPUSCO')
,(15, 17, N'AYAPANGO')
,(15, 18, N'CALIMAYA')
,(15, 19, N'CAPULHUAC')
,(15, 20, N'COACALCO DE BERRIOZABAL')
,(15, 21, N'COATEPEC HARINAS')
,(15, 22, N'COCOTITLAN')
,(15, 23, N'COYOTEPEC')
,(15, 24, N'CUAUTITLAN')
,(15, 25, N'CHALCO')
,(15, 26, N'CHAPA DE MOTA')
,(15, 27, N'CHAPULTEPEC')
,(15, 28, N'CHIAUTLA')
,(15, 29, N'CHICOLOAPAN')
,(15, 30, N'CHICONCUAC')
,(15, 31, N'CHIMALHUACAN')
,(15, 32, N'DONATO GUERRA')
,(15, 33, N'ECATEPEC DE MORELOS')
,(15, 34, N'ECATZINGO')
,(15, 35, N'HUEHUETOCA')
,(15, 36, N'HUEYPOXTLA')
,(15, 37, N'HUIXQUILUCAN')
,(15, 38, N'ISIDRO FABELA')
,(15, 39, N'IXTAPALUCA')
,(15, 40, N'IXTAPAN DE LA SAL')
,(15, 41, N'IXTAPAN DEL ORO')
,(15, 42, N'IXTLAHUACA')
,(15, 43, N'XALATLACO')
,(15, 44, N'JALTENCO')
,(15, 45, N'JILOTEPEC')
,(15, 46, N'JILOTZINGO')
,(15, 47, N'JIQUIPILCO')
,(15, 48, N'JOCOTITLAN')
,(15, 49, N'JOQUICINGO')
,(15, 50, N'JUCHITEPEC')
,(15, 51, N'LERMA')
,(15, 52, N'MALINALCO')
,(15, 53, N'MELCHOR OCAMPO')
,(15, 54, N'METEPEC')
,(15, 55, N'MEXICALTZINGO')
,(15, 56, N'MORELOS')
,(15, 57, N'NAUCALPAN DE JUAREZ')
,(15, 58, N'NEZAHUALCOYOTL')
,(15, 59, N'NEXTLALPAN')
,(15, 60, N'NICOLAS ROMERO')
,(15, 61, N'NOPALTEPEC')
,(15, 62, N'OCOYOACAC')
,(15, 63, N'OCUILAN')
,(15, 64, N'EL ORO')
,(15, 65, N'OTUMBA')
,(15, 66, N'OTZOLOAPAN')
,(15, 67, N'OTZOLOTEPEC')
,(15, 68, N'OZUMBA')
,(15, 69, N'PAPALOTLA')
,(15, 70, N'LA PAZ')
,(15, 71, N'POLOTITLAN')
,(15, 72, N'RAYON')
,(15, 73, N'SAN ANTONIO LA ISLA')
,(15, 74, N'SAN FELIPE DEL PROGRESO')
,(15, 75, N'SAN MARTIN DE LAS PIRAMIDES')
,(15, 76, N'SAN MATEO ATENCO')
,(15, 77, N'SAN SIMON DE GUERRERO')
,(15, 78, N'SANTO TOMAS')
,(15, 79, N'SOYANIQUILPAN DE JUAREZ')
,(15, 80, N'SULTEPEC')
,(15, 81, N'TECAMAC')
,(15, 82, N'TEJUPILCO')
,(15, 83, N'TEMAMATLA')
,(15, 84, N'TEMASCALAPA')
,(15, 85, N'TEMASCALCINGO')
,(15, 86, N'TEMASCALTEPEC')
,(15, 87, N'TEMOAYA')
,(15, 88, N'TENANCINGO')
,(15, 89, N'TENANGO DEL AIRE')
,(15, 90, N'TENANGO DEL VALLE')
,(15, 91, N'TEOLOYUCAN')
,(15, 92, N'TEOTIHUACAN')
,(15, 93, N'TEPETLAOXTOC')
,(15, 94, N'TEPETLIXPA')
,(15, 95, N'TEPOTZOTLAN')
,(15, 96, N'TEQUIXQUIAC')
,(15, 97, N'TEXCALTITLAN')
,(15, 98, N'TEXCALYACAC')
,(15, 99, N'TEXCOCO')
,(15, 100, N'TEZOYUCA')
,(15, 101, N'TIANGUISTENCO')
,(15, 102, N'TIMILPAN')
,(15, 103, N'TLALMANALCO')
,(15, 104, N'TLALNEPANTLA DE BAZ')
,(15, 105, N'TLATLAYA')
,(15, 106, N'TOLUCA')
,(15, 107, N'TONATICO')
,(15, 108, N'TULTEPEC')
,(15, 109, N'TULTITLAN')
,(15, 110, N'VALLE DE BRAVO')
,(15, 111, N'VILLA DE ALLENDE')
,(15, 112, N'VILLA DEL CARBON')
,(15, 113, N'VILLA GUERRERO')
,(15, 114, N'VILLA VICTORIA')
,(15, 115, N'XONACATLAN')
,(15, 116, N'ZACAZONAPAN')
,(15, 117, N'ZACUALPAN')
,(15, 118, N'ZINACANTEPEC')
,(15, 119, N'ZUMPAHUACAN')
,(15, 120, N'ZUMPANGO')
,(15, 121, N'CUAUTITLAN IZCALLI')
,(15, 122, N'VALLE DE CHALCO SOLIDARIDAD')
,(15, 123, N'LUVIANOS')
,(15, 124, N'SAN JOSE DEL RINCON')
,(15, 125, N'TONANITLA')
GO
ALTER TABLE [Municipios]  WITH CHECK ADD  CONSTRAINT [Fk_Mun_FkEstadosId] FOREIGN KEY([FkEstadosId])
REFERENCES [Estados] ([EstadosId])
GO
ALTER TABLE [Municipios] CHECK CONSTRAINT [Fk_Mun_FkEstadosId]
GO
```

Visual Studio Code

https://code.visualstudio.com/download

Extension para probar con Visual Studio Code

[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

DENTRO DE VSCODE SELECCIONAR EL GET O POST  DESPUES F1(Rest Client:Send Request)
```
GET  http://localhost:3000/api/Estados

###

POST http://localhost:3000/api/Estados
content-type: application/json

{
    "Nombre": "sample"
}
```


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


