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
- ✅ Name for project
- ✅ Hotspots on panels
- ✅ Link hotspots
- ✅ URL params for scene
- ✅ UI style
- ✅ User accounts
- ✅ Profile page
- ✅ View in VR buttons
- ✅ More environments
- ✅ Sidepanel navigation
- ✅ Auto-select first thing in list
- ✅ Proportional resizing
- ✅ Oculus environments
- ✅ Select a scene/panel/hotspot once it's created
- ✅ Get rid of drilldownLevel
- ✅ auto create child elements
- ⬜️ Scene environment params
- ⬜️ Close/hide edit pane
- ⬜️ Position presets for near/mid/far
- ⬜️ Templates for Scenes (e.g. AUI)
- ⬜️ Landing page style
- ⬜️ Allow users to delete their accounts
- ⬜️ Upload images
- ⬜️ Curvature
- ⬜️ Set size of panel based on size of image
- ⬜️ Panel dimensions can either be scaled or number input
- ⬜️ Don't allow drilldown if the element doesn't have children
