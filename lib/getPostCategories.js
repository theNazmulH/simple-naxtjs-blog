export async function getPostCategories(){
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-categories`);
    const data = await res.json();
    return data;
}