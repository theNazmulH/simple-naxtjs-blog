"use client"
/**
 * blog Page
 * Created by Nazmul Hussain 20.08.2023
 * www.nazmul.me
 */
import {useEffect, useState} from "react";
import SingleBlog from "@/app/components/SingleBlog";
import getNewPost from "@/lib/getNewPost";
import Loader from "@/app/components/Loader";
export default function Blog() {
    // Recent Post
    const [blogs, setBlogs] = useState(null);
    const [error, setError] = useState("");


    // Recent Post
    const [recentBlogs, setRecentBlogs] = useState([])
    useEffect(() => {
        getNewPost().then((data)=>setBlogs(data)).catch((err)=>setError("Error occurred"));
    }, []);




    let output = "";
    if(blogs===null){
        output = <Loader />
    }
    else{
        output = <div>
            <h3 className="text-2xl mb-3">Recent Blogs</h3>
            <div className="blogs grid-cols-3 grid gap-4">
                {blogs.map((blog)=><SingleBlog key={blog.id} blog={blog} />)}
            </div>
        </div>
    }

    return (
        <>
            {output}

        </>
    )
}