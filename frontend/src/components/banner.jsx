import '../styles/banner.css'
const Banner = (props) => {
    let title=props.data
    return ( 
        <div className="banner">
            <div className="avvi">
            <div  className="title1 text-center text-light ms-6 mt-6 ">
                <div className="Avvikutti">
                <h1 >{title}</h1>
                </div>
               
            </div>
            </div>
        </div>
     );
}
 
export default Banner;