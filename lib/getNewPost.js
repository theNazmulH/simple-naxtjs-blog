export default async function getNewPost(id) {
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-newest`);
    const data = await res.json();
    return data;
}

