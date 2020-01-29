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
