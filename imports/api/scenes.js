import { Mongo } from "meteor/mongo";

export const Scenes = new Mongo.Collection("scenes");

Meteor.methods({
  "scenes.create"(prototypeId) {
    return Scenes.insert({
      createdAt: Date.now(),
      prototypeId: prototypeId,
      name: "Untitled Scene",
      background: "dome"
    });
  },

  "scenes.delete"(id) {
    Scenes.remove(id);
  },

  "scenes.update"(id, args) {
    Scenes.update(id, {
      $set: args
    });
  }
});
