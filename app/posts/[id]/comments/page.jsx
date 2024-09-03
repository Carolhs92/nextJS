const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  // throw new Error('Error al cargar los comentarios')
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function PostCommentsPage ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul>
      {comments.map(comments => (
        <li key={comments.id}>
          <h4>{comments.name}</h4>
          <small>{comments.body}</small>
        </li>
      ))}
    </ul>
  )
}
