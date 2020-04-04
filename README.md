# crit-room

Invision for prototyping immersive environments. Quickly add and sync images, apply hotspots, and link those hotspots to change the panel or scene.

## Schema

- **Prototypes** The primary object.
- **Scenes** Prototypes are composed of one or more scenes.
- **Panels** Scenes are composed of panels. Panels have...
  - **States** have properties such as...
    - **Images** Start with a PX URL
    - **Size and position** Where the panel is positioned (x, y, z) and what size it is (width, height).
    - **Hotspots** Clickable areas that have position and size on the panel. Link to a panel state or another scene.

## Todos

- ✅ Image on panel
- ✅ CRUD for panels
- ✅ Environment for scene (wrap around image)
- ✅ Scene CRUD
- ⬜️ Scene environment params
- ✅ Name for project
- ✅ Hotspots on panels
- ✅ Link hotspots
- ⬜️ Close/hide edit pane
- ✅ URL params for scene
- ⬜️ Position presets for near/mid/far
- ⬜️ Templates for Scenes (e.g. AUI)
- ✅ UI style
- ⬜️ Landing page style
- ⬜️ Allow users to delete their accounts
- ✅ User accounts
- ✅ Profile page
- ✅ View in VR buttons
- ✅ More environments
- ✅ Sidepanel navigation
- ⬜️ Upload images
- ✅ Auto-select first thing in list
- ✅ Proportional resizing
- ⬜️ Curvature
- ⬜️ Set size of panel based on size of image
- ✅ Oculus environments
- ⬜️ Panel dimensions can either be scaled or number input
- ✅ Select a scene/panel/hotspot once it's created
- ✅ Get rid of drilldownLevel
- ⬜️ auto create child element
