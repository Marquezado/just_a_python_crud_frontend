"use client";

import { useEffect, useState } from "react";
import { getNotes, Note } from "./src/notesService";



export default function Home() {

  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadNotes() {
      try {
        const data = await getNotes();
        setNotes(data);
      } catch (err) {
        setError("No se pudieron cargas las notas");
      } finally {
        setLoading(false);
      }
    }

    loadNotes();
  }, []);

  if (loading) {
    return <p className="p-8">Cargando notas...</p>
  }
  if (error) {
    return <p className="p-8 text-red-500">{error}</p>
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3x1 font-bold">just a PYTHON CRUD</h1>
      <p className="mt-2 text-gray-400">Bienvenido a mi aplicacion de notas con python</p>

      <div className="space-y-3">
        {notes.map((note) => (
          <div key={note.id} className="p-4 border rounded-lg">
            <p className="font-semibold">{note.title}</p>
            <p className="text-sm text-gray-500">Description: {note.description}</p>
            <p className="text-sm text-green-500">Completado: {note.completed}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
