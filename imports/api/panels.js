import { Mongo } from "meteor/mongo";

export const Panels = new Mongo.Collection("panels");

Meteor.methods({
  "panels.create"(parentId) {
    Panels.insert({
      createdAt: Date.now(),
      parentId: parentId
    });
  },

  "panels.delete"(id) {
    Panels.remove(id);
  }
});
