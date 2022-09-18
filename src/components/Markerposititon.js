import React,{useEffect, useMemo} from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import icon from './../assets/images/icon'

const Markerposititon = ({address}) => {

    const position = useMemo(() => {
        return [51.505, -0.09]
    }, [51.505, -0.09])
    const map = useMap()

    useEffect(() => {
        map.flyTo(position, 13,{
            animate: true
        })
    }, [map,position])

  return (
    <>
        <Marker icon={icon} position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
    </>
  )
}

export default Markerposititon