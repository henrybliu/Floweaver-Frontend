# Frontend Next Steps:
## The current frontend design is as follows:

### Map:
The map is created using [Mapbox](https://www.mapbox.com/), a cloud-based mapping platform that allows developers to create custom maps. There are many examples of the different built-in libraries and functions within Mapbox on the Mapbox GL JS documentation page.

There are multiple markers spanning the map, representing each of the models that FloWeaver can simulate. Only the marker located in the Juan de Fuca Strait is an actual model. When a marker is selected, the map will zoom in to that location and restrict its bounds. This allows the user to only run one simulation at a time and to update the simulation settings. Cancelling the simulation will allow the user to move around the map as normal again.

### Settings:
The settings menu allows the user to configure the simulation parameters, such as the shown layers, visible flow depths, simulation speed, and more. This menu appears only after a model has been selected.

### Tutorial:
A tutorial pops up when the application is first loaded and can also be toggled when the user clicks on the information icon in the upper right of the navigation bar. When the tutorial modal is open, no other elements outside the modal can be clicked on.

### FloWeaver Information
The FloWeaver information pane explains the purpose and function of FloWeaver. It can be opened by clicking the hamburger icon in the upper left of the navigation bar. When this pane is open, no other items outside of the pane can be clicked on.


## Features to implement:
### Map & Settings:
The map should update and correctly simulate particle movements with the selected settings.

### Tutorial:
Document images and information for the different user interactions to create a clear and intuitive FloWeaver experience.

## For further questions, please feel free to email me at hel011@ucsd.edu! Best of luck!
