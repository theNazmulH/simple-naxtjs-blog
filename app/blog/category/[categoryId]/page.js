"use client"

import {useEffect, useState} from "react";
import SingleBlog from "@/app/components/SingleBlog";
import {useParams} from "next/navigation";
import {getPostByCategory} from "@/lib/getPostByCategory";
import Loader from "@/app/components/Loader";
export default function Blog() {
    // Recent Post
    const [blogs, setBlogs] = useState(null);
    const [error, setError] = useState("");


    let {categoryId}=useParams();


    useEffect(()=>{
        getPostByCategory(categoryId)
            .then((data)=>setBlogs(data))
            .catch((err)=>setError("There is an error"));

    },[categoryId]);

    let output = "";
    if(blogs===null){
        output = <Loader />
    }
    else{
        output = <div className="blogs grid-cols-3 grid gap-4">
            {blogs.map((blog)=><SingleBlog key={blog.id} blog={blog} />)}
        </div>
    }

    return (
       <>
           {output}
       </>
    )
}