export default async function getPostDetails(id){
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);
    const data = await res.json();
    return data;
}