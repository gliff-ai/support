---
last_modified_date: 2021-08-17 15:00:00 +0000
---

# Annotate

![alt text](/assets/images/annotate_screenshot.png)

## Features

- Load raw images from local storage
- Integrated zoom and viewfinding
- Multiple object annotation and labelling
- Magic Spline annotation for hard edge objects
- Up to 200% Contrast/Brightness adjustment
- Multi-channel, 3D image compatible
- Download annotations back to database

## Introduction

Welcome to the gliff.ai annotation tool, this has been designed to make it easy for domain-specific experts to add data to images enabling machine learning training. Our custom browser-based UI is designed with this in mind, hopefully making the process easily accessible to annotators of all technical experience levels. Please see below for detailed instructions on how to use the software.

## Upload/Download

![alt text](/assets/images/annotate_import-export.png)

Use the **Upload image** button to load your image for annotation. Depending on your version, images can be uploaded from local storage or from gliff.ai managed storage. Once Annotations have been completed, they can be downloaded to the same storage location. By clicking the **Download annotations** button you will be presented with the option to export specific types of annotation (magicspline, paintbrush) in the available formats (JSON, Tiff).

## Zoom

![alt text](/assets/images/annotate_viewfinder.png)

To access zoom functionality, click on the **Maximise Map** button in the bottom right corner of the screen. This reveals the zoom and viewfinder controls. Zoom level is controlled by the **Zoom In** and **Zoom Out** buttons. When zoomed in, the portion of the image shown on screen is indicated by the viewfinder in the top right corner.

### Viewfinder

The viewfinder allows you to navigate and pan across an image whilst zoomed in. The white rectangle overlay shows the currently displayed area of the main image. Click and drag inside the white rectangle to pan across the zoomed image and view a different area.

![alt text](/assets/images/annotate_zoomed-in.png)

### Fit to Page

To completely reset the view, click on the **Fit to Page** button.

## Annotation Management

![alt text](/assets/images/annotate_CRUD.png)

To begin annotating an object click the **Add New Annotation** button and select the desired functionality (see below). To delete the current annotation in progress, click the **Clear Annotation** button. To select a different click the **Select** button, click an area of the desired annotation and select the desired functionality. To undo the last action, click the **Undo last action** and to redo the action, click the **Redo last action**.

### Labelling

![alt text](/assets/images/annotate_labelling.png)

A selected annotation can be labelled using the **Annotation Label** panel. Once open, a new label can be created by typing in the **New Label** text field and clicking the **+**. The label will be automatically applied to the annotation (denoted by green highlight). Once multiple labels have been created, they can be toggled on and off for a selected annotation using the **+** and **X** arrow next to the desired label.

When multiple annotations are being labelled, the label panel can be pinned open (using the pin symbol, top right of the panel), otherwise the panel will close upon the next click outside the label panel.

## Annotation Functionality

![alt text](/assets/images/annotate_tools.png)

The Annotate app has multiple methods for the creation and editing of annotations.

### Paintbrush

![alt text](/assets/images/annotate_brush.png)

By clicking the **Brush** button you can activate the paintbrush annotation tool. The size slider will appear, allowing the radius of the brush to be altered within a range of 1 pixel to 20 pixels. By clicking the **Eraser** button you can switch to a tool to erase sections of the current annotation.

### Splines

![alt text](/assets/images/annotate_spline.png)

By clicking the **Spline** button you can activate the spline annotation tool. The default mode allows individual nodes for the spline annotation to be placed sequentially on the image, automatically connected to the last to create a single line. The **Lasso Spline** tool allows multiple nodes to be placed around an object, connected by a continuous line, and a complete perimeter drawn by connecting back to the orignal node. The **Convert Spline to Paintbrush** function will convert the current, completed perimeter spline into a block annotation similar to using the paintbrush function.

### Rectangular Bounding Box

The **Rectangular Bounding Box** allows you to draw a straight forward rectangle annotation around a given area. First, click to select the top left corner position, then click the bottom right corner position. The position of any corner can be altered by clicking on the corner and dragging to a new position.

## Image

![alt text](/assets/images/annotate_image-controls.png)

There are multiple built-in tools to adjust the loaded image to make it easier to annotate. Both **Contrast** and **Brightness** can be modified in the range of 0% to 200% using the sliders. For multi-channel images, the individual channels can also be selected from this panel using the **Channels** button.

| Button                       | Shortcut                         |
| ---------------------------- | -------------------------------- |
| Upload images                | <kbd>u</kbd>                     |
| Download images              | <kbd>d</kbd>                     |
| Maximise Map                 | <kbd>Alt</kbd>+<kbd>=</kbd>      |
| Minimise Map                 | <kbd>Alt</kbd>+<kbd>-</kbd>      |
| Zoom In                      | <kbd>Alt</kbd>+<kbd>1</kbd>      |
| Zoom Out                     | <kbd>Alt</kbd>+<kbd>2</kbd>      |
| Fit to Page                  | <kbd>Alt</kbd>+<kbd>3</kbd>      |
| Select                       | <kbd>a</kbd>                     |
| Add New Annotation           | <kbd>=</kbd>                     |
| Clear Annotation             | <kbd>-</kbd>                     |
| Annotation Label             | <kbd>CTRL</kbd>+<kbd>Space</kbd> |
| Undo                         | <kbd>CTRL</kbd>+<kbd>z</kbd>     |
| Redo                         | <kbd>CTRL</kbd>+<kbd>y</kbd>     |
| Brush                        | <kbd>b</kbd>                     |
| Eraser                       | <kbd>e</kbd>                     |
| Spline                       | <kbd>s</kbd>                     |
| Lasso Spline                 | <kbd>o</kbd>                     |
| Close Active Spline          | <kbd>l</kbd>                     |
| Convert Spline to Paintbrush | <kbd>CTRL</kbd>+<kbd>q</kbd>     |
| Rectangular Bounding Box     | <kbd>r</kbd>                     |
| Brightness                   | <kbd>/</kbd>                     |
| Contrast                     | <kbd>\</kbd>                     |
| Channels                     | <kbd>c<kbd>                      |
