import Link from 'next/link'

const BlogPost = ({ post, isPolish }) => {
  let linkInternal = `/blogposts/${post.internalLink}`
  const url = post.blogImage

  return (
    <div className="blog-post">
      <div className="image-container">
        <img src={url} alt="blog-image" className="responsive-image" />
      </div>
      <p className="blog-title">{isPolish ? post.titlePL : post.title}</p>
      <hr className="divider" />
      <p className="blog-paragraph">
        {isPolish
          ? post.paragraphsPL[0].split('. ', 1)[0]
          : post.paragraphs[0].split('. ', 1)[0]}
        ...
      </p>
      <p>
        <Link href={linkInternal}>
          {isPolish ? 'czytaj więcej' : 'Mehr lesen'}
        </Link>
      </p>
      <br />
    </div>
  )
}

export default BlogPost
