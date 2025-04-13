/* 
* FILE          : app-help\page.tsx
* PROJECT       : Spatial Audio Toollkit
* PROGRAMMER    : Gagana "Gage" Hettiarachchige
* FIRST VERSION : 2025-04-10
* DESCRIPTION   :
*   This file is the app help page of the wiki.
*/

import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Page header. */}
      <h1 className="PageHeader content-center text-center items-center">
        App Help
      </h1>

      {/****Should make a sections. */}
      
      {/*  Project creation and saving. */}
      <div className="textblobregular border border-solid">
        <h1>PROJECT CREATION, SAVING, & LOADING</h1>
        <p>
          The SAT is a DAW like many others which allows users to create,
          save, and load projects of work. Currently, the SAT allows the
          user to work with files on their machine (either on their disk
          or some other cloud storage system accessible through the file 
          dialog).
        </p>
        <br></br>
        <div>
          <h2>Creating Projects</h2>
          To get started with the SAT, a user will need to create a 
          project.
          <br></br>
          <br></br>
          <h3>On the project menu:</h3>
          1. Select from one of the four presets: 
          (Blank, Studio, Theater, or Stadium)
          <br></br>
          2. Select the "Create New (Blank, Studio, Theater, or Stadium)"
          button
          <br></br>
          3. Once a project is created, it automatically loads in the 
          project that was just created.
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div>
          <h2>Saving Projects</h2>
          When a project is changed in anyway (user moves, new output 
          moved or placed, track clips created, etc.) the user can save 
          the project currently open manually. The SAT app also 
          automatically saves the project that's currently opened 
          when the app is closed.
          <br></br>
          <br></br>
          <h3>In an opened project:</h3>
          1. Using a shortcut:
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;A) Press CTRL + 'S' keys together OR 
          Press 'E' key
          <br></br>
          2. OR using dropdown:
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;A) Select the 'File' dropdown
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;B) In opened dropdown, click 
          'Save Project'
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div>
          <h2>Save Project As New</h2>
          The user can create a copy of the project opened with an 
          updated name.
          <br></br>
          <br></br>
          <h3>In an opened project:</h3>
          1. Using a shortcut:
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;A) Press CTRL + SHIFT + 'S' keys 
          together OR Press CTRL + 'E' keys together
          <br></br>
          2. OR using dropdown:
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;A) Select the "File" dropdown
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;B) In opened dropdown, click 
          "Save Project As"
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div>
          <h2>Loading Projects</h2>
          The user can load an existing project to work on.
          <br></br>
          <br></br>
          <h3>On the project menu:</h3>
          1. Select the "Browse" button
          <br></br>
          2. Navigate and select the project directory to be opened marked with
          a ".SAT" extension OR a directory containing the project to
          be opened
          <br></br>
          3. Select the "Select Folder" button
          <br></br>
          4. If a project was selected directly from the browser, it will
          load the selected project in automatically
          <br></br>
          5. If a directory containing projects was selected,
          it would show the projects in the browse section list
          <br></br>
          6. Selecting one of the projects from the list will 
          automatically open it
          <br></br>
          <br></br>
          <br></br>
        </div>
        Tip: The user can go back to the project menu by either
        pressing the 'P' key or selecting the "File" dropdown
        then selecting the "Back To Project Menu" option
      </div>

      {/*  Movement and Looking. */}
      <div className="textblobregular border border-solid">
        <h1>MOVEMENT & LOOKING</h1>
        <p>
          Once loaded into a project, the user can move and look around
          in the space they are loaded in freely.
        </p>
        <br></br>
        <br></br>

        <div>
          <h2>Movement</h2>
          The user can move vertically and horizontally.
          <br></br>
          <br></br>
          <h3>In an opened project:</h3>
          1. Use WASD keys to move around where the 'W' key will 
          move the user forwards, the 'S' key will move the user 
          backwards, the 'A' key will move the user to the left, 
          and the 'D' key will move the user to the right relative
          to their perspective
          <br></br>
          2. While holding the SHIFT key, pressing the 'W' key will 
          instead move the user upwards, and pressing the 'S' key will
          move the user downwards
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div>
          <h2>Looking</h2>
          The user can lookaround in the space using the mouse.
          <br></br>
          <br></br>
          <h3>In an opened project:</h3>
          1. Click and hold the right mouse button (AKA Mouse 2)
          <br></br>
          2. Drag towards the direction to look at with the mouse
          <br></br>
          3. To stop looking, let got of the the right mouse button
          <br></br>
          <br></br>
          <br></br>
        </div>
        
      </div>

      {/*  Audio output placement. */}
      <div className="textblobregular border border-solid">
        <h1>AUDIO OUTPUT PLACEMENT</h1>
        <br></br>
        <p></p>
      </div>

      {/*  Importing Audio and managing audio clip pool. */}
      <div className="textblobregular border border-solid">
        <h1>IMPORTING AUDIO & MANAGING AUDIO CLIP POOL</h1>
        <br></br>
        <p></p>
      </div>

      {/*  Trackclip management. */}
      <div className="textblobregular border border-solid">
        <h1>TRACKCLIP PLACEMENT & MANAGING TRACKCLIPS</h1>
        <br></br>
        <p></p>
      </div>

      {/*  Exporting. */}
      <div className="textblobregular border border-solid">
        <h1>EXPORTING</h1>
        <br></br>
        <p></p>
      </div>

    </div>
  );
}