import { Mongo } from "meteor/mongo";
import { Scenes } from "./scenes";

export const Prototypes = new Mongo.Collection("prototypes");

const insertPrototype = () =>
  Prototypes.insert({
    createdAt: Date.now()
  });

Meteor.methods({
  "prototypes.create"() {
    insertPrototype(parentId =>
      Scenes.insert({
        parentId: parentId,
        createdAt: Date.now()
      })
    );
  },

  "prototypes.delete"(id) {
    Prototypes.remove(id);
  }
});
