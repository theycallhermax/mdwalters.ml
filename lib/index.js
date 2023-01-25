// Feed extractor, (sort of) based on FeedsBot
import { extract } from "https://unpkg.com/@extractus/feed-extractor@latest/dist/feed-extractor.esm.js";

async function getLatestBlogPost() {
    const blogPost = document.getElementById("blog-post");

    try {
        const post = await extract("https://blog.mdwalters.ml/feed.xml");
    } catch(e) {
        console.error(e);
        blogPost.innerHTML = `<li class="list-group-item">
    <p>An error occured fetching the latest blog post. Check the console for more details.</p>
</li>`;
        return;
    }

    blogPost.innerHTML = `<li class="list-group-item">
    <h2>${post.title}</h2>
    <p>${post.entries[0].summary}</p>
</li>`;
}

getLatestBlogPost();