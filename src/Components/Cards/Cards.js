import React from "react";
import Card from "./Card/Card";
import * as actionType from "../../Store/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: (id) => dispatch({ type: actionType.REMOVE_USER, id }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function (props) {
  console.log(props)
  return (
    <div
      style={{
        display: "inline-block",
        // backgroundColor: "#d07676",
        marginTop: "50px",
        padding: "30px",
        textAlign: "center",
      }}
    >
      {props.users.map((elem) => (
        <Card
          removeUserHandler={props.removeUser}
          id={elem.id}
          key={elem.id}
          name={elem.name}
          age={elem.age}
        />
      ))}
    </div>
  );
});
