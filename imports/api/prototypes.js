import { Mongo } from "meteor/mongo";

export const Prototypes = new Mongo.Collection("prototypes");

Meteor.methods({
  "prototypes.create"() {
    Prototypes.insert({
      createdAt: Date.now(),
      createdBy: Meteor.userId(),
      name: "Untitled Prototype"
    });
  },

  "prototypes.delete"(id) {
    Prototypes.remove(id);
  },

  "prototypes.update"(id, args) {
    Prototypes.update(id, {
      $set: args
    });
  }
});
