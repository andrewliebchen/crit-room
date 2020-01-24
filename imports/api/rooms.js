import { Mongo } from "meteor/mongo";

export const Rooms = new Mongo.Collection("rooms");

Meteor.methods({
  "rooms.create"() {
    Rooms.insert({
      createdAt: Date.now()
    });
  }
});
