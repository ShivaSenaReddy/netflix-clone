import React from 'react'
export default function Banner() {
    const APIKey = '8ff078b8a5cf62c2551c2ec0a95b1052'
    const [Data1, setData1] = React.useState([])
    React.useEffect(() => {
         fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${APIKey}&with_networks=213`)
            .then(response => response.json()).then(data => setData1(data))
     
    },[])
  
    if (Data1.results) {
        let t = Data1.results[Math.floor(Math.random() * 20)]
        const style1 = {
            backgroundImage: `url("https://image.tmdb.org/t/p/original${t.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px"
        }
        console.log(Data1.results[Math.floor(Math.random()*20)].backdrop_path);
        return (
            <div className='Banner' style={style1} >
                <div>
                    <h2>{t.name}</h2>
                    <button href='#'>Play</button>
                    <button href='#'>My List</button>
                </div>
            <div>
                    <p>{t.overview}</p>
                </div>
            </div>
        )
    }
   
}