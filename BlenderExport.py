import bpy

# Put the name of object you want to convert
object = 'Icosphere'

hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
tab = '    '
obj = bpy.data.objects[object]
mesh = obj.data

faces = []
for face in mesh.polygons:
    faces.append(face.vertices[0])
    faces.append(face.vertices[1])
    faces.append(face.vertices[2])
    faces.append(face.material_index)

verts = []
for vert in mesh.vertices:
    verts.append(vert.co.xyz)

print( 'var ' + object + ' =' )
print( '{' )

print( tab + "objectname: '" + object + "'," )
print( tab + 'origin: [0, 0, 0],' )

print( tab + 'points:' )
print( tab + '[' )
count = 0
while count < len(verts):
    print( tab + tab + str( float(int(verts[count][0] * 1000000)) / 1000000 ) + ', ' + str( float(int(verts[count][1] * 1000000)) / 1000000 ) + ', ' + str( float(int(verts[count][2] * 100000000)) / 100000000 ) + ', ' )
    count = count + 1
print( tab + '],' )

print( tab + "colour: '#f71'," )
print( tab + 'colours:' )

print( tab + '[' )
count = 0
while count < len(obj.material_slots):
    r = obj.material_slots[count].material.diffuse_color[0]
    g = obj.material_slots[count].material.diffuse_color[1]
    b = obj.material_slots[count].material.diffuse_color[2]
    hexcolour = "'#" + hex[ int(r * 15) ] + hex[ int(g * 15) ] + hex[ int(b * 15) ] + "',"
    print( tab + tab + hexcolour )
    count = count + 1
print( tab + '],' )

print( tab + 'colouropacities:' )
print( tab + '[' )
count = 0
while count < len(obj.material_slots):
    alpha = obj.material_slots[count].material.alpha
    print( tab + tab + str(alpha) + ',' )
    count = count + 1
print( tab + '],' )

print( tab + 'pointsize: 3,' )
print( tab + 'location: [0, 0, 0],' )
print( tab + 'rotation: [0, 0, 0],' )

print( tab + 'triangles:' )
print( tab + '[' )
count = 0
while count < len(faces):
    print( tab + tab + str(faces[count]) + ', ' + str(faces[count + 1]) + ', ' + str(faces[count + 2]) + ', ' + str(faces[count + 3]) + ',' )
    count = count + 4
print( tab + '],' )

print('};')
