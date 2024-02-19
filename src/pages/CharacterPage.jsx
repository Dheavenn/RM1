import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function CharacterPage() {
    const {id} = useParams();

    useEffect(() => {
        const fetchCharacters = async () => {
            const json = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const res = await json.json();
            console.log(res)
        }
        fetchCharacters()
    }, [])
    return (
        <div>

            dasdawd
            
        </div>
    )
}
