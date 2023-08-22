"use client"

import {useEffect, useState} from "react";
import SingleBlog from "@/app/components/SingleBlog";
import {useParams} from "next/navigation";
import {getPostByCategory} from "@/lib/getPostByCategory";
export default function Blog() {
    // Recent Post
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState("");


    let {categoryId}=useParams();
    let [list,SetList]=useState(null);


    useEffect(()=>{
        getPostByCategory(categoryId)
            .then((data)=>setBlogs(data))
            .catch((err)=>setError("There is an error"));

    },[categoryId]);



    return (
        <div className="blogs grid-cols-3 grid gap-4">
            {blogs.map((blog)=><SingleBlog key={blog.id} blog={blog} />)}
        </div>
    )
}