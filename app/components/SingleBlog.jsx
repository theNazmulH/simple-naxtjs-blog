import React from 'react';
import Image from "next/image";



function SingleBlog({blog}) {

    const {id, img, title, created_at, category_id, short} = blog;
    const handlePost = (id) => {

    }
    return (
        <div className="singleBlog bg-gray-100">
            <div className="blog-thumb">
                <Image src={img} layout="responsive" width={300} height={150} alt="img" />
            </div>
            <div className="blog-title p-4 cursor-pointer" onClick={()=>handlePost(id)}>
                <h3 className="text-blue-950 mb-1">{title}</h3>
                {/*<i className="text-blue-950 opacity-50">Posted at {created_at}</i>*/}
                <p className="text-amber-950 mt-4">{short}...</p>
            </div>
        </div>
    );
}

export default SingleBlog;