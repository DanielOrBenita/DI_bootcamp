const User = (props) =>{
  const {userdata} = props;
  const {name,username,email,id} = userdata;
    
    return(
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
          <img src={`https://robohash.org/${id}?size=150x150`} alt="robotImage" />
          <h3>{name}</h3>
          <h4>{username}</h4>
          <p>{email}</p>
        </div>
      )
}

export default User