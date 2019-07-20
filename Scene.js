// This file will hold the scene

// THIS IS AN OBJECT:
// All points are given in an array of arrays, points MUST HAVE a 1 at the end (don't pay any attention to it) #2darray #joodethenoobe
// Triangles also in array of arrays, like this 1: [point_index_1, point_index_2, point_index_3, material_index]
var cube1 = 
{
    objectname: 'cube1',
    origin: [0, 0, 0],
    points:
    [
        [  1, -1, -1,  1],
        [  1, -1,  1,  1],
        [ -1, -1, -1,  1],
        [ -1, -1,  1,  1],
        [  1,  1, -1,  1],
        [  1,  1,  1,  1],
        [ -1,  1, -1,  1],
        [ -1,  1,  1,  1]
    ],
    pointsize: 3,
    rotation: [0, 0, 0],
    location: [-0.6, 5, 0],
    materials: [ '#f71', '#126', '#eb3', '#f71', '#e29', '#1b6', '#2cf', '#c00', '#c80'],
    triangles:
    [
        [ 0, 1, 2, 1],
        [ 1, 3, 2, 1],

        [ 4, 6, 5, 2],
        [ 5, 6, 7, 2],

        [ 3, 7, 6, 3],
        [ 3, 6, 2, 3],

        [ 1, 0, 4, 4],
        [ 1, 4, 5, 4],

        [ 3, 5, 7, 5],
        [ 3, 1, 5, 5],

        [ 4, 2, 6, 6],
        [ 4, 0, 2, 6]
    ],
    wireframe: false
};

var cube2 = 
{
    objectname: 'cube2',
    origin: [0, 0, 0],
    points:
    [
        [  0.6, -0.6, -0.6,  1],
        [  0.6, -0.6,  0.6,  1],
        [ -0.6, -0.6, -0.6,  1],
        [ -0.6, -0.6,  0.6,  1],
        [  0.6,  0.6, -0.6,  1],
        [  0.6,  0.6,  0.6,  1],
        [ -0.6,  0.6, -0.6,  1],
        [ -0.6,  0.6,  0.6,  1]
    ],
    pointsize: 3,
    rotation: [0, 0, 0],
    location: [3.2, 5, 0],
    materials: [ '#f71', '#126', '#eb3', '#f71', '#e29', '#1b6', '#2cf', '#c00', '#c80'],
    triangles:
    [
        [ 0, 1, 2, 1],
        [ 1, 3, 2, 1],

        [ 4, 6, 5, 2],
        [ 5, 6, 7, 2],

        [ 3, 7, 6, 3],
        [ 3, 6, 2, 3],

        [ 1, 0, 4, 4],
        [ 1, 4, 5, 4],

        [ 3, 5, 7, 5],
        [ 3, 1, 5, 5],

        [ 4, 2, 6, 6],
        [ 4, 0, 2, 6]
    ],
    wireframe: true
};

// Make camera
var camera3 = 
{
    location: [0, 15, 0],
    rotation: [90, 0, 180],
    fov: 35
};
// Make camera
var camera1 = 
{
    location: [1.3, 5, 13],
    rotation: [0, 0, 0],
    fov: 35
};
// Make camera
var camera2 = 
{
    location: [0, -5, 0],
    rotation: [90, 0, 0],
    fov: 35
};

var light = 
{
    intensity: 1,
    colour: '#fcd',
    direction: [ -1, 0.9, -1.4]
};

// Materials that will be used
var materials = [ '#f71', '#126', '#eb3', '#f71', '#e29', '#1b6', '#2cf', '#c00', '#c80'];

// Make a scene: array of all objects, camera, ambient colour, lamp, materials(array)
var introscene = 
{
    objects: [ cube1, cube2, Teapot, Car1 ],
    camera: camera2,
    ambient: '#269',
    light: light
};
