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



## Task 2: Programming
### B)
![task 2 b](/images/task2b.png)

### C)
![task 2 c](/images/task2c.png)

### D)
Filters and their detection

* First filter (leftmost in the previous image) detect edges in a vertical direction
* Second fitler detects edges in a diagonal direction, by this i mean edges from top left of the image to down right. 
* Third filter seems to detect transitions between different level of intensity
* The fourth filter detects lightly skewed horizontal lines
* The fifth filter seems to detect the same as the third filter, but negative colors (the same of three, but opposite colors). The filters look very similar, but with different colors which leads me to believe that they detect the same but for opposite polarity. This can also be seen from the activation image, they look the same but opposite. 

## Task 3: Theory
### A) Given the images in the spatial and frequency domain, pair each image in the spatial domain with a single image in teh frequency domain. Explain your reasoning

* 1a &rarr; 2f
* 1b &rarr; 2c
* 1c &rarr; 2e
* 1d &rarr; 2d
* 1e &rarr; 2b
* 1f &rarr; 2a

The patterns in each of the spatial domain images are repeating, and because there are two colors, we would find "peaks" and the distance between these peaks will correspond to the frequency of the pattern. So in this case i chose these connections due to their frequency and the direction of the peaks. 

### B) What are high-pass and low-pass filters?
High-pass filters is a filter that allows high-frequency components of an image to pass through while ignoring the lower-frequencies. High-frequency components correspond to sharp edges and details of an image.

Here is an example of an original image passed through a high-pass filter:

![high-pass filter](/images/high-pass.png)


The low-pass filters do the opposite of a high-pass filter, this means that the low-pass filter allows low-frequency components to pass through while ignoring the higher-frequencies. These low frequencies often correspond to smooth edges and details.

Here is an example of the same original image passed through a low-pass filter:

![low-pass filter](/images/low-pass.png)

source of images: https://demonstrations.wolfram.com/LowPassAndHighPassFilteringOfImages/

### C) For each kernel, figure out what kind of kernel it is (high- or low-pass). Shortly explain your reasoning.
I think that the first kernel (a) is low-pass as you can clearly see there are smoothed parts of the image, this is something the high-pass would ignore. This means that the second kernel (b) is high-pass, this also supports my claim due to there being no smoothed parts of the image.

## Task 4: Programming
### A)
![task 4 a](/images/task4a.png)

A "ringing" effect is visible on the first image (low-pass). This effect is a phenomenon that can be seen near sharp edges, it can be caused by distortion or loss of frequency information, or can be caused by passing through a low-pass filter.

### B)
![task 4 b](/images/task4b.png)

### C)
![task 4 c](/images/task4c.png)

### D)
![task 4 d](/images/task4d.png)