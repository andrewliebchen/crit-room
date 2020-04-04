import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Panels = new Mongo.Collection("panels");

Meteor.methods({
  "panels.create"(prototypeId, sceneId) {
    const panelId = Panels.insert({
      createdAt: Date.now(),
      prototypeId: prototypeId,
      sceneId: sceneId,
      name: "Untitled Panel",
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

    // Create the panel
    panelId;

    // Create a hotspot
    Meteor.call("hotspots.create", prototypeId, panelId);

    // Return the panel id
    return panelId;
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
