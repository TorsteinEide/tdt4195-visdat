# Report
## Task 1: Theory
### a) Define *opening* and *closing* in terms of *erosion* and *dilation*. What happens when opening and closing are applied multiple times ont he same image?
Opening and closing are very similar to erosion and dilation, however the order of operations is crucial. Erosion and dilation haev distinct effects on an image, and opening and closing leverage these effects in a specific order to achieve their respective goals. So we can describe opening and closing as combinations of erosion and dilation. 

Opening is a process used to restore or recover an original image, while closing is used to smooth a distorted image. Opening and closing are dual operations, and they can be described as combinations of erosion and dilation. For example opening is a process that uses both erosion and dilation. while the opposite is true for closing. 

If we assume that we would first perform opening, and then closing repeatedly on the same image, the result may converge towards the original image, as opening involves erosion followed by dilation. However, it is important to note that repeated erosion steps during the opening can lead to a loss of finer details, so the final image may not be identical to the original. The overall effect tends to simplify the image and reduce small-scale features, with closing helping ot restore some of the lost structure by dilating the remaining elements. 

### B) Smoothing of an image is often done before performing edge detection. What is the purpose of smoothing an image before edge detection?
Smoothing is often applied to the image before edge detection because it can remove noise that would become very visible while detecting edges so that they are not mistaken for edges while edge detecting. In summary smoothing is done to reduce noise and make the real edges more clear. 

### C) The Canny edge detector uses a method called *hysteresis thresolding*. Shortly explain how hysteresis thresholding works.
Hysteresis threshold is a method for reducing sensitivity to noise and produce more robust edge detection. It works by introducting a low and high threshold. these two thresholds are used to detect values over the low threshold and below the high threshold. The values within this range are then connected to the pixels that are above the high threshold. This results in a continuous edge. 

### D) Why do we use hysteresis thresholding instead of single threshold?
Hysteresis is used instead of single due to its ability to be more versatile. It provides a more nuanced way to indentify edges by incorperating both high and low-thresholds, enabling noise reduction which makes for a more robust edge detection.