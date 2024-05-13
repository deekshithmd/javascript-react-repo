import { createRef, useEffect, useRef, useState } from "react"
import { Note } from "./Note"

const data = [
    {
        id: 1,
        text: 'First note for the ui'
    },
    {
        id: 2,
        text: 'Second note for the ui'
    }
]

export const DragAndDrop = () => {
    const [notes, setNotes] = useState(data)
    const noteRefs = useRef([])

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

        const updatedNotes = notes?.map(note => {
            const savedNote = savedNotes?.find(n => n?.id === note?.id)
            if (savedNote) {
                return { ...note, position: savedNote?.position }
            }
            else {
                const position = determineNewPosition();
                return { ...note, position }
            }
        })
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }, [notes?.length])

    const determineNewPosition = () => {
        const maxX = window.innerWidth - 250;
        const maxY = window.innerHeight - 250;

        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY)
        }
    }

    const handleDragStart = (note, e) => {
        const { id } = note;
        const noteRef = noteRefs?.current[id]?.current;
        const rect = noteRef?.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const startPos = note?.position;

        const handleMouseMove = (e) => {
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;

            noteRef.style.left = `${newX}px`;
            noteRef.style.top = `${newY}px`;
        }

        const handleMouseUp = (e) => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', handleMouseMove);

            const finalRect = noteRef?.getBoundingClientRect();
            const newPosition = { x: finalRect?.left, y: finalRect?.top };

            if (!checkForOverlap(id)) {
                noteRef.style.left = `${startPos?.x}px`
                noteRef.style.top = `${startPos?.y}px`
            }
            else {
                updateNotPosition(newPosition, id)
            }

        }

        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', handleMouseMove)
    }

    const checkForOverlap = (id) => {
        const currentNoteRef = noteRefs?.current[id]?.current;
        const currentRect = currentNoteRef?.getBoundingClientRect();

        return notes?.some(note => {
            if (note?.id === id) return false;

            const otherNoteRef = noteRefs?.current[note?.id]?.current;
            const otherRect = otherNoteRef?.getBoundingClientRect();

            const overlap = (currentRect?.right < otherRect?.left) || (currentRect?.left > otherRect?.right)
                || (currentRect?.bottom < otherRect?.top) || (currentRect?.top > otherRect?.bottom)
            return overlap
        })
    }

    const updateNotPosition = (position, id) => {
        const updatedNotes = notes?.map(note => note?.id === id ? ({ ...note, position }) : note)
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }

    return (
        <div>{
            notes?.map(note => {
                return (
                    <Note
                        key={note?.id}
                        ref={noteRefs?.current[note.id]
                            ? noteRefs?.current[note?.id]
                            : (noteRefs.current[note.id] = createRef())
                        }
                        position={note?.position}
                        note={note?.text}
                        onMouseDown={(e) => handleDragStart(note, e)}
                    />
                )
            })
        }</div>
    )
}