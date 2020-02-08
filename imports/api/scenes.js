import { Mongo } from "meteor/mongo";

export const Scenes = new Mongo.Collection("scenes");

Meteor.methods({
  "scenes.create"(prototypeId) {
    Scenes.insert({
      createdAt: Date.now(),
      prototypeId: prototypeId
    });
  },

  "scenes.delete"(id) {
    Scenes.remove(id);
  }
});
