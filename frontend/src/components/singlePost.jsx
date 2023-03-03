import Banner from "./banner";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const SinglePost = () => {
    const {id} = useParams('')
    let title = "single post information"

    let [posts, setposts] = useState([])

    useEffect(() => {
        let fecthing = async () => {
            let response = await axios.get(`http://localhost:4000/posts/${id}`)
            let data = await response.data
            // console.log(data);
            setposts(data)
        }
        fecthing()
    },[])

    return (
        <div className="singlepost">
            <Banner data={title} />
            <div className="content">
                <div className="img">
                    <img src={posts.image} alt="" />
                </div>
                <div className="details">
                    <h1>{posts.title}</h1>
                    <h3>{posts.summary}</h3>
                    <iframe frameborder="0">{posts.location}</iframe>
                    
                </div>
            </div>
            <Link to={`/home/food`}>Back</Link>

        </div>
    );
}

export default SinglePost;