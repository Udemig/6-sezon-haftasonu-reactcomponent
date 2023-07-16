import { users } from "../utils/constants.js";
import UserCard from "./UserCard";
function Cards() {
  return (
    <div className="cards">
      {users.map((user) => (
        <UserCard userBilgi={user} />
      ))}
    </div>
  );
}

export  {Cards};
