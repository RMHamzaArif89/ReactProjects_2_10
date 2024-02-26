
import './css/note.css'

function Note(props) {
    

     const deleteNote=()=>{
        
props.delete(props.id)
     }
    return (
       
<>
            <div className="text">
                <div className="t">{props.value}</div>
                <i className="delete bi bi-facebook" onClick={deleteNote}>delete</i>
            </div>
            
  </>  

    )
}

export default Note;
