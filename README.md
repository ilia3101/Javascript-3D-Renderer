# Javascript 3D Renderer
This is my first attempt at 3D graphics programming from many years ago. I went in to this with zero knowledge of how realtime 3D graphics rendering works, just to see what I could do. There is no OpenGL (WebGL) involved, in fact I didn't even know WebGL existed. All rendering is done on a HTML canvas with triangles.

### How it works
Input data is simply the camera location, light direction and a set of triangles with colours. The renderer sorts the triangles by distance from the camera and draws them using calls to the HTML canvas. The colour of a triangle is determined through the dot product of its normal and the light's direction. Something similar to a fresnel effect is also done, this adds a glow around the edges of the model.

The 3D models are represented as javascript objects (JSON). After getting bored of staring at a manually written cube, I wrote a Python script that can be run in Blender to export a 3D model in to this format (with colours!).

No help from any libraries for the 3D vector maths 😁

### Notes
As I did not know about the conecpt of depth buffers and instead simply rendered all triangles in order of distance from the camera, there are very visible problems when intersections happen.
