import { Mongo } from "meteor/mongo";

export const Panels = new Mongo.Collection("panels");

Meteor.methods({
  "panels.create"(prototypeId, sceneId) {
    Panels.insert({
      createdAt: Date.now(),
      prototypeId: prototypeId,
      sceneId: sceneId,
      name: "Panel",
      src: "",
      color: "",
      width: 2,
      height: 1,
      xPosition: 0,
      xRotation: 0,
      yPosition: 0,
      yRotation: 0,
      zPosition: -5,
      zRotation: 0
    });
  },

  "panels.delete"(id) {
    Panels.remove(id);
  },

  "panels.update"(id, args) {
    Panels.update(id, {
      $set: args
    });
  }
});
