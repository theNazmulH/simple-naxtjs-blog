export async function getPostByCategory(id){
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-list/${id}`);
    const data = await res.json();
    return data;
}