---
sidebar_position: 2
---

# Curate

![Curate Screenshot](/img/curate/curate.png)

## Feature

- Flexible image previews
- Custom labelling including search
- Full metadata sort
- Trusted service hosting via API

## Size and Select

![Thumbnail Size and Multiple Image Selection Tools](/img/curate/curate_size.png)

The thumbnail size selector panel allows the user to easily alter the image previews to suit requirements.
Click the **Large Thumbnails**, **Medium Thumbnails** or **Small Thumbnails** button to switch between views.

Clicking on a image preview will highlight the selected image and display the metadata for that image.
Selecting multiple images using standard **Shift + Click** or **CTRL + Click** functions and then clicking the **Select Multiple Images** button will reveal a new panel summarising image numbers and the **Delete Images** button.

Double-clicking on any image will take you through to the **Annotate** app for image markup.

## Sort

![Metadata Sort Interface](/img/curate/curate_sort.png)

Clicking the **Sort** button reveals the sort panel.
By selecting a given image characteristic from the dropdown menu (e.g. Name, Size) and selecting the sort type (**ASC** or **DESC**) the sort can be applied by clicking the **Sort** button.

## Label

![Update Image Label Button](/img/curate/curate_update_label.png)

Every image can be individually labelled by click the **Update image labels** flag on the desired image.
This will open the label panel for the clicked image.

![Image Label Pop-Up](/img/curate/curate_label.png)

A Label can be added to the image by typing in the **New Label** textbox and clicking the **+** button.
The labels attached to a given image are show at the button of the panel and can be removed by clicking the **x** button next to a particular label.

All labels used on the image collection can be viewed in the **Annotation Labels** dropdown.
Using the arrows next to the labels, and the **Select all labels** or **Deselect all labels** button, single or multiple labels can be selected (denoted by a **Green** arrow).
Only images that have all the selected labels will be shown.
Additionally, all unlabelled images can be displayed using the **Select all unlabelled images** button.

## Search

![Metadata Search Interface](/img/curate/curate_search.png)

Images can be searched for using any image characteristic or label.
Clicking the **Search Category** dropdown will allow you to select an image characteristic or label to search.
Clicking the **...** textbox you can type a search term or select from suggested search terms.
Clicking the **Search** button will apply the search.

![Curate Extra Function Controls](/img/curate/curate_functions.png)

## Collections

If you have access to multiple collections, these can be viewed by clicking the **View Collection** button. Changes to the current collection are saved automatically as they are made.

## Upload/Download

Whole datasets and image selections can be uploaded and downloaded from your machine using the **Upload Image** button and the **Download Dataset** buttons.

## Trusted Services

The **Trusted Services** button allows you to view any proprietary software that has been connected to the gliff.ai app via API for data analysis or AI hosting.

## Assigning Collaborators

There are two methods to assign collaborators to specific images with Curate: Manual and Auto-assign.

### Auto-assign

![Auto-assign Button](/img/curate/curate_auto.png)

If you only wish to assign some of the images within the collection, select them using the **Select Multiple Images** button.
To initiate an auto-assign, click the **Auto Assign** button.

![Auto-assign Pop-up for New Assignment](/img/curate/curate_auto_new.png)

A pop-up will appear, you can choose whether to assign all images within the collection or just the currently selected images using the drop-down.
You can also select the number of people assigned to each image, so multiple users can annotate a single image for comparison.
Once complete, click the **assign** button

![Auto-assign Pop-Up for Existing Assignment](/img/curate/curate_auto_existing.png)

If some of the images have been assigned previously, you will be presented with a warning and an additional drop-down to decide if you want to perform a **new** assignment, which will overwrite previous assignments, or an **integrative** assignment, which will leave previous assignments, but take them into account for the balance of assignments to new images.

![Incorrect Assigment Balance Warning](/img/curate/curate_auto_balance.png)

If the image selection is not able to be assigned in a balanced way, you will receive an error message and will need to alter assignment settings in order to continue.

### Manual Assignment

To manually assign images, first select the desired images using the **Select Multiple Images** button.
Click the **Update Assignees** button.

![Update Assignees Button](/img/curate/curate_assignees.png)
![Manual Assignment Pop-Up](/img/curate/curate_manual.png)

A pop-up will appear where you can select users by name to be added or removed as an assignee to the selected images.
Click **Assign** when finished.
