#version 430 core

out vec4 color;

void main()
{
    float cellSize = 50.0;
    ivec2 fragCoord = ivec2(gl_FragCoord.xy);
    ivec2 cellIndices = fragCoord / ivec2(cellSize);
    bool isEven = mod(cellIndices.x + cellIndices.y, 2) == 0;
    if (isEven) {
        color = vec4(0.1, 0.5, 0.1, 1.0); // Black
    } else {
        color = vec4(1.0, 1.0, 1.0, 1.0); // White
    }
}