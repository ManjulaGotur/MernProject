import { useEffect, useState } from "react";
import Banner from "./banner";
import axios from "axios";
import { Link } from "react-router-dom";


const Food = () => {
    let title = "All Post"
    let [posts, setposts] = useState([])

    useEffect(() => {
        let fecthing = async () => {
            let response = await axios.get("http://localhost:4000/posts")
            let data = await response.data
            console.log(data);
            setposts(data)
        }
        fecthing()
    })


    return (
        <div className="food">
            <Banner data={title} />
            <div className="post_list">
                {posts.map((x) => (
                    <div className="Avvi">
                        <img src={x.image} alt="" />
                        <h1>{x.author}</h1>
                        <iframe>{x.location}</iframe>
                        <button> <Link to={`/home/food/${x._id}`}>Read_Post</Link></button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Food;