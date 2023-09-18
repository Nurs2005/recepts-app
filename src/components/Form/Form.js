import "./Form.css"
export default function Form({onSubmit,value,onChange}){
    return(
    <form className="form" onSubmit={onSubmit} action="">
        <input className="inp" value={value} onChange={onChange} type="text" />
        <button className="btn" type="submit">Search</button>
      </form>
    )
}