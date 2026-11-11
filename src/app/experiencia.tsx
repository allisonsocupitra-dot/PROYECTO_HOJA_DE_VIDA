import { ScrollView, StyleSheet } from "react-native";
import TarjetaExperiencia from "../Componentes/TarjetaExperiencia";
import { useTema } from "../context/TemaContext";

const Experiencia = () => {
  const { c } = useTema();

  return (
    <ScrollView
      style={[estilos.contenedor, { backgroundColor: c.fondo }]}
      contentContainerStyle={estilos.contenido}
    >
      <TarjetaExperiencia
        cargo="Desarrolladora de proyecto formativo"
        empresa="SENA - Proyecto de formación"
        periodo="2026 - Actualidad"
        descripcion="Desarrollo de aplicaciones con React Native y prácticas con control de versiones en Git."
      />
      <TarjetaExperiencia
        cargo="Participante de hackathon"
        empresa="Proyecto Inventarios-Hackton"
        periodo="2026"
        descripcion="Construcción de un carro de bodega con Arduino y software para gestionar rutas."
      />
      <TarjetaExperiencia
        cargo="Desarrolladora web"
        empresa="Proyecto Visor (personal)"
        periodo="2026"
        descripcion="App web de visualización de imágenes termográficas con React y TypeScript."
      />
    </ScrollView>
  );
};

export default Experiencia;

const estilos = StyleSheet.create({
  contenedor: { flex: 1 },
  contenido: { padding: 20 },
});