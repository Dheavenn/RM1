import { Flex, Input, Pagination } from 'antd';
import React, { useEffect, useState } from 'react'
import CharacterCard from '../components/Card';
import { useDebounce } from '../hooks/useDebounce';

function MainPages() {
    const [characters, setCharacters] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [name, setName] = useState('');
    const search = useDebounce(name);



    const onChange = (page) => {
        setCurrentPage(page);
    }

    useEffect(() => {
        const fetchCharacters = async () => {
            const json = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
            const res = await json.json();
            setCharacters(res);
        }
        fetchCharacters()
    }, [currentPage, search])



    return (
        <>
            <Flex align='center' wrap='wrap' gap='small'>
                <Input placeholder='Basic usage' onChange={(e) => setName(e.target.value)} />
                {characters?.results && characters.results.map(character => (
                    <div key={character.id}>
                        <CharacterCard id={character.id} name={character.name} status={character.status} gender={character.gender} image={character.image} />
                    </div>
                ))
                }
            </Flex>
            <Pagination size='large' total={characters?.info?.count} onChange={onChange} current={currentPage} />
        </>
    )

}

export default MainPages