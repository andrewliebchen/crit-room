import { Mongo } from "meteor/mongo";

export const Prototypes = new Mongo.Collection("prototypes");

Meteor.methods({
  "prototypes.create"() {
    Prototypes.insert({
      createdAt: Date.now()
    });
  },

  "prototypes.delete"(id) {
    Prototypes.remove(id);
  }
});
