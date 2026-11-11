import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../Componentes/TarjetaEstudio";
import { useTema } from "../context/TemaContext";

const Estudios = () => {
  const { c } = useTema();

  return (
    <ScrollView
      style={[estilos.contenedor, { backgroundColor: c.fondo }]}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Ionicons name="school" size={90} color={c.primario} />
        <Text style={[estilos.nombre, { color: c.texto }]}>
          Allison Sofia Cupitra Portilla
        </Text>
        <Text style={[estilos.seccionTitulo, { color: c.primario }]}>
          Estudios
        </Text>
      </View>

      <View style={[estilos.lista, { backgroundColor: c.tarjeta }]}>
        <TarjetaEstudio
          titulo="Bachiller"
          institucion="Tu colegio"
          anio={2025}
          enCurso={false}
        />
        <TarjetaEstudio
          titulo="Técnico"
          institucion="Tu institución"
          anio={2025}
          enCurso={false}
        />
        <TarjetaEstudio
          titulo="Tecnólogo en ADSO"
          institucion="SENA"
          anio={2026}
          enCurso={true}
        />
      </View>
    </ScrollView>
  );
};

export default Estudios;

const estilos = StyleSheet.create({
  contenedor: { flex: 1 },
  contenido: { padding: 20 },
  encabezado: { alignItems: "center", marginBottom: 20 },
  nombre: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
  seccionTitulo: { fontSize: 16, fontWeight: "600" },
  lista: { padding: 12, borderRadius: 12, elevation: 1 },
});