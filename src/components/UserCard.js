import "../styles/UserCard.css";

function UserCard(props) {
  //console.log(props.userBilgi.email);

  return (
    <div className="card">
      <div className="imageBox">
        <img src={props.userBilgi.photo} />
      </div>

      <div className="infoBox">
        <h3>Adı : {props.userBilgi.first_name}</h3>
        <h3>Soyadı : {props.userBilgi.last_name}</h3>
        <h3>E-Mail : {props.userBilgi.email}</h3>
        {props.userBilgi.gender == "Female" ? (
          <h3>Cinsiyeti : Kadın</h3>
        ) : (
          <h3>Cinsiyeti : Erkek</h3>
        )}
      </div>
    </div>
  );
}

export default UserCard;
