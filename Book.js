const Book = ({ img, title, author }) => {
  // Events in react req: attribute , event handler
  //onClick, onMouseOver
  const clickHandler = () => {
    alert('hello world')
  }
  const Complex = (author) => {
    console.log(author)
  }
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h6>{author}</h6>
      <button type='Button' onClick={clickHandler}>
        React events
      </button>
      <button type='button' onClick={() => Complex(author)}>
        More complex Example
      </button>
    </article>
  )
}

export default Book
