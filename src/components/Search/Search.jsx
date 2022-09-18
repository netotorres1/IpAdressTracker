import React from 'react'
import styled from 'styled-components'
import background from './../../assets/images/pattern-bg.png'
import btnSearch from './../../assets/images/icon-arrow.svg'
import { useState, useEffect } from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Markerposititon from '../Markerposititon'
import {mobile} from './../../responsive'

const Container = styled.section`
    width: 100vw;
    margin: auto;
    ${mobile({height: '1000px' })}
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
    align-items:center;
    justify-content: center;
    width: 75%;
    margin: auto;
    background-color: white;
    align-items:center;
    justify-content: space-around;
    height: 160px;
    border-radius: 20px;
    position: relative;
    bottom: 210px;
    padding: 20px;
    box-shadow: 10px 10px 25px rgba(0,0,0, 0.2);
    z-index:11;
    ${mobile({display: 'flex', flexDirection: 'column', height: '350px', justifyContent: 'center', alignItems: 'center' })}
    ${mobile({position: 'relative', bottom: '400px'})}
`
const TitleAdress = styled.h2`
    font-size: 15px;
    margin: 15px;
    font-family: 'Rubik', sans-serif;
    text-align: left;
    color: lightgray;
    ${mobile({textAlign:'center'})}
`
const IpAdress = styled.div`
    width: 300px;
    height: 150px;
    ${mobile({width: '250px'})}
`
const ResAdress = styled.p`
    font-size: 30px;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    ${mobile({fontSize: '20px'})}
`
const Background = styled.img`
    object-fit: cover;
    width: 100vw;
    ${mobile({height: '500px'})}
`
const ContainerSearch = styled.div`
    position: relative;
    z-index:11;
    bottom: 230px; 
    width: 75%;
    display: flex;
    margin: auto;
    flex-direction: column;
    ${mobile({position: 'relative', bottom: '450px'})}
`
const Location = styled.div`
    width: 300px;
    height: 150px;
    ${mobile({width: '250px'})}
`
const TimeZone =  styled.div`
width: 300px;
height: 150px;
${mobile({width: '250px'})}
`
const Ips =  styled.div`
width: 300px;
height: 150px;
${mobile({width: '250px'})}
`
const Line = styled.div`
    height: 80px;
    width: 3px;
    background-color: lightgrey;
    ${mobile({display: 'none'})}
`
const ContainerMap = styled.div`
    position: absolute;
    height: 550px;
    top: 278px;
    z-index: 1;
    ${mobile({position: 'absolute', top: '500px'})}
    ${mobile({height: '#4847A4px'})}
`

const Search = () => {

    const [address, setAddress] = useState([])
    const [ipAddress, setIpAddress] = useState("");
    const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/
    

    useEffect(() => {
        try{
            const getInitialData = async () => {
                const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_2pY7NRXs7kpFHoatGzvVaaVrQCzD3&ipAddress=192.212.174.101`)
                const data = await res.json()
                setAddress(data)
            }
            getInitialData()
        }catch(error){
            console.trace(error)
        }
    }, [])

    const getAdress = async () => {
        const getInitialData = async () => {
            const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_2pY7NRXs7kpFHoatGzvVaaVrQCzD3&${
                checkIpAddress.test(ipAddress) ? `ipAddress=${ipAddress}` : checkDomain.test(ipAddress) ? `domain=${ipAddress}` : ''
            }`)
            const data = await res.json()
            setAddress(data)
        }
        getInitialData()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getAdress()
        setIpAddress('')
    }

   /* 
*/
  return (
    <Container>
        {address && <>
            <Background src={background} />
        <ContainerSearch>
            <Title>IP Adress Tracker</Title>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <SearchInput value={ipAddress} onChange={(e) => setIpAddress(e.target.value)} placeholder='Seach for any IP address or domain' ></SearchInput>
                <BtnSearch><ImageBtn src={btnSearch}/></BtnSearch>
            </Form>
        </ContainerSearch>
        <Adress>
            <IpAdress>
                <TitleAdress>IP ADDRESS</TitleAdress>
                <ResAdress>{address.ip}</ResAdress>
            </IpAdress>
            <Line></Line>
            <Location>
                <TitleAdress>LOCATION</TitleAdress>
                <ResAdress>{address.location.city},{address.location.region}</ResAdress>
            </Location>
            <Line></Line>
            <TimeZone>
                <TitleAdress>TIMEZONE</TitleAdress>
                <ResAdress>UTC {address.location.timezone}</ResAdress>
            </TimeZone>
            <Line></Line>
            <Ips>
                <TitleAdress>ISP</TitleAdress>
                <ResAdress>{address.isp}</ResAdress>
            </Ips>
        </Adress>
        <ContainerMap>
            <MapContainer center={[address.location.lat, address.location.lng]} zoom={13} scrollWheelZoom={true} style={{height:'555px', width: '100vw'}}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Markerposititon address={address}/>
            </MapContainer>
        </ContainerMap>
        </>}
    </Container>    
  )
}

export default Search