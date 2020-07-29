import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionType from "../../Store/actions";
import "./Form.css";

// const mapStateToProps = (state)=>{
//     return {
//         id: state.id,
//         user: state.user
//     }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch({ type: actionType.ADD_USER, user }),
    // removeUser: (id) => dispatch({type: actionType.REMOVE_USER, id}),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(function (props) {
  const [user, setUser] = useState({ name: "", age: "" });
  const updateUser = () => {
    if (!user.name || !user.age) {
      console.log("Name and Age is mandatory");
      return false;
    }
    console.log("[Form.js] ===> ", JSON.stringify(user));
    props.addUser({ ...user, id: +new Date() });
    setUser({ name: "", age: "" });
  };
  return (
    <div className="Form">
      <input
        onChange={(e) => {
          e.persist();
          setUser((prevState) => ({ ...prevState, name: e.target.value }));
        }}
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter Name"
      />
      <input
        onChange={(e) => {
          e.persist();
          setUser((prevState) => ({ ...prevState, age: e.target.value }));
        }}
        value={user.age}
        type="text"
        name="age"
        placeholder="Enter Age"
      />
      <button
        onClick={() => updateUser()}
        disabled={!user.name || !user.age ? true : false}
      >
        Save
      </button>
    </div>
  );
});
