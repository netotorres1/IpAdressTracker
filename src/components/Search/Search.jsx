import React from 'react'
import styled from 'styled-components'
import background from './../../assets/images/pattern-bg.png'
import btnSearch from './../../assets/images/icon-arrow.svg'

const Container = styled.section`
    width: 1440px;
    margin: auto;
`
const Title = styled.h1`
    color: white;
    font-size: 40px;
    font-family: 'Rubik', sans-serif;
    margin-bottom: 30px;
`
const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Rubik', sans-serif;
`
const SearchInput = styled.input`
    width: 75%;
    padding: 20px;
    border-radius: 35px;
    border: none;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    
`
const BtnSearch = styled.button`
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;   
    border: none;
`
const ImageBtn = styled.img`
    padding: 22px;
    background-color:hsl(0, 0%, 17%);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;  
    display: flex;
    align-items: center;
    justify-content: center;
`
const Adress =styled.article`
    display: flex;
    flex-direction: row;
    width: 75%;
    margin: auto;
    background-color: white;
    align-items:center;
    justify-content: space-around;
    height: 120px;
    border-radius: 20px;
    position: relative;
    bottom: 200px;
`
const TitleAdress = styled.h2`
    font-size: 15px;
    margin-bottom: 10px;
    font-family: 'Rubik', sans-serif;
    text-align: left;
    color: lightgray;
`
const IpAdress = styled.div``
const ResAdress = styled.p`
    font-size: 30px;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
`
const Background = styled.img``
const ContainerSearch = styled.div`
    position: relative;
    bottom: 230px; 
    width: 75%;
    display: flex;
    margin: auto;
    flex-direction: column;
`
const Location = styled.div``
const TimeZone =  styled.div``
const Ips =  styled.div``


const Search = () => {
  return (
    <Container>
        <Background src={background} />
        <ContainerSearch>
            <Title>IP Adress Tracker</Title>
            <Form>
                <SearchInput placeholder='Seach for any IP address or domain' ></SearchInput>
                <BtnSearch><ImageBtn src={btnSearch}/></BtnSearch>
            </Form>
        </ContainerSearch>
        <Adress>
            <IpAdress>
                <TitleAdress>IP ADDRESS</TitleAdress>
                <ResAdress>190.202.174.101</ResAdress>
            </IpAdress>
            <Location>
                <TitleAdress>LOCATION</TitleAdress>
                <ResAdress>Brooklyn, NY</ResAdress>
            </Location>
            <TimeZone>
                <TitleAdress>TIMEZONE</TitleAdress>
                <ResAdress>UTC - 05:00</ResAdress>
            </TimeZone>
            <Ips>
                <TitleAdress>ISP</TitleAdress>
                <ResAdress>SpaceX Starlink</ResAdress>
            </Ips>
        </Adress>
    </Container>    
  )
}

export default Search