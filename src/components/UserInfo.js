import CommentWrapper from "../UI/CommentWrapper"
import CommentAvatar from "./CommentAvatar"
import CommentDate from "./CommentDate"
import CommentText from "./CommentText"
import './UserInfo.css'

function UserInfo (props){
    return(
       <CommentWrapper className='UserInfo'>
        <div className="box">
          <CommentAvatar author={props.author}/>

          <div className='UserInfo-name'>{props.author.name}</div>
          </div>
          <div className="box2">
            <CommentText text={props.text}/>
            <CommentDate date={props.date}/>
          </div>
       
       </CommentWrapper>
    )
}

export default UserInfo