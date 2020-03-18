import "../imports/api/prototypes.js";
import "../imports/api/scenes.js";
import "../imports/api/panels.js";
import "../imports/api/hotspots.js";

ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      loginStyle: "popup",
      appId: Meteor.settings.private.facebook.appId,
      secret: Meteor.settings.private.facebook.secret
    }
  }
);
