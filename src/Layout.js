

export default function Layout(props) {

    return (
        <div className='Layout'>
           
            <img src={
                'https://image.tmdb.org/t/p/w200/' + props.imgpath} />
            <div className='layout-title'>
                <h4>{props.title}</h4>
            </div>
        </div>
        
        )
}