import Layout from './Layout';
import Data from "./Data"
import React, { Component } from 'react'

export default function Layoutlist(props) {
    const [Data1, setData1] = React.useState([])

    React.useEffect(() => {
         fetch(props.category)
            .then(response => response.json())
            .then(data => {
                setData1(data)
                console.log(Data1.results);
            })
    }, [])
    if (Data1.results) {
        const imgArray = Data1.results.map(item => {
            if (item.title)
                return (< Layout imgpath={item.backdrop_path}
                    title={item.title}
                />)
            else {
                return (< Layout imgpath={item.backdrop_path}
                    title={item.original_name}
                />)
            }
        })
        console.log(imgArray);

        return (
            <div className='Layoutlist'>

                {imgArray}
            </div>
        );
    }
}