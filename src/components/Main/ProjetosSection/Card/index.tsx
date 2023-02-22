import React from 'react'
import * as S from './styles'

interface CardProps {
    name: string;
    url: string;
}

const Card = ({name, url}:CardProps) => {
  return (
    <S.Card>
        <img src={url} alt="" />
        <S.CardContent>
            <h3>{name}</h3>
            <button className='demoBtn'>Visualizar</button>
            <button className='sobreBtn'>Sobre</button>
        </S.CardContent>
    </S.Card>
  )
}

export default Card