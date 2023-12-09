export const FavoriteList = ({favoritePosts, removeFavoritePost}) => {
    return(
        <ul>
            {favoritePosts.map(post => (
                <li key={post.id}>
                    {post.title} - {post.author}
                    <button onClick={() => removeFavoritePost(post.id)}>Remover</button>
                </li>
            ))}
        </ul>
    )
}