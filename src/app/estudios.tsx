import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../Componentes/TarjetaEstudio";

const Estudios = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Ionicons name="school" size={90} color="#2563eb" />
        <Text style={estilos.nombre}>Allison Sofia Cupitra Portilla</Text>
        <Text style={estilos.seccionTitulo}>Estudios</Text>
      </View>

      <View style={estilos.lista}>
        <TarjetaEstudio titulo="Bachiller" institucion="Tu colegio" anio={2022} enCurso={false} />
        <TarjetaEstudio titulo="Técnico" institucion="Tu institución" anio={2023} enCurso={false} />
        <TarjetaEstudio titulo="Tecnólogo en ADSO" institucion="SENA" anio={2026} enCurso={true} />
      </View>
    </ScrollView>
  );
};

export default Estudios;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 22, fontWeight: "bold", color: "#0f172a", marginTop: 8, textAlign: "center" },
  seccionTitulo: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
  lista: { backgroundColor: "#fff", padding: 12, borderRadius: 12, elevation: 1 },
});