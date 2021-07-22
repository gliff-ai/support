# Annotate

![alt text](https://github.com/gliff-ai/document/blob/philhallbio-rebrand/assets/Full%20Screen.png)

## Features

**Load raw images from local storage**

**Integrated zoom and viewfinding**

**Multiple object annotation and labelling**

**Magic Spline annotation for hard edge objects**

**Up to 200% Contrast/Brightness adjustment**

**Multi-channel, 3D image compatible**

**Download annotations back to database**

## Introduction

Welcome to the gliff.ai annotation tool, this has been desgined to make it easy for domain-specific experts to add data to images enabling machine learning training. Our custom browser-based UI is designed with this in mind, hopefully making the process easily acessible to annotators of all technical experience levels. Please see below for detailed instructions on how to use the software.

## Upload/Download

![alt text](https://github.com/gliff-ai/document/blob/philhallbio-rebrand/assets/Upload:Download.png)

Use the **Upload image** button to load your image for annotation. Depending on your version, images can be uploaded from loacl storage or from gliff.ai managed storage. Once Annotations have been completed, they can be downloaded to the same storage location. By clicking the **Download annotations** button you will be presented with the option to export specifc types of annotation (magicspline, paintbrush) in the available formats (JSON, Tiff). 

## Zoom

![alt text](https://github.com/gliff-ai/document/blob/philhallbio-rebrand/assets/Viewfinder.png)

To access zoom functionality, click on the **Maximise Map** button in the bottom right corner of the screen. This reveals the zoom and viewfinder controls. Zoom level is controlled by the **Zoom In** and **Zoom Out** buttons. When zoomed in, the portion of the image shown on screen is indicated by the viewfinder in the top right corner.

### Viewfinder

The viewfinder allows you to navigate and pan across an image whilst zoomed in. The white rectangle overlay shows the currently displayed area of the main image. Click and drag inside the white rectangle to pan across the zoomed image and view a different area.

![alt text](https://github.com/gliff-ai/document/blob/philhallbio-rebrand/assets/Zoomed.png)

### Fit to Page

To completely reset the view, click on the **Fit to Page** button.

## Annotation Management

![alt text](https://github.com/gliff-ai/document/blob/philhallbio-rebrand/assets/Annotation%20Management.png)

To begin annotating an object click the **Add New Annotation** button and select the desired functionality (see below). To delete the current annotation in progress, click the **Clear Annotation** button. To select a different click the **Select** button, click an area of the desired annotation and select the desired functionality.

### Labelling

![alt text](https://github.com/gliff-ai/document/blob/philhallbio-rebrand/assets/Labelling.png)

A selected annotation can be labelled using the **Annotation Label** panel. Once open, a new label can be created by typing in the **New Label** text field and clicking the **+**. The label will be automatically applied to the annotation (denoted by green highlight). Once multiple labels have been created, they can be toggled on and off for a selected annotation using the **+** and **X** arrow next to the desired label.

When multiple annotations are being labelled, the label panel can be pinned open (using the pin symbol, top right of the panel), otherwise the panel will close upon the next click outside the label panel.  

## Annotation Functionality

![alt text](https://github.com/gliff-ai/document/blob/philhallbio-rebrand/assets/Annotation%20Functionality%20.png)

The Annotate app has multiple methods for the creation and editing of annotations.

### Paintbrush

![alt text](https://github.com/gliff-ai/document/blob/philhallbio-rebrand/assets/Brush.png)

By clicking the **Brush** button you can activate the paintbrush annotation tool. The size slider will appear, allowing the radius of the brush to be altered within a range of 1 pixel to 20 pixels. By clicking the **Eraser** button you can switch to a tool to erase sections of the current annotation.

### Splines

![alt text](https://github.com/gliff-ai/document/blob/philhallbio-rebrand/assets/Spline.png)

By clicking the **Spline** button you can activate the spline annotation tool. Individual nodes for the spline annotation can then be placed sequentially on the image, automatically connected to the last to create a single line.

### Magic Splines

Magic splines work in much the same way as the spline function. However the magic spline will not place at the point clicked, but at the nearest "hard edge" detected by the software. In this way you can rapidly annotate images with clearly defined lines. Click the **Magic Spline** button to activate.

## Image

![alt text](https://github.com/gliff-ai/document/blob/philhallbio-rebrand/assets/Image.png)

There are multiple built-in tools to adjust the loaded image to make it easier to annotate. Both **Contrast** and **Brightness** can be modified in the range of 0% to 200% using the sliders. For multi-channel images, the individual channels can also be selected from this panel using the **Channels** button.
