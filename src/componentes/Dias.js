import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


function Dia({ weekday, date, time }) {

    return (
        <Horario data-test="movie-day">
            {`${weekday} - ${date}`}
            <Horas>
                {time.map((sessao) => (
                    <Link data-test="showtime" to={`/assentos/${sessao.id}`} key={sessao.id}>
                        <Hora>{sessao.name}</Hora>
                    </Link>
                ))}
            </Horas>
        </Horario>
    );
}

export default Dia;

const Horario = styled.div`
font-family: 'Roboto';
font-size: 20px;
`
const Horas = styled.div`
margin-top:30px;
display:flex;
flex-direction:row;
gap:10px;
`
const Hora = styled.div`
font-family: 'Roboto';
font-size: 18px;
color: #FFFFFF;
width: 83px;
height: 43px;
background-color: #E8833A;
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
`