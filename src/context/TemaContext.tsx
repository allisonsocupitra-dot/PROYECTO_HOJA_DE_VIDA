import { createContext, useContext, useState, ReactNode } from "react";

export const colores = {
  claro: {
    fondo: "#f8fafc",
    tarjeta: "#ffffff",
    texto: "#0f172a",
    textoSec: "#475569",
    textoTenue: "#888888",
    borde: "#cccccc",
    primario: "#2563eb",
    enCursoFondo: "#eef2ff",
    enCursoBorde: "#6366f1",
    detalle: "#f1f5f9",
  },
  oscuro: {
    fondo: "#0f172a",
    tarjeta: "#1e293b",
    texto: "#f1f5f9",
    textoSec: "#cbd5e1",
    textoTenue: "#94a3b8",
    borde: "#475569",
    primario: "#60a5fa",
    enCursoFondo: "#312e81",
    enCursoBorde: "#818cf8",
    detalle: "#334155",
  },
};

type TemaContextoTipo = {
  oscuro: boolean;
  alternarTema: () => void;
  c: typeof colores.claro;
};

const TemaContexto = createContext<TemaContextoTipo>({
  oscuro: false,
  alternarTema: () => {},
  c: colores.claro,
});

export const TemaProvider = ({ children }: { children: ReactNode }) => {
  const [oscuro, setOscuro] = useState(false);
  const alternarTema = () => setOscuro((v) => !v);
  const c = oscuro ? colores.oscuro : colores.claro;

  return (
    <TemaContexto.Provider value={{ oscuro, alternarTema, c }}>
      {children}
    </TemaContexto.Provider>
  );
};

export const useTema = () => useContext(TemaContexto);