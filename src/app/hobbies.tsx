import { ScrollView, StyleSheet } from "react-native";
import TarjetaHobby from "../Componentes/TarjetaHobby";
import { useTema } from "../context/TemaContext";

const Hobbies = () => {
  const { c } = useTema();

  return (
    <ScrollView
      style={[estilos.contenedor, { backgroundColor: c.fondo }]}
      contentContainerStyle={estilos.contenido}
    >
      <TarjetaHobby nombre="Programar" icono="code-slash-outline" detalle="Me gusta crear apps y resolver problemas con código." />
      <TarjetaHobby nombre="Música" icono="musical-notes-outline" detalle="Escucho música mientras estudio y programo." />
      <TarjetaHobby nombre="Robótica" icono="hardware-chip-outline" detalle="Me gusta armar proyectos con Arduino." />
      <TarjetaHobby nombre="Leer" icono="book-outline" detalle="Leo sobre tecnología y desarrollo personal." />
    </ScrollView>
  );
};

export default Hobbies;

const estilos = StyleSheet.create({
  contenedor: { flex: 1 },
  contenido: { padding: 20 },
});