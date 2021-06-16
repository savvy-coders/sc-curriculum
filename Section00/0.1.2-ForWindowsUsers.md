# Setting Up Your Development Environment (For Windows Users)
1. Install the [Google Chrome browser](https://www.google.com/chrome/) if you do not already have it
2. Sign-up for [GitHub](https://github.com/)
3. Download and install [Visual Studio Code](https://code.visualstudio.com/)
   - when installing, most default settings are fine
   - on the "Select Additional Tasks" page, check all the boxes under "Other"
4. Download and install [git](https://git-scm.com/downloads)
   - when installing, _some_ default settings are fine
   - on the "**Select components**" page,
     - un-check "Git LFS"
     - check "Use a TrueType font in all console windows"
   - on the "**Choosing the default editor used by Git**" page, select "Use Visual Studio Code as Git's default editor"
   - on the "**Adjusting your PATH environment**" page, select the recommended middle option: "Git from the command line and also from 3rd-party software"
   - on the "**Configuring the line ending conversions**" page, select the middle option: "Checkout as-is, commit Unix-style line endings
5. Download and install [Node](https://nodejs.org/en/download/)
   - when installing, **all** default settings are fine
6. Check that you have installed everything correctly by running the following commands in your terminal:
   - `node -v`
     - you should see something like `v12.13.0` (the exact numbers may not match)
   - `git --version`
     - you should see something like `git version 2.27.0.windows.1` (the exact numbers may not match)
   - `code`
     - this should launch a new VS Code window
