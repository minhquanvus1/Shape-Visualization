# Shape Visualization

1. Overview

The Shape Visualization is a web-based application that reads polygonal vertex data from a JSON file and renders them in both 2D and 3D using D3.js and Three.js, respectively. The application provides interactive features such as zooming, panning, rotating, and selecting polygons for better visualization and analysis.

- For the Video Demo, please refer to [Shape Visualization - Video Demo](https://drive.google.com/file/d/155TVtcebk0_9F89Rxfau9i1CGista9_i/view?usp=sharing)

2. Features

- 2D Viewer

  - Parses a JSON file and extracts polygon vertex data.

  - Lists all available sections (sectionName values) in a dropdown.

  - Upon selection of a section, renders all polygons of that section on a 2D canvas using D3.js.

  - Enables zooming and panning functionalities.

  - Allows users to select individual polygons.

  - Updates horizontal and vertical axes dynamically as the user zooms or pans.

  - Displays labeled X and Y axes.

- 3D Viewer

  - Loads and displays all polygons from all sections in a 3D space using Three.js.

  - Connects all polygon vertices to form a wireframe representation.

  - Renders a gridline at the floor, bound to the min/max coordinates of the dataset.

  - Supports zooming, panning, and rotating with mouse interactions.

3. Technologies Used

   - D3.js: Used for rendering 2D shapes and managing interactive features.

   - Three.js: Used for rendering 3D wireframe models and handling camera controls.

   - JavaScript (ES6+): Core programming language used for implementing the logic.

   - HTML & CSS: Basic structuring and styling of the web interface.

4. Deployment:

- The application has been deployed on AWS, and Render:

  - AWS: http://shape-visualization.s3-website.us-east-2.amazonaws.com/

  - Render: https://shape-visualization.onrender.com/

5. Author:
   Quan Tran

6. Acknowledgement:
   Thanks to Dr. Kien Dang for the idea, and data to build this application
