// import postsData from './posts.json';
import { promises as fs } from 'fs';

async function BlogPage({ params }) {
  // params == aquarely

  const file = await fs.readFile(
    process.cwd() + '/app/blogposts/posts.json',
    'utf8'
  );
  const data = JSON.parse(file);

  let postDetails = data.posts;

  let nameToFind = params.postTitle;

  let rightPost = postDetails.find((post) => post.internalLink == nameToFind);
  let title = rightPost.title;

  return <h1>{title}</h1>;
}

export default BlogPage;
