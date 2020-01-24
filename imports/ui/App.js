import React from "react";
import { Meteor } from "meteor/meteor";

const App = props => (
  <div>
    <button onClick={() => Meteor.call("rooms.create")}>Create room</button>
    {props.rooms.length > 0 ? (
      props.rooms.map(room => <div key={room._id}>{room._id}</div>)
    ) : (
      <div>No rooms yet</div>
    )}
  </div>
);

export default withTracker(() => {
  return {
    rooms: Rooms.find({}).fetch()
  };
})(App);
