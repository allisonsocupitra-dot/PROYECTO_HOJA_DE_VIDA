import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MiBoton from "../Componentes/MiBoton";
import { useTema } from "../context/TemaContext";

type Contacto = {
  id: string;
  texto: string;
  icono: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  etiqueta: string;
  dato: string;
};

const contactos: Contacto[] = [
  { id: "correo", texto: "Enviar Correo", icono: "mail", color: "#E8D464", etiqueta: "Correo", dato: "tucorreo@misena.edu.co" },
  { id: "telefono", texto: "Llamar", icono: "call", color: "#5B7FE8", etiqueta: "Teléfono", dato: "300 000 0000" },
  { id: "linkedin", texto: "Ver Perfil LinkedIn", icono: "logo-linkedin", color: "#0A66C2", etiqueta: "LinkedIn", dato: "linkedin.com/in/tu-usuario" },
  { id: "facebook", texto: "Facebook", icono: "logo-facebook", color: "#1877F2", etiqueta: "Facebook", dato: "facebook.com/tu-usuario" },
  { id: "github", texto: "GitHub", icono: "logo-github", color: "#24292f", etiqueta: "Repositorio", dato: "github.com/allisonsocupitra-dot/PROYECTO_HOJA_DE_VIDA" },
];

const Inicio = () => {
  const { c } = useTema();
  const [abierto, setAbierto] = useState<string | null>(null);

  const alternar = (id: string) => setAbierto(abierto === id ? null : id);

  return (
    <ScrollView
      style={[estilos.contenedor, { backgroundColor: c.fondo }]}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.avatarContenedor}>
        <Ionicons name="person-circle" size={100} color={c.primario} />
        <Text style={[estilos.nombre, { color: c.texto }]}>
          Allison Sofia Cupitra Portilla
        </Text>
        <Text style={[estilos.profesion, { color: c.primario }]}>
          Tecnólogo en ADSO
        </Text>
      </View>

      <View style={[estilos.seccion, { backgroundColor: c.tarjeta }]}>
        <Text style={[estilos.subtitulo, { color: c.texto }]}>Perfil Profesional</Text>
        <Text style={[estilos.parrafo, { color: c.textoSec }]}>
          Aprendiz del SENA apasionada por el desarrollo de aplicaciones móviles
          y web. Con habilidades en React Native, JavaScript, HTML5, Python y
          gestión de bases de datos relacionales y no relacionales.
        </Text>
      </View>

      <View style={[estilos.seccion, { backgroundColor: c.tarjeta }]}>
        <Text style={[estilos.subtitulo, { color: c.texto }]}>Contacto</Text>

        {contactos.map((item) => (
          <View key={item.id}>
            <MiBoton
              textoBoton={item.texto}
              nombreIcono={item.icono}
              colorBoton={item.color}
              onPress={() => alternar(item.id)}
            />
            {abierto === item.id && (
              <View
                style={[
                  estilos.detalle,
                  { borderLeftColor: item.color, backgroundColor: c.detalle },
                ]}
              >
                <Text style={[estilos.detalleEtiqueta, { color: c.textoTenue }]}>
                  {item.etiqueta}
                </Text>
                <Text style={[estilos.detalleDato, { color: c.texto }]} selectable>
                  {item.dato}
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
  contenedor: { flex: 1 },
  contenido: { padding: 20 },
  avatarContenedor: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 24, fontWeight: "bold", marginTop: 8, textAlign: "center" },
  profesion: { fontSize: 16, fontWeight: "600" },
  seccion: { padding: 16, borderRadius: 12, marginBottom: 16, elevation: 1 },
  subtitulo: { fontSize: 16, fontWeight: "bold", marginBottom: 8 },
  parrafo: { fontSize: 14, lineHeight: 20 },
  detalle: { borderLeftWidth: 4, borderRadius: 8, padding: 12, marginBottom: 6 },
  detalleEtiqueta: { fontSize: 12, fontWeight: "600" },
  detalleDato: { fontSize: 15, fontWeight: "bold", marginTop: 2 },
});