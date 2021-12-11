import ReactDom from 'react-dom'

import './index.css'
// setupvars
import { books } from './books'
import Book from './Book'
import { greeting } from './testing/testing'

function Booklist() {
  console.log(greeting)
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))
