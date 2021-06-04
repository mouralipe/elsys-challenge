import React, { useState, useEffect } from 'react';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Loading } from '../../components/Loading';
import { Pagination } from '../../components/Pagination';

import { Container } from './styles';

interface CharacterData {
  id: string;
  images: string[];
  name: string;
  status: string;
  affiliation: string;
  occupation: string;
  quirk: string;
}

export function Home() {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<CharacterData[]>([]);
  const [pageInfo, setPageInfo] = useState({
    count: 0,
    currentPage: 0,
    pages: 0
  });

  async function onPageChange(pageNumber: number) {
    setLoading(true);
    window.scrollTo(0,0);

    const { data } = await api.get(`character?page=${pageNumber}`);

    const formattedCharacters = data?.result.map((character: CharacterData) => {
      return {
        id: character.id,
        images: character.images,
        name: character.name ? (character.name).toUpperCase() : 'UNKNOWN',
        status: character.status || 'Unknown',
        affiliation: character.affiliation || 'Unknown',
        occupation: character.occupation || 'Unknown',
        quirk: character.quirk || 'Unknown',
    }});

    setCharacters(formattedCharacters);
    setPageInfo(data.info);
    setLoading(false);
  }

  useEffect(() => {
    onPageChange(1);
  }, [])

  return (
    <>
      <Header />

      <Container>
        {loading ? (
          <Loading />
          ) : (
          <>
            <div>
              {characters.map((character) => (
                <Card key={character.id} info={character} />
              ))}
            </div>

            <Pagination pageInfo={pageInfo} onPageChange={onPageChange}/>
          </>
        )}
      </Container>
    </>
  )
}