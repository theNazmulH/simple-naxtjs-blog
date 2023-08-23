"use client"
import Image from 'next/image'
import {useEffect, useState} from "react";
import getNewPost from "@/lib/getNewPost";
import SingleBlog from "@/app/components/SingleBlog";
import Loader from "@/app/components/Loader";

export default function Home() {
    const [recentBlogs, setRecentBlogs] = useState(null)
    const [error, setError] = useState("")
    useEffect(() => {
        getNewPost().then((data)=>setRecentBlogs(data)).catch((err)=>setError("Error occurred"));
    }, []);

    let output = "";
    if(recentBlogs===null){
        output = <Loader />
    }
    else{
        output = <div>
            <h3 className="text-3xl pb-5">Welcome to my Blog</h3>
            <div className="grid grid-cols-3 gap-4">
                {recentBlogs.map((sBlog)=><SingleBlog blog={sBlog} />)}
            </div>
        </div>
    }

  return (
    <>
        {output}
    </>
  )
}
