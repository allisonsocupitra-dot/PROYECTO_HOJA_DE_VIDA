import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  textoBoton: string;
  nombreIcono: React.ComponentProps<typeof Ionicons>["name"];
  colorBoton: string;
  onPress: () => void;
};

const MiBoton = ({ textoBoton, nombreIcono, colorBoton, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        estilos.boton,
        { backgroundColor: colorBoton, opacity: pressed ? 0.7 : 1 },
      ]}
    >
      <Ionicons name={nombreIcono} size={20} color="#fff" />
      <Text style={estilos.texto}>{textoBoton}</Text>
    </Pressable>
  );
};

export default MiBoton;

const estilos = StyleSheet.create({
  boton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    gap: 8,
  },
  texto: { color: "#fff", fontWeight: "bold", fontSize: 15 },
});