"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const curiosidades = [
  "Sabia que o tamanduá é o maior antivírus do cerrado?",
  "Você é o visitante nº 10.000… mas sem prêmio, foi mal.",
  "Capivarias se comunicam no protocolo grunhido 2.0 — criptografia natural.",
  "O tamanduá tem língua de 60cm — seria o melhor cabinho de rede orgânico.",
  "Esse site usa cookies — mas capivaras preferem grama mesmo.",
  "Tamanduá come 30 mil formigas por dia — dieta low carb raiz.",
  "Capivara é zen master brasileira — medita em qualquer lugar, até com jacaré do lado.",
];

export default function CuriosidadesCapivara() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % curiosidades.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full">
      {curiosidades.map((texto, i) => (
        <motion.span
          key={i}
          className="absolute w-full text-center font-medium text-sm md:text-base lg:text-lg"
          initial={{ opacity: 0, y: "-100%" }}
          animate={
            index === i
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: index > i ? -150 : 150 }
          }
          transition={{ type: "spring", stiffness: 50 }}
        >
          {texto}
        </motion.span>
      ))}
    </div>
  );
}
