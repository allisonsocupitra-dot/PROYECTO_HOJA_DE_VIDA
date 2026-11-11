import { Ionicons } from "@expo/vector-icons";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  nombre: string;
  icono: React.ComponentProps<typeof Ionicons>["name"];
  detalle: string;
};

const TarjetaHobby = ({ nombre, icono, detalle }: Props) => (
  <Pressable onPress={() => Alert.alert(nombre, detalle)}>
    <View style={estilos.tarjeta}>
      <Ionicons name={icono} size={32} color="#2563eb" />
      <Text style={estilos.nombre}>{nombre}</Text>
    </View>
  </Pressable>
);

export default TarjetaHobby;

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    elevation: 1,
  },
  nombre: { fontSize: 16, fontWeight: "600", color: "#0f172a" },
});