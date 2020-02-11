import { Mongo } from "meteor/mongo";

export const Scenes = new Mongo.Collection("scenes");

Meteor.methods({
  "scenes.create"(prototypeId) {
    Scenes.insert({
      createdAt: Date.now(),
      prototypeId: prototypeId,
      name: "Scene"
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
