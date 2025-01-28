# FoodLivery API

Bienvenido a la documentación de FoodLivery, una API en desarrollo diseñada para gestionar pedidos y entregas de comida de manera eficiente. Este proyecto está siendo construido utilizando TypeScript, Node.js y Express.

## Introducción

FoodLivery API es una aplicación moderna que busca simplificar la gestión de pedidos para restaurantes y clientes. Este proyecto aún se encuentra en una fase inicial de desarrollo, por lo que se irán añadiendo nuevas funcionalidades en futuras versiones.

---

## Tecnologías utilizadas para el desarrollo

- **Node.js**: Entorno de ejecución de JavaScript en el servidor.  
- **TypeScript**: Lenguaje tipado que mejora la calidad del código y la experiencia de desarrollo.  
- **Express**: Framework minimalista para construir aplicaciones web y APIs.  
- **Zod**: Utilizado para la validación y tipado de datos de forma segura.  
- **Insomnia**: Herramienta recomendada para probar las rutas de la API durante el desarrollo.  
- **Prisma ORM**: Utilizado para la interacción con la base de datos de forma sencilla y eficiente.  
- **Docker Compose**: Facilita la creación y gestión de contenedores para entornos de desarrollo y producción.
- **JWT (JSON Web Tokens)**: Utilizado para implementar la autenticación basada en tokens de manera segura.   

---

## Requisitos previos

Antes de empezar, asegúrate de tener instaladas las siguientes herramientas en tu entorno de desarrollo:

- **Node.js** >= versión 12.x  
- **TypeScript**  
- **Docker** y **Docker Compose**  
- Otras dependencias listadas en el archivo `package.json`  
- **Insomnia** (opcional, pero recomendado para pruebas de la API)

---

## Instalación

### Instalar dependencias:

```bash
npm install
```

## Configurar las variables de entorno:
Crea un archivo .env en la raíz del proyecto y define las variables necesarias, como la configuración de la base de datos, claves de API, etc.



## Configurar y ejecutar los contenedores con Docker Compose:
Asegúrate de tener un archivo docker-compose.yml configurado en tu proyecto. Luego ejecuta:

```bash
docker-compose up -d
```

Esto iniciará los servicios necesarios, como la base de datos, junto con la aplicación.

## Compilar el proyecto (si usas TypeScript):

```bash
npm run build
```

Iniciar el servidor en modo desarrollo:

```bash
npm start
```

### Acceso local a la API:
Por defecto, la API estará disponible en http://localhost:3000 (o en otro puerto definido en el archivo .env).

## Pruebas de la API
Se recomienda el uso de Insomnia para probar las rutas de la API. Puedes descargar Insomnia desde su sitio oficial: https://insomnia.rest/.

Para facilitar las pruebas, se proporcionará próximamente un archivo de configuración de Insomnia con todas las rutas de la API.

## Estructura del proyecto
La estructura del proyecto se organiza de la siguiente manera:

src/: Código fuente principal de la aplicación.
dist/: Código compilado (si procede).
routes/: Define las rutas de la API.
controllers/: Contiene la lógica de control para gestionar los datos.
models/: Modelos de datos (si aplica).
middlewares/: Middlewares personalizados (autenticación, validación, etc.).


## Validación de datos con Zod
Para la validación de datos, se utiliza Zod. Esta biblioteca permite definir y validar esquemas de datos de manera sencilla y con un excelente soporte para TypeScript.

Ejemplo básico de un esquema con Zod:

```typescript
import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

// Validar datos
const userData = {
  name: "Juan Pérez",
  email: "juan.perez@example.com",
  password: "12345678",
};

const result = UserSchema.safeParse(userData);

if (result.success) {
  console.log("Datos válidos:", result.data);
} else {
  console.error("Errores de validación:", result.error.errors);
}
```

## Configuración de la base de datos con Prisma
Se utiliza Prisma ORM para interactuar con la base de datos. Asegúrate de configurar el cliente Prisma ejecutando los siguientes pasos:

1. Instalar Prisma CLI:

```bash
npm install prisma --save-dev
```

2. Inicializar Prisma:

```bash
npx prisma init
```
Esto generará un archivo prisma/schema.prisma donde definirás tu esquema de base de datos.

3. Ejecutar migraciones:

```bash
npx prisma migrate dev --name init
```

4. Generar el cliente Prisma:

```bash
npx prisma generate
```

Ahora puedes usar Prisma para consultar la base de datos de manera eficiente. Ejemplo básico:

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUsers() {
  const users = await prisma.user.findMany();
  console.log(users);
}

getUsers();
```

## Funcionalidades principales (próximamente)
- Autenticación de usuarios.
- Gestión de restaurantes y menús.
- Procesamiento de pedidos.
- Seguimiento de entregas en tiempo real.
  
## Cómo contribuir
¡Las contribuciones son bienvenidas! Para colaborar en el desarrollo de FoodLivery API, sigue estos pasos:

1. Haz un fork del repositorio.

2. Crea una rama:
```bash
git checkout -b feature/nueva-funcionalidad
```

3. Realiza tus cambios y haz commit:
```bash
git commit -am 'Añadir nueva funcionalidad'
```

4. Haz push de tus cambios:
```bash
git push origin feature/nueva-funcionalidad
```

5. Crea un Pull Request para que revisemos tus aportaciones.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT.
