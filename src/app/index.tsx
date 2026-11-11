import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MiBoton from "../Componentes/MiBoton";

type Contacto = {
  id: string;
  texto: string;
  icono: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  etiqueta: string;
  dato: string;
};

const contactos: Contacto[] = [
  { id: "correo", texto: "Enviar Correo", icono: "mail", color: "#E8D464", etiqueta: "Correo", dato: "allisonsofia@misena.edu.co" },
  { id: "telefono", texto: "Llamar", icono: "call", color: "#5B7FE8", etiqueta: "Teléfono", dato: "320 376 4253" },
  { id: "linkedin", texto: "Ver Perfil LinkedIn", icono: "logo-linkedin", color: "#0A66C2", etiqueta: "LinkedIn", dato: "linkedin.com/in/tu-usuario" },
  { id: "facebook", texto: "Facebook", icono: "logo-facebook", color: "#1877F2", etiqueta: "Facebook", dato: "facebook.com/tu-usuario" },
  { id: "github", texto: "GitHub", icono: "logo-github", color: "#24292f", etiqueta: "Repositorio", dato: "github.com/allisonsocupitra-dot/PROYECTO_HOJA_DE_VIDA" },
];

const Inicio = () => {
  const [abierto, setAbierto] = useState<string | null>(null);

  const alternar = (id: string) => {
    setAbierto(abierto === id ? null : id);
  };

  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.avatarContenedor}>
        <Ionicons name="person-circle" size={100} color="#2563eb" />
        <Text style={estilos.nombre}>Allison Sofia Cupitra Portilla</Text>
        <Text style={estilos.profesion}>Tecnólogo en ADSO</Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Perfil Profesional</Text>
        <Text style={estilos.parrafo}>
          Aprendiz del SENA apasionada por el desarrollo de aplicaciones móviles
          y web. Con habilidades en React Native, JavaScript, HTML5, Python y
          gestión de bases de datos relacionales y no relacionales.
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Contacto</Text>

        {contactos.map((c) => (
          <View key={c.id}>
            <MiBoton
              textoBoton={c.texto}
              nombreIcono={c.icono}
              colorBoton={c.color}
              onPress={() => alternar(c.id)}
            />
            {abierto === c.id && (
              <View style={[estilos.detalle, { borderLeftColor: c.color }]}>
                <Text style={estilos.detalleEtiqueta}>{c.etiqueta}</Text>
                <Text style={estilos.detalleDato} selectable>
                  {c.dato}
                </Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Inicio;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  avatarContenedor: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 24, fontWeight: "bold", color: "#0f172a", marginTop: 8, textAlign: "center" },
  profesion: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
  seccion: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
  },
  subtitulo: { fontSize: 16, fontWeight: "bold", color: "#1e293b", marginBottom: 8 },
  parrafo: { fontSize: 14, color: "#475569", lineHeight: 20 },
  detalle: {
    backgroundColor: "#f1f5f9",
    borderLeftWidth: 4,
    borderRadius: 8,
    padding: 12,
    marginBottom: 6,
  },
  detalleEtiqueta: { fontSize: 12, color: "#64748b", fontWeight: "600" },
  detalleDato: { fontSize: 15, color: "#0f172a", fontWeight: "bold", marginTop: 2 },
});