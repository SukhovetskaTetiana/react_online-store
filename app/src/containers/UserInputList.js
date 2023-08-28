import UserInput from "../components/UserInput";
import "../css/UserInputList.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/userSlice";
import { addUser } from "../store/userSlice";

function UserInputList() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const formHandler = (event) => {
    event.preventDefault();
    let data = event.target.elements;

    const newUser = {
      name: data.name.value,
      email: data.email.value,
      phone: data.phone.value,
      address: data.address.value,
    };
    dispatch(addUser(newUser));
  };

  console.log(user);

  return (
    <div className="userInputList-container" onSubmit={formHandler}>
      <UserInput />
    </div>
  );
}
export default UserInputList;
