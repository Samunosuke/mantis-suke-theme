# mantis-suke-theme

This is a theme for the mantis bt 2.x branch. It allows to change the visual style of the Mantis BT 
without overriding or changing any file of the Mantis BT installation.

This template requires the MantisThemeManager plugin: https://github.com/Samunosuke/MantisThemeManager
Thanks Tim Petruski!

<img src="https://github.com/Samunosuke/mantis-suke-theme/blob/master/suke/suke.png" height="200" alt="suke theme for MantisBT">

[Download](https://github.com/Samunosuke/mantis-suke-theme/zipball/master)

## Version
0.2

## Installation:
1. Copy the MantisThemeManager folder to /mantis/plugins (.../mantis/plugins/MantisThemeManager)
2. Create the themes folder in the mantis/css directory if it does not yet exist
3. Copy the suke folder with all content into the mantis themes folder (.../mantis/css/themes/suke)
4. Access the Management interface in Mantis BT, go to "Manage Plugins"
5. Install the MantisThemeManager plugin
6. Open the MantisThemeManager configuration interface (click on the name which became a link)
7. Choose the theme and apply by clicking the "Change theme" button

Tested with Mantis BT 2.3.0 & 2.9.0

## ToDo
- change pure java script implementation to use jQuery
- improve the style

## I know
- it does not yet look nice / it is just a proof of concept
- it's a hackish implementation

Changes:
V 0.2 
- added bottom colored line for the issues rows
- removed gradient from the issue rows - did not look nice 

V 0.1
first proof of concept

