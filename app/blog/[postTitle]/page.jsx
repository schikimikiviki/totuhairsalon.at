import { promises as fs } from 'fs';
import BlogContents from '@/app/components/BlogContents';

async function BlogPage({ params }) {
  const file = await fs.readFile(
    process.cwd() + '/app/blogposts/posts.json',
    'utf8'
  );
  const data = JSON.parse(file);
  let nameToFind = params.postTitle;
  let rightPost = data.posts.find((post) => post.internalLink == nameToFind);

  return <BlogContents postData={rightPost} />;
}

export default BlogPage;
