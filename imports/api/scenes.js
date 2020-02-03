import { Mongo } from "meteor/mongo";

export const Scenes = new Mongo.Collection("scenes");

Meteor.methods({
  "scenes.create"(parentId) {
    Scenes.insert({
      createdAt: Date.now(),
      parentId: parentId
    });
  },

  "scenes.delete"(id) {
    Scenes.remove(id);
  }
});
