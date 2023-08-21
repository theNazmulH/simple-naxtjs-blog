"use client"
/**
 * blog Page
 * Created by Nazmul Hussain 20.08.2023
 * www.nazmul.me
 */
import {useEffect, useState} from "react";
import getPost from "@/lib/getPost";
import SingleBlog from "@/app/components/SingleBlog";

export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState("")
    useEffect(() => {
        getPost(1)
        .then((data)=>setBlogs(data))
        .catch((err)=>setError("There is an error"));
    }, []);
    return (
        <div className="blogs grid-cols-3 grid gap-4">
            {blogs.map((blog)=><SingleBlog key={blog.id} blog={blog} />)}
        </div>
    )
}