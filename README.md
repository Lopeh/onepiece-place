# onepiece-place
OnePiece /r/place repo to store the template and script for outlining the place to put titles 

This script & repo relies on the OsuTemplate project https://github.com/osuplace/templateManager

## HOW TO USE THE TEMPLATE AND SCRIPT ON /r/place
Our friends at r/osuplace have made an overlay script! Use this to make sure you're placing pixels in the right spot.

### Extension (Step 1: Download)

USE THIS FOR CHROME/OPERA
[https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en]

USE THIS FOR FIREFOX
[https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/]

### Userscript (Step 2: Install)

Install/click [templateManager.user.js](https://github.com/osuplace/templateManager/raw/main/dist/templateManager.user.js) from the Osu Template repo.

(If you're having trouble installing, check out this video to manually install the userscript [https://discord.com/channels/205770721085882370/958878173871886397/959513509102764033])

### Running (Step 3: Inject OnePlace template!)

Head back to r/place, and do a hard refresh (ctrl+shift+r / ctrl+f5). You should see a new hamburger menu like this if it's working:
![image](https://github.com/Lopeh/onepiece-place/assets/13429544/07115573-0236-421f-bccf-448b7c2f3e88)

Open the menu and add our template into the Always Load section:
  Our template URL: https://raw.githubusercontent.com/Lopeh/onepiece-place/main/2023-oneplace-template.json
  What it should look like:
![image](https://github.com/Lopeh/onepiece-place/assets/13429544/f9c5791e-0b18-42ff-96a2-6729100dd0c9)

### Place!

Now you should see our pixels outlined in the template. Start placing!


## Coordination Efforts

We're coordinating at [OnePlace Discord](discord.gg/QpgpC53aSr) and on [r/OnePlace](reddit.com/r/onepiece).

When updates in #announcements are made, hard-refresh the page to get the latest templates.

## To edit the template:

(Ignore this section until we make updates!)

Edit the [onepiece_full.png](onepiece_full.png) file without changing the pixel dimensions. Then run the [dithering.py](dithering.py) script on the image. PR:

* YOUR EDITED onepiece_full.png
* the output onepiece_template.png

Merge it!
