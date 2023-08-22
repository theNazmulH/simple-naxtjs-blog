"use client"
import {useEffect, useState} from "react";
import {getPostCategories} from "@/lib/getPostCategories";
import Link from "next/link";
import {useParams} from "next/navigation";

export default function Layout({ children }) {

    const [cat, setCat] = useState([]);
    const [error, setError] = useState("");


    let {categoryID}=useParams();
    let [list,SetList]=useState(null);

    // Categories
    useEffect(()=>{
        getPostCategories()
        .then((data)=>setCat(data))
        .catch((err)=>setError("There is an error"));

    },[]);

    return (
        <>

            <nav className="cats flex gap-2 items-center justify-center mb-7">
                {cat.map((sCat)=><Link className="px-4 py-3 bg-green-400 rounded" href={`/blog/category/${sCat.id}`}>{sCat.name}</Link>)}
            </nav>

            <main>{children}</main>
        </>
    )
}