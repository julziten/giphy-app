import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        // se hace el efecto para que solo se dispare cuando cambia la categoria
        getGifs(category)
        // hace la peticion http
            .then( imgs => {
                // tenemos las imagenes
                    // llamamos al setstate cuando ya tenemos la data
                    setState({
                        data: imgs,
                        loading: false
                    })


            });
    }, [category])

    return state;
}