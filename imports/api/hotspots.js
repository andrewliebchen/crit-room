import { Mongo } from "meteor/mongo";

export const Hotspots = new Mongo.Collection("hotspots");

Meteor.methods({
  "hotspots.create"(prototypeId, panelId) {
    Hotspots.insert({
      createdAt: Date.now(),
      prototypeId: prototypeId,
      panelId: panelId,
      height: 1,
      width: 1,
      x: 0,
      y: 0
    });
  },

  "hotspots.delete"(id) {
    Hotspots.remove(id);
  },

  "hotspots.update"(id, args) {
    Hotspots.update(id, {
      $set: args
    });
  }
});
