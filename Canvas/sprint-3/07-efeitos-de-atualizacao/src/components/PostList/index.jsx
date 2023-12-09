export const PostList = ({postList, addFavoritePost}) => {
    return(
        <ul>
        {postList.map(post => (
          <li key={post.id}>
            <span>{post.category} = {post.author}</span>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => addFavoritePost(post)}>Adicionar</button>
          </li>
        ))}
      </ul>
    )
}