---
last_modified_date: 2021-08-17 15:00:00 +0000
parent: gliff.ai
nav_order: 4
---

# Annotate

![Annotate Screenshot](/assets/images/annotate/annotate.png)

## Features

- Load raw images from local storage
- Integrated zoom and viewfinder
- Multiple object annotation and labelling
- Spline annotation for hard edge objects
- Up to 200% Contrast/Brightness adjustment
- Multi-channel, 3D image compatible
- Download annotations back to database

## Introduction

Welcome to the gliff.ai annotation tool, this has been designed to make it easy for domain-specific experts to add data to images enabling machine learning training.
Our custom browser-based UI is designed with this in mind, hopefully making the process easily accessible to annotators of all technical experience levels.
Please see below for detailed instructions on how to use the software.

## Upload/Download

![Annotate Import/Export](/assets/images/annotate/annotate_download.png)

Use the **Upload image** button to load your image for annotation.
Depending on your version, images can be uploaded from local storage or from gliff.ai managed storage. Once Annotations have been completed, they can be downloaded to the same storage location.
By clicking the **Download annotations** button you will be presented with the option to export specific types of annotation (magic spline, paintbrush) in the available formats (JSON, Tiff).

## Zoom

![Maximise Minimap Button](/assets/images/annotate/annotate_max_minimap.png)

To access zoom functionality, click on the **Maximise Map** button in the bottom right corner of the screen.

![Zoom Minimap](/assets/images/annotate/annotate_minimap.png)

This reveals the zoom and viewfinder controls.

![Zoom Controls](/assets/images/annotate/annotate_zoom.png)

Zoom level is controlled by the **Zoom In** and **Zoom Out** buttons.
When zoomed in, the portion of the image shown on screen is indicated by the viewfinder in the top right corner.

### Viewfinder

![Viewfinder Functions](/assets/images/annotate/annotate_view.png)

The viewfinder allows you to navigate and pan across an image whilst zoomed in.
The white rectangle overlay shows the currently displayed area of the main image.
Click and drag inside the white rectangle to pan across the zoomed image and view a different area.

### Fit to Page

![Fit to Page Function](/assets/images/annotate/annotate_fit.png)

To completely reset the view, click on the **Fit to Page** button.

## Annotation Management

![Controls for the Management of Annotations](/assets/images/annotate/annotate_management.png)

To begin annotating an object click the **Add New Annotation** button and select the desired functionality (see below).
To delete the current annotation in progress, click the **Clear Annotation** button.
To select a different click the **Select** button, click an area of the desired annotation and select the desired functionality.
To undo the last action, click the **Undo last action** and to redo the action, click the **Redo last action**.
Once annotations have been completed, click the **Save Annotations** button to confirm your changes.
Please note: if you leave annotate without saving then your annotations will not be added to the image metadata.

### Labelling

![Annotation Labels Interface](/assets/images/annotate/annotate_labels.png)

Any selected annotation can be labelled using the **Annotation Label** panel.
Once open, a new label can be created by typing in the **New Label** text field and clicking the **+**.
The label will be automatically applied to the annotation (denoted by green highlight).
Once multiple labels have been created, they can be toggled on and off for a selected annotation using the **+** and **X** arrow next to the desired label.

When multiple annotations are being labelled, the label panel can be pinned open (using the pin symbol, top right of the panel), otherwise the panel will close upon the next click outside the label panel.

### Trusted Services

3rd party annotation functions, connected to the platform as trusted services, can be accessed in Annotate using the **Trusted Services** button.

## Annotation Functionality

![Controls for Annotation Tools](/assets/images/annotate/annotate_function.png)

The Annotate app has multiple methods for the creation and editing of annotations.

### Paintbrush

![Paintbrush Functions](/assets/images/annotate/annotate_paintbrush.png)

By clicking the **Brush** button you can activate the paintbrush annotation tool.
The size slider will appear, allowing the radius of the brush to be altered within a range of 1 pixel to 20 pixels.
By clicking the **Eraser** button you can switch to a tool to erase sections of the current annotation.
If you have created a solid outline annotation using the paintbrush, you can fill the shape in using the **Fill Active Paintbrush** button.
The transparency of an annotation can be altered from 0-100% by clicking the **Annotation Transparency** button and using the right-hand slider, enabling a better view of the underlying image for more accurate annotations.

### Splines

![Spline Functions](/assets/images/annotate/annotate_spline.png)

By clicking the **Spline** button you can activate the spline annotation tool.
The default mode allows individual nodes for the spline annotation to be placed sequentially on the image, automatically connected to the last to create a single line.
The **Lasso Spline** tool allows multiple nodes to be placed around an object, connected by a continuous line, and a complete perimeter drawn by connecting back to the original node.
Using either spline tool, the current spline can be closed, connecting the first and last node, using the **Close Active Spline** button to create a custom spline shape.
The **Convert Spline to Paintbrush** function will convert the current, completed spline shape into a block annotation similar to using the paintbrush function.

### Rectangular Bounding Box

![Bounding Box Function](assets/images/annotate/annotate_box.png)

The **Rectangular Bounding Box** allows you to draw a straight forward rectangle annotation around a given area. First, click to select the top left corner position, then click the bottom right corner position. The position of any corner can be altered by clicking on the corner and dragging to a new position.

## Background Settings

![Controls for Background Image Settings](/assets/images/annotate/annotate_background.png)

There are multiple built-in tools to adjust the loaded image to make it easier to annotate. Click the **Background Settings** button to access these controls. Both **Contrast** and **Brightness** can be modified in the range of 0% to 200% using the sliders. For multi-channel images, the individual channels can also be selected from this panel using the **Channels** button.

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
