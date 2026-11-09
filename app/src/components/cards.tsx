"use client";

import { useEffect, useState } from "react";
import { getNotes, Note } from "../../src/notesService";

export default function Cards() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadNotes() {
      try {
        const data = await getNotes();
        setNotes(data);
      } catch (err) {
        setError("No se cargaron las notas");
      } finally {
        setLoading(false);
      }
    }
    loadNotes();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {notes.map((note) => (
        <div key={note.id} className="max-w-sm rounded-xl border border-gray-200 bg-white p-5 shadow-sm w-2xs h-2xs">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-gray-900">{note.title}</h3>
                    <span className={`rounded-full bg-green-100 px-3 py-1 text-xs font-medium 
                        ${note.completed ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                            {note.completed ? 'Completada' : 'Pendiente'}
                    </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">{note.description}</p>
          <div className="mt-5 flex items-center justify-bewteen border-t border-gray-300 pt-4">
            <span className="text-xs text-gray-400">N° de Tarea: {note.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
