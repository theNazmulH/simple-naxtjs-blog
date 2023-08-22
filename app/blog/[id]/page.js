/**
 * singleBlog Page
 * Created by Nazmul Hussain 20.08.2023
 * www.nazmul.me
 */

"use client"
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import getPostDetails from "@/lib/getPostDetails";
import Image from "next/image";


export default function SingleBlog() {
    const [blogDesc, setBlogDesc] = useState(null);
    const [error, setError] = useState("")
    let {id} = useParams();
    // let blogId = blogIdParams.id;

    useEffect(() => {
        getPostDetails(id)
        .then((data)=>setBlogDesc(data))
        .catch((err)=>setError("Error occurred"));


    }, [id]);
// decide what to render
    let output;

    if (error) {
        output = <div>There was an error</div>;
    }
    else if (blogDesc){
        output = <div><h3 className="text-3xl mb-3">{blogDesc['postDetails']?.title}</h3>
            <figure className="mb-5">
                <img src={blogDesc['postDetails']?.img} alt="blog thumb"/>
            </figure>
            <p className="text-md leading-relaxed">{blogDesc['postDetails']?.content}</p></div>;
    }


    else {
        output = <div>No Details found!</div>;
    }


    return (
    <div className="blog-details">
        {output}

        </div>
    )
}