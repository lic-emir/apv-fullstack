
# Administrador de Pacientes de Veterinario (APV)

Aplicación MERN para registrar datos de pacientes (las mascotas y sus dueños) y médicos veterinarios. Al registrar un paciente, este se le asigna al medico que este logeado en el sistema en ese momento.


## Demo

[Ver Demostración](https://system-veterinarios-mern.netlify.app/)

![Preview](./frontend/public/apv-fullstack.png)

## Features

- Registrar usuario del médico mediante email
- Confirmación de cuenta vía email
- Registrar nombre de la mascota, nombre del propietario, email del propietario, fecha de alta y síntomas
- Editar los datos del paciente y su dueño
- Eliminar registro de un paciente en específico
- Modificar datos del perfil de la cuenta


## Tech Stack

**Backend:** 
* ![Node](https://img.shields.io/badge/node.js-v22.15.1-339933?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express Version](https://img.shields.io/badge/express-%5E5.2.1-0A0A0A?style=for-the-badge&logo=express&logoColor=white)
* ![Static Badge](https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
* ![Mongoose Version](https://img.shields.io/badge/mongoose-%5E9.6.2-880000?style=for-the-badge&logo=mongoose&logoColor=white)

**Frontend**
* ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
* ![Static Badge](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
* ![React Version](https://img.shields.io/badge/react-v19.2.14-61DAFB?style=for-the-badge&logo=react&logoColor=white)

**Deploy**
* [![Netlify Status](https://api.netlify.com/api/v1/badges/33cff00f-5cba-4300-ba20-106f23f9ffb5/deploy-status)](https://app.netlify.com/projects/system-veterinarios-mern/deploys)




## Installation

#### 1) Clonar el repositorio
```bash
    git clone https://github.com/lic-emir/apv-fullstack.git
    cd apv-fullstack
```
#### 2) Instalar las dependencias del backend
```bash
    cd backend
    npm install
```
#### 3) Crear el archivo .env para el backend
Para GNU-Linux / macOS
```bash
    touch .env
```
Para Windows
```bash
    New-Item -Path . -Name ".env" -ItemType "File"
```
El archivo .env debe tener las siguientes variables, y sus valores deben ser definidos por ti
- MONGO_URI
- JWT_SECRET
- EMAIL_USER
- EMAIL_PASS
- EMAIL_HOST
- EMAIL_PORT
- FRONTEND_URL
#### 4) Instalar las dependencias de frontend
```bash
    cd frontend
    npm install
```
#### 5) Crear el archivo .env para el frontend
Para GNU-Linux / macOS
```bash
    touch .env
```
Para Windows
```bash
    New-Item -Path . -Name ".env" -ItemType "File"
```
El archivo .env debe tener la siguiente variable y su valor debe ser definido por ti:
- VITE_BACKEND_URL

#### 6) Iniciar la aplicación
```bash
    # En una terminal para el backend
    cd backend
    npm run dev
    
    # En otra terminal para el frontend
    cd frontend
    npm run dev
```
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Acknowledgements

 - [Tailwind CSS](https://tailwindcss.com/)
 - [Profesor](https://github.com/codigoconjuan)
 