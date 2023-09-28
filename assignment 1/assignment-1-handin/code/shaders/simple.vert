#version 430 core

in vec3 position;

mat3 mirrored = mat3 (
    -1.0, 0.0, 0.0, 
    0.0, -1.0, 0.0,
    0.0,  0.0, 1.0
);

void main()
{

    vec3 transformed = mirrored*position;
    gl_Position = vec4(transformed, 1.0f); // change "transformed" to "position" to display original image
}