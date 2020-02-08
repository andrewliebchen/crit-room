import { Mongo } from "meteor/mongo";

export const Panels = new Mongo.Collection("panels");

Meteor.methods({
  "panels.create"(prototypeId, sceneId) {
    Panels.insert({
      createdAt: Date.now(),
      prototypeId: prototypeId,
      sceneId: sceneId
    });
  },

  "panels.delete"(id) {
    Panels.remove(id);
  }
});
