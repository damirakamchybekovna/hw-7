

function CommentDate(props) {
let date = props.date.toLocaleDateString()
return(
  <div className='Comment-date'>{date}</div>
)
    
  }

  export default CommentDate