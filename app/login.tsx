import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  // Función de login
  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Por favor ingresa un email válido");
      return;
    }

    // Simulación de login exitoso
    Alert.alert("Éxito", `Bienvenido ${email}`, [
      {
        text: "OK",
        onPress: () => {
          // Navegar a la pantalla principal
          router.push("/(tabs)");
        },
      },
    ]);
  };

  // Función de registro
  const handleRegister = () => {
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Por favor ingresa un email válido");
      return;
    }

    // Simulación de registro exitoso
    Alert.alert("Éxito", "Usuario registrado correctamente", [
      {
        text: "OK",
        onPress: () => {
          setIsLogin(true);
        },
      },
    ]);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo/Header */}
        <View style={styles.headerContainer}>
          <MaterialIcons name="task-alt" size={80} color="#2196F3" />
          <Text style={styles.appTitle}>To-Do List</Text>
          <Text style={styles.appSubtitle}>Organiza tus tareas</Text>
        </View>

        {/* Formulario */}
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>
            {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
          </Text>

          {/* Campo Email */}
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="email"
              size={20}
              color="#666"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#999"
            />
          </View>

          {/* Campo Contraseña */}
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="lock"
              size={20}
              color="#666"
              style={styles.inputIcon}
            />
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              <MaterialIcons
                name={showPassword ? "visibility" : "visibility-off"}
                size={20}
                color="#666"
              />
            </TouchableOpacity>
          </View>

          {/* Botón Principal */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={isLogin ? handleLogin : handleRegister}
          >
            <Text style={styles.primaryButtonText}>
              {isLogin ? "Iniciar Sesión" : "Registrarse"}
            </Text>
          </TouchableOpacity>

          {/* Botón Cambiar Modo */}
          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>
              {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
            </Text>
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
              <Text style={styles.switchButton}>
                {isLogin ? "Regístrate" : "Inicia Sesión"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Botón Continuar sin Login */}
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => router.push("/(tabs)")}
          >
            <Text style={styles.skipButtonText}>Continuar sin cuenta</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Al continuar, aceptas nuestros términos y condiciones
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2196F3",
    marginTop: 16,
  },
  appSubtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 8,
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 24,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#333",
  },
  passwordInput: {
    paddingRight: 40,
  },
  eyeIcon: {
    position: "absolute",
    right: 12,
    padding: 8,
  },
  primaryButton: {
    backgroundColor: "#2196F3",
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    elevation: 2,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  switchText: {
    color: "#666",
    fontSize: 14,
    marginRight: 4,
  },
  switchButton: {
    color: "#2196F3",
    fontSize: 14,
    fontWeight: "600",
  },
  skipButton: {
    marginTop: 16,
    padding: 12,
    alignItems: "center",
  },
  skipButtonText: {
    color: "#999",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  footer: {
    marginTop: 32,
    alignItems: "center",
  },
  footerText: {
    color: "#999",
    fontSize: 12,
    textAlign: "center",
  },
});
