# Report
## Task 1: Theory
### a) Given a single convolutional layer with stride of 1, kernel size of 7x7, and 6 filters. If I want the output shape (height x width) of the convolutional layer to be equal to the input image, how much padding should i use on each side?
In order to make the output the same as the original image, we would need a padding of 3 on each side. This can be calculated by using the formula: $P = (F-S)/2$ where P is padding, F is filters and S is stride. I calculated this and checked it by drawing a 14x14 grid and applyign the kernel with this padding, resulting in a 14x14 grid.

### B) You are told that the spatial dimensions of the feature maps in the first layer are 506x506, and that there are 12 feature maps in the first layer. Assuming that no padding is used, the stride is 1 and the kernel used are square, and of an odd size, what are the spatial dimensions of these kernels? Give the answer as (height)x(Width).
The spatial dimensions of these kernels are 1x1. This can be calculated by calculating the width and height using the following formulas:

$W = ((I - K + 2 * P)/2)+1$

$H = ((I - K + 2 * P)/2)+1$

where W = Output width, H = output height, I = input width/Height, K = Kernel and P = padding.

Knowing the output and input height/width and the padding we can use the formula to calculate the kernel size. which results in 1x1. This satisfies the requirements of a square and odd size kernel. 

### C) If subsampling is done using neighborhoods of size 2x2, with a stride of 2, what are the spatial dimensions of the pooled feature maps in the first layer? (assume the input has a shape of 506x506). Give the answer as (Height)x(Width)
To find the spatial dimensions of the pooled feature maps in the first layer, we can use the folling formula:

$O = ((I-F + 2 * P)/S)+1$

almost the same as in B) difference here being that F (filter size) is used instead of K (Kernel). In this case we would have:

$O=((506-2+0)/2)+1$

This results in the output being 253, do the same for height and the dimensions will be 253x253

### D) The spatial dimensions of the convolution kernels in the second layer are 3x3. Assuming no padding and a stride of 1, what are the sizes of the feature maps in the second layer? (assume the input shape is the answer from the last task). Give the answer as (height) x (Width)
Using the same formula used in B) we can calculate the width and height of the feature maps in the second layer

$W = ((253 - 3 + 2*0)/1)+1$

$W = 251$ 

$H = ((253 - 3 + 2*0)/1)+1$

$H = 251$

The feature maps in the second layer has the spatial domain of 251x251.

### E) How many parameters are there in the network? In this network, the number of parameters is the number of weights + the number of biases. Assume the network takes in an 32x32 image.

```
TODO: Get back to this
```
## Task 2: Programming