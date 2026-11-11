import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Pressable } from "react-native";
import { TemaProvider, useTema } from "../context/TemaContext";

function Pestanas() {
  const { oscuro, alternarTema, c } = useTema();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: c.primario,
        tabBarInactiveTintColor: c.textoTenue,
        tabBarStyle: { backgroundColor: c.tarjeta, borderTopColor: c.borde },
        headerStyle: { backgroundColor: c.tarjeta },
        headerTintColor: c.texto,
        headerRight: () => (
          <Pressable onPress={alternarTema} style={{ marginRight: 16 }}>
            <Ionicons
              name={oscuro ? "sunny-outline" : "moon-outline"}
              size={24}
              color={c.texto}
            />
          </Pressable>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerTitle: "Datos Personales",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="estudios"
        options={{
          title: "Estudios",
          headerTitle: "Formación Académica",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="school-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="experiencia"
        options={{
          title: "Experiencia",
          headerTitle: "Experiencia Laboral",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="hobbies"
        options={{
          title: "Hobbies",
          headerTitle: "Intereses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default function Layout() {
  return (
    <TemaProvider>
      <Pestanas />
    </TemaProvider>
  );
}