import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Scenes = new Mongo.Collection("scenes");

Meteor.methods({
  "scenes.create"(prototypeId) {
    const sceneId = Scenes.insert({
      createdAt: Date.now(),
      prototypeId: prototypeId,
      name: "Untitled Scene",
      background: "dome"
    });

    // Create the scene
    sceneId;

    // Create a panel
    Meteor.call("panels.create", prototypeId, sceneId);

    // Return the scene id
    return sceneId;
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
