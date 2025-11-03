# 📝 To-Do List - Aplicación Móvil

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

Una aplicación móvil moderna y completa para gestionar tareas pendientes, desarrollada con React Native y Expo. Permite a los usuarios crear, editar, completar y eliminar tareas de manera intuitiva y eficiente.

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Características](#-características)
- [Arquitectura](#-arquitectura)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Requisitos del Sistema](#-requisitos-del-sistema)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Componentes Principales](#-componentes-principales)
- [Diseño y UI/UX](#-diseño-y-uiux)
- [Funcionalidades](#-funcionalidades)
- [Evolución Futura](#-evolución-futura)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

## 🎯 Descripción del Proyecto

**To-Do List** es una aplicación móvil multiplataforma (iOS, Android, Web) que permite a los usuarios gestionar sus tareas diarias de manera eficiente. La aplicación está desarrollada con React Native y Expo, proporcionando una experiencia de usuario fluida y moderna.

### Objetivos del Proyecto

- ✅ Crear una interfaz intuitiva para la gestión de tareas
- ✅ Implementar operaciones CRUD completas (Crear, Leer, Actualizar, Eliminar)
- ✅ Proporcionar feedback visual inmediato al usuario
- ✅ Garantizar una experiencia de usuario consistente en múltiples plataformas
- 🔄 Preparar la base para funcionalidades avanzadas futuras

## ✨ Características

### Funcionalidades Actuales

- **➕ Agregar Tareas**: Crear nuevas tareas con título y descripción opcional
- **✏️ Editar Tareas**: Modificar tareas existentes
- **✅ Marcar como Completadas**: Indicador visual de tareas completadas
- **🗑️ Eliminar Tareas**: Remover tareas con confirmación previa
- **📊 Contador de Tareas**: Visualización del total de tareas pendientes
- **🎨 Interfaz Moderna**: Diseño Material Design con iconos de MaterialIcons
- **⚡ Rendimiento Optimizado**: Lista virtualizada con FlatList
- **📱 Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla

### Funcionalidades Planificadas (Roadmap)

- 💾 Almacenamiento local persistente (AsyncStorage)
- 🔐 Autenticación de usuarios
- 🌐 Sincronización con APIs externas
- 🏷️ Sistema de categorías y etiquetas
- 📅 Fechas de vencimiento y recordatorios
- 🔍 Búsqueda y filtros avanzados
- 🌙 Modo oscuro
- 🔄 Sincronización en la nube

## 🏗️ Arquitectura

### Patrón de Diseño

La aplicación sigue una arquitectura **Component-Based** con gestión de estado mediante **React Hooks**, siguiendo los principios de:

- **Single Responsibility**: Cada función tiene una responsabilidad única
- **Separation of Concerns**: Lógica de negocio separada de la presentación
- **Immutability**: Estado inmutable con actualizaciones mediante funciones puras

### Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────────┐
│                     PRESENTACIÓN                         │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │   Header    │  │   Formulario │  │  Lista Tareas │  │
│  │  Component  │  │   Component  │  │   Component   │  │
│  └─────────────┘  └──────────────┘  └───────────────┘  │
└─────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────┐
│                    LÓGICA DE NEGOCIO                     │
│  ┌────────────────────────────────────────────────────┐ │
│  │             React Hooks (useState)                  │ │
│  │  • agregarTarea()    • eliminarTarea()             │ │
│  │  • editarTarea()     • toggleCompletada()          │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────┐
│                    CAPA DE DATOS                         │
│  ┌────────────────────────────────────────────────────┐ │
│  │          Estado Local (useState)                    │ │
│  │  • tareas[]      • titulo                          │ │
│  │  • descripcion   • editandoId                      │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │          Futuro: AsyncStorage / API                 │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### Flujo de Datos

```
Usuario Interactúa → Evento (onPress/onChange)
        ↓
    Handler Function
        ↓
    Actualiza Estado (setState)
        ↓
    Re-render Componente
        ↓
    Actualiza UI
```

## 🛠️ Tecnologías Utilizadas

### Frontend (Mobile)

| Tecnología            | Versión | Propósito                                  |
| --------------------- | ------- | ------------------------------------------ |
| **React Native**      | Latest  | Framework principal para desarrollo móvil  |
| **Expo**              | Latest  | Herramientas y servicios para React Native |
| **TypeScript**        | 5.x     | Tipado estático y mejor DX                 |
| **React Hooks**       | 18.x    | Gestión de estado y efectos                |
| **Expo Vector Icons** | Latest  | Iconografía (MaterialIcons)                |

### Herramientas de Desarrollo

- **Node.js** (v18+): Entorno de ejecución
- **npm/yarn**: Gestión de paquetes
- **ESLint**: Linting de código
- **Prettier**: Formateo de código
- **Git**: Control de versiones

### Componentes React Native Utilizados

```javascript
// Componentes Core
View, Text, TextInput, TouchableOpacity,
FlatList, ScrollView, Alert, StyleSheet

// Expo Components
MaterialIcons (from @expo/vector-icons)
```

## 📦 Requisitos del Sistema

### Desarrollo

- **Node.js**: v18.0.0 o superior
- **npm**: v8.0.0 o superior (o yarn v1.22.0+)
- **Expo CLI**: Instalado globalmente
- **Sistema Operativo**: Windows 10/11, macOS 10.15+, o Linux

### Dispositivos de Prueba

#### Para Android

- Android 5.0 (Lollipop) o superior
- Expo Go app instalada

#### Para iOS

- iOS 13.0 o superior
- Expo Go app instalada

#### Para Web

- Navegador moderno (Chrome, Firefox, Safari, Edge)

## 🚀 Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/felipeDev303/to-do-list.git
cd to-do-list
```

### 2. Instalar Dependencias

```bash
npm install
# o
yarn install
```

### 3. Iniciar el Servidor de Desarrollo

```bash
npx expo start
```

### 4. Ejecutar en Diferentes Plataformas

```bash
# Android
npx expo start --android

# iOS (requiere macOS)
npx expo start --ios

# Web
npx expo start --web
```

### 5. Usando Expo Go

1. Instala **Expo Go** en tu dispositivo móvil:

   - [Android - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)

2. Escanea el código QR mostrado en la terminal o navegador

3. La aplicación se cargará automáticamente en tu dispositivo

## 💻 Uso

### Agregar una Tarea

1. Ingresa el **título** de la tarea (obligatorio)
2. Opcionalmente, agrega una **descripción** detallada
3. Presiona el botón **"Agregar Tarea"**
4. La tarea aparecerá en la lista inferior

### Editar una Tarea

1. Presiona el ícono de **edición** (✏️) en la tarea deseada
2. Los campos se rellenarán con la información actual
3. Modifica el título o descripción
4. Presiona **"Actualizar Tarea"**
5. Para cancelar, presiona **"Cancelar Edición"**

### Completar/Descompletar una Tarea

1. Presiona el **checkbox** (☐) al inicio de la tarea
2. La tarea se marcará como completada (✅)
3. El texto mostrará un tachado
4. Presiona nuevamente para desmarcar

### Eliminar una Tarea

1. Presiona el ícono de **eliminar** (🗑️)
2. Confirma la acción en el diálogo
3. La tarea se eliminará permanentemente

## 📁 Estructura del Proyecto

```
to-do-list/
├── app/                          # Código fuente principal
│   ├── (tabs)/                   # Navegación por pestañas
│   │   ├── _layout.tsx          # Layout de las pestañas
│   │   ├── index.tsx            # ⭐ Pantalla principal (To-Do List)
│   │   └── explore.tsx          # Pantalla de exploración
│   ├── _layout.tsx              # Layout raíz de la aplicación
│   └── modal.tsx                # Pantalla modal
│
├── assets/                       # Recursos estáticos
│   └── images/                  # Imágenes y logos
│
├── components/                   # Componentes reutilizables
│   ├── ui/                      # Componentes de UI
│   │   ├── collapsible.tsx
│   │   ├── icon-symbol.tsx
│   │   └── icon-symbol.ios.tsx
│   ├── external-link.tsx
│   ├── haptic-tab.tsx
│   ├── hello-wave.tsx
│   ├── parallax-scroll-view.tsx
│   ├── themed-text.tsx
│   └── themed-view.tsx
│
├── constants/                    # Constantes y configuración
│   └── theme.ts                 # Tema de colores
│
├── hooks/                        # Custom Hooks
│   ├── use-color-scheme.ts
│   ├── use-color-scheme.web.ts
│   └── use-theme-color.ts
│
├── scripts/                      # Scripts de utilidad
│   └── reset-project.js
│
├── app.json                      # Configuración de Expo
├── package.json                  # Dependencias del proyecto
├── tsconfig.json                # Configuración de TypeScript
├── eslint.config.js             # Configuración de ESLint
├── expo-env.d.ts                # Tipos de Expo
└── README.md                     # Este archivo
```

## 🧩 Componentes Principales

### App Component (index.tsx)

Componente principal que gestiona toda la lógica de la aplicación.

```typescript
interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
}
```

#### Estados

```typescript
const [tareas, setTareas] = useState<Tarea[]>([]); // Lista de tareas
const [titulo, setTitulo] = useState<string>(""); // Título del formulario
const [descripcion, setDescripcion] = useState<string>(""); // Descripción del formulario
const [editandoId, setEditandoId] = useState<number | null>(null); // ID de tarea en edición
```

#### Funciones Principales

1. **`agregarTarea()`**

   - Valida que el título no esté vacío
   - Crea una nueva tarea o actualiza una existente
   - Limpia el formulario después de la operación

2. **`editarTarea(tarea: Tarea)`**

   - Carga los datos de la tarea en el formulario
   - Establece el modo de edición

3. **`eliminarTarea(id: number)`**

   - Muestra un diálogo de confirmación
   - Elimina la tarea del estado

4. **`toggleCompletada(id: number)`**

   - Alterna el estado de completado de una tarea

5. **`renderTarea({ item: Tarea })`**
   - Renderiza cada elemento de la lista
   - Componente optimizado para FlatList

### Secciones de la UI

#### Header

```tsx
<View style={styles.header}>
  <Text style={styles.titulo}>Mi Lista de Tareas</Text>
  <Text style={styles.subtitulo}>{tareas.length} tarea(s)</Text>
</View>
```

#### Formulario

```tsx
<View style={styles.formulario}>
  {/* Inputs de título y descripción */}
  {/* Botones de acción */}
</View>
```

#### Lista de Tareas

```tsx
<FlatList
  data={tareas}
  renderItem={renderTarea}
  keyExtractor={(item) => item.id.toString()}
/>
```

## 🎨 Diseño y UI/UX

### Paleta de Colores

```javascript
const colors = {
  primary: "#2196F3", // Azul principal
  success: "#4CAF50", // Verde (completado)
  danger: "#f44336", // Rojo (eliminar)
  info: "#2196F3", // Azul (editar)

  background: "#f5f5f5", // Fondo general
  surface: "#ffffff", // Tarjetas y formularios

  textPrimary: "#333", // Texto principal
  textSecondary: "#666", // Texto secundario
  textDisabled: "#999", // Texto deshabilitado

  border: "#ddd", // Bordes
  inputBg: "#fafafa", // Fondo de inputs
};
```

### Principios de Diseño

1. **Material Design**: Iconos y componentes siguiendo las guías de Material
2. **Espaciado Consistente**: Padding y margins múltiplos de 4/8px
3. **Feedback Visual**: Elevations, shadows y estados hover
4. **Accesibilidad**: Tamaños de fuente legibles, contraste adecuado
5. **Responsividad**: Diseño adaptable a diferentes tamaños de pantalla

### Tipografía

```javascript
const typography = {
  header: { fontSize: 28, fontWeight: "bold" },
  title: { fontSize: 16, fontWeight: "600" },
  body: { fontSize: 14, fontWeight: "normal" },
  caption: { fontSize: 13, fontWeight: "normal" },
  small: { fontSize: 12, fontWeight: "normal" },
};
```

### Animaciones y Transiciones

- **Shadows**: Elevación para profundidad visual
- **Border Radius**: 6-8px para suavidad
- **Opacity Changes**: En estados de completado
- **Text Decoration**: Line-through para tareas completadas

## ⚙️ Funcionalidades

### CRUD Completo

| Operación  | Descripción                | Estado          |
| ---------- | -------------------------- | --------------- |
| **Create** | Agregar nuevas tareas      | ✅ Implementado |
| **Read**   | Visualizar lista de tareas | ✅ Implementado |
| **Update** | Editar tareas existentes   | ✅ Implementado |
| **Delete** | Eliminar tareas            | ✅ Implementado |

### Validaciones

- ✅ Título obligatorio (no puede estar vacío)
- ✅ Descripción opcional
- ✅ Confirmación antes de eliminar
- ✅ Feedback visual con alertas

### Gestión de Estado

```javascript
// Estado inmutable - Ejemplo de actualización
setTareas(
  tareas.map((tarea) =>
    tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
  )
);
```

### Optimizaciones de Rendimiento

1. **FlatList Virtualizado**: Solo renderiza elementos visibles
2. **keyExtractor**: Identificación única de elementos
3. **scrollEnabled**: Deshabilitado en lista anidada
4. **Memo/Callback**: Preparado para optimizaciones futuras

## 🔮 Evolución Futura

### Fase 2: Persistencia Local

```javascript
// AsyncStorage para almacenamiento local
import AsyncStorage from "@react-native-async-storage/async-storage";

const guardarTareas = async (tareas) => {
  await AsyncStorage.setItem("tareas", JSON.stringify(tareas));
};
```

### Fase 3: Backend y API

```javascript
// Integración con API REST
const API_URL = "https://api.ejemplo.com/tareas";

const obtenerTareas = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};
```

### Fase 4: Autenticación

```javascript
// Firebase Authentication
import { auth } from "./firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
```

### Fase 5: Funcionalidades Avanzadas

- 📅 Calendario y recordatorios
- 🏷️ Categorías y etiquetas personalizadas
- 🔍 Búsqueda y filtros avanzados
- 📊 Estadísticas y productividad
- 🌐 Compartir tareas con otros usuarios
- 🔔 Notificaciones push
- 🌙 Tema oscuro/claro
- 🗣️ Soporte multiidioma (i18n)

## 🧪 Testing (Futuro)

### Estrategia de Testing

```bash
# Unit Tests
npm run test:unit

# Integration Tests
npm run test:integration

# E2E Tests
npm run test:e2e
```

### Frameworks Sugeridos

- **Jest**: Unit y integration tests
- **React Native Testing Library**: Component testing
- **Detox**: E2E testing

## 📱 Capturas de Pantalla

### Pantalla Principal

- Lista vacía con mensaje de bienvenida
- Formulario de creación de tareas
- Lista de tareas con acciones

### Estados de la Aplicación

- Estado inicial (sin tareas)
- Con tareas activas
- Tareas completadas
- Modo edición

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guía de Estilo

- Usa TypeScript para nuevos componentes
- Sigue las convenciones de naming de React
- Documenta funciones complejas
- Escribe tests para nuevas features

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autores

- **Felipe** - _Desarrollo Inicial_ - [@felipeDev303](https://github.com/felipeDev303)

## 🙏 Agradecimientos

- Expo Team por las excelentes herramientas
- React Native Community
- Material Design Icons
- Todos los contributors

## 📞 Soporte y Contacto

- **Issues**: [GitHub Issues](https://github.com/felipeDev303/to-do-list/issues)
- **Discusiones**: [GitHub Discussions](https://github.com/felipeDev303/to-do-list/discussions)
- **Email**: <felipe.dev303@example.com>

---

## 📊 Estado del Proyecto

![Estado](https://img.shields.io/badge/Estado-En%20Desarrollo-yellow)
![Versión](https://img.shields.io/badge/Versión-1.0.0-blue)
![Licencia](https://img.shields.io/badge/Licencia-MIT-green)

### Roadmap

- [x] Funcionalidades CRUD básicas
- [x] Interfaz de usuario moderna
- [x] Validaciones y feedback
- [ ] Persistencia local (AsyncStorage)
- [ ] Backend y API REST
- [ ] Autenticación de usuarios
- [ ] Sincronización en la nube
- [ ] Notificaciones push
- [ ] Modo oscuro
- [ ] Tests automatizados

---

**Desarrollado con ❤️ usando React Native y Expo**

_Última actualización: Noviembre 2025_
