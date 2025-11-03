import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Interfaz para el tipo de Tarea
interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
}

export default function App() {
  const router = useRouter();
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [titulo, setTitulo] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");
  const [editandoId, setEditandoId] = useState<number | null>(null);

  // Agregar o actualizar tarea
  const agregarTarea = () => {
    if (titulo.trim() === "") {
      Alert.alert("Error", "El título de la tarea no puede estar vacío");
      return;
    }

    if (editandoId !== null) {
      // Editar tarea existente
      setTareas(
        tareas.map((tarea) =>
          tarea.id === editandoId ? { ...tarea, titulo, descripcion } : tarea
        )
      );
      setEditandoId(null);
      Alert.alert("Éxito", "Tarea actualizada correctamente");
    } else {
      // Agregar nueva tarea
      const nuevaTarea = {
        id: Date.now(),
        titulo,
        descripcion,
        completada: false,
      };
      setTareas([...tareas, nuevaTarea]);
      Alert.alert("Éxito", "Tarea agregada correctamente");
    }

    // Limpiar campos
    setTitulo("");
    setDescripcion("");
  };

  // Editar tarea
  const editarTarea = (tarea: Tarea) => {
    setTitulo(tarea.titulo);
    setDescripcion(tarea.descripcion);
    setEditandoId(tarea.id);
  };

  // Eliminar tarea
  const eliminarTarea = (id: number) => {
    Alert.alert(
      "Confirmar",
      "¿Estás seguro de que quieres eliminar esta tarea?",
      [
        { text: "Cancelar", onPress: () => {}, style: "cancel" },
        {
          text: "Eliminar",
          onPress: () => {
            setTareas(tareas.filter((tarea) => tarea.id !== id));
            Alert.alert("Éxito", "Tarea eliminada correctamente");
          },
          style: "destructive",
        },
      ]
    );
  };

  // Alternar estado de completado
  const toggleCompletada = (id: number) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  // Renderizar cada tarea
  const renderTarea = ({ item }: { item: Tarea }) => (
    <View style={styles.tareaItem}>
      <TouchableOpacity
        style={styles.checkBox}
        onPress={() => toggleCompletada(item.id)}
      >
        <MaterialIcons
          name={item.completada ? "check-box" : "check-box-outline-blank"}
          size={24}
          color={item.completada ? "#4CAF50" : "#999"}
        />
      </TouchableOpacity>

      <View style={styles.tareaContenido}>
        <Text
          style={[
            styles.tareaTitulo,
            item.completada && styles.tareaCompletada,
          ]}
        >
          {item.titulo}
        </Text>
        {item.descripcion ? (
          <Text
            style={[
              styles.tareaDescripcion,
              item.completada && styles.tareaCompletada,
            ]}
          >
            {item.descripcion}
          </Text>
        ) : null}
      </View>

      <TouchableOpacity
        style={styles.botonEditar}
        onPress={() => editarTarea(item)}
      >
        <MaterialIcons name="edit" size={20} color="#2196F3" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botonEliminar}
        onPress={() => eliminarTarea(item.id)}
      >
        <MaterialIcons name="delete" size={20} color="#f44336" />
      </TouchableOpacity>
    </View>
  );

  // Función para cerrar sesión
  const handleLogout = () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro de que quieres cerrar sesión?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Cerrar Sesión",
          onPress: () => {
            router.push("/login");
          },
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View style={styles.contenedor}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.titulo}>Mi Lista de Tareas</Text>
          <Text style={styles.subtitulo}>
            {tareas.length} tarea{tareas.length !== 1 ? "s" : ""}
          </Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Formulario */}
        <View style={styles.formulario}>
          <Text style={styles.etiqueta}>Título de la Tarea</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Hacer compras"
            value={titulo}
            onChangeText={setTitulo}
            placeholderTextColor="#999"
          />

          <Text style={styles.etiqueta}>Descripción (Opcional)</Text>
          <TextInput
            style={[styles.input, styles.inputMultilinea]}
            placeholder="Ej: Ir al supermercado a comprar verduras"
            value={descripcion}
            onChangeText={setDescripcion}
            multiline
            numberOfLines={3}
            placeholderTextColor="#999"
          />

          <TouchableOpacity style={styles.botonGuardar} onPress={agregarTarea}>
            <MaterialIcons name="add" size={24} color="#fff" />
            <Text style={styles.textoBotonGuardar}>
              {editandoId ? "Actualizar Tarea" : "Agregar Tarea"}
            </Text>
          </TouchableOpacity>

          {editandoId && (
            <TouchableOpacity
              style={styles.botonCancelar}
              onPress={() => {
                setTitulo("");
                setDescripcion("");
                setEditandoId(null);
              }}
            >
              <Text style={styles.textoBotonCancelar}>Cancelar Edición</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Lista de Tareas */}
        <View style={styles.listado}>
          {tareas.length === 0 ? (
            <View style={styles.sinTareas}>
              <MaterialIcons name="task-alt" size={48} color="#ccc" />
              <Text style={styles.textoSinTareas}>
                No hay tareas aún. ¡Crea una para comenzar!
              </Text>
            </View>
          ) : (
            <FlatList
              data={tareas}
              renderItem={renderTarea}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#2196F3",
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  headerLeft: {
    flex: 1,
  },
  logoutButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitulo: {
    fontSize: 14,
    color: "#E3F2FD",
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  formulario: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  etiqueta: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 12,
    fontSize: 14,
    backgroundColor: "#fafafa",
    color: "#333",
  },
  inputMultilinea: {
    height: 80,
    textAlignVertical: "top",
  },
  botonGuardar: {
    backgroundColor: "#4CAF50",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 6,
    marginTop: 16,
    elevation: 2,
  },
  textoBotonGuardar: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
    marginLeft: 8,
  },
  botonCancelar: {
    backgroundColor: "#f44336",
    padding: 12,
    borderRadius: 6,
    marginTop: 8,
    alignItems: "center",
  },
  textoBotonCancelar: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  listado: {
    marginBottom: 20,
  },
  tareaItem: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  checkBox: {
    marginRight: 12,
  },
  tareaContenido: {
    flex: 1,
  },
  tareaTitulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  tareaDescripcion: {
    fontSize: 13,
    color: "#666",
  },
  tareaCompletada: {
    color: "#999",
    textDecorationLine: "line-through",
  },
  botonEditar: {
    padding: 8,
    marginRight: 8,
  },
  botonEliminar: {
    padding: 8,
  },
  sinTareas: {
    alignItems: "center",
    paddingVertical: 40,
  },
  textoSinTareas: {
    fontSize: 16,
    color: "#999",
    marginTop: 12,
    textAlign: "center",
  },
});
