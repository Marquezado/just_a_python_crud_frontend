import { apiFetch } from "./api";

export interface Note {
    id: number;
    title: string;
    description: string;
    completed: string;
}


export async function getNotes():Promise<Note[]> {
    return apiFetch<Note[]>("/notes");
    
}