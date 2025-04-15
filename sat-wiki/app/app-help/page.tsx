/* 
* FILE          : app-help\page.tsx
* PROJECT       : Spatial Audio Toollkit
* PROGRAMMER    : Gagana "Gage" Hettiarachchige
* FIRST VERSION : 2025-04-10
* DESCRIPTION   :
*   This file is the app help page of the wiki.
*/

import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Page header. */}
      <h1 className="PageHeader content-center text-center items-center">
        App Help
      </h1>

      {/* Quick Links. */}
      <div className="textblobspecial border border-solid">
        Chapter Quick Links:
        <ul>
          <li>
            <Link href="#project-creation">
              1. PROJECT CREATION, SAVING, & LOADING
            </Link>
          </li>
          <li>
            <Link href="#creating-projects">
              1.1 Creating Projects
            </Link>
          </li>
          <li>
            <Link href="#saving-projects">
              1.2 Saving Projects
            </Link>
          </li>
          <li>
            <Link href="#save-project-as-new">
              1.3 Save Project As New
            </Link>
          </li>
          <li>
            <Link href="#loading-projects">
              1.4 Loading Projects
            </Link>
          </li>


          <li>
            <Link href="#movement-and-looking">
              2. MOVEMENT & LOOKING
            </Link>
          </li>
          <li>
            <Link href="#movement">
              2.1 Movement
            </Link>
          </li>
          <li>
            <Link href="#looking">
              2.2 Looking
            </Link>
          </li>


          <li>
            <Link href="#audio-output-placement">
              3. AUDIO OUTPUT PLACEMENT
            </Link>
          </li>
          <li>
            <Link href="#placing-outputs">
              3.1 Placing Outputs
            </Link>
          </li>
          <li>
            <Link href="#moving-outputs">
              3.2 Moving Outputs
            </Link>
          </li>
          <li>
            <Link href="#deleting-outputs">
              3.2 Deleting Outputs
            </Link>
          </li>


          <li>
            <Link href="#importing-audio-and-managing-audio-clip-pool">
              4. IMPORTING AUDIO & MANAGING AUDIO CLIP POOL
            </Link>
          </li>
          <li>
            <Link href="#importing-audio">
              4.1 Importing Audio
            </Link>
          </li>
          <li>
            <Link href="#preview-imported-audio">
              4.2 Previewing Imported Audio
            </Link>
          </li>
          <li>
            <Link href="#deleting-imported-audio">
              4.3 Deleting Imported Audio
            </Link>
          </li>

          <li>
            <Link href="#track-clip-placement-and-managing-track-clips">
              5. TRACK CLIP PLACEMENT & MANAGING TRACK CLIPS
            </Link>
          </li>
          <li>
            <Link href="#placing-track-clip">
              5.1 Placing Track Clip
            </Link>
          </li>
          <li>
            <Link href="#finetuning-track-clip-start">
              5.2 Finetuning Track Clip Start
            </Link>
          </li>
          <li>
            <Link href="#trimming-track-clip">
              5.3 Trimming Track Clip
            </Link>
          </li>
          <li>
            <Link href="#deleting-track-clip">
              5.4 Deleting Track Clip
            </Link>
          </li>


          <li>
            <Link href="#controlling-timeline">
              6. CONTROLLING TIMELINE
            </Link>
          </li>
          <li>
            <Link href="#playing-and-pausing">
              6.1 Playing & Pausing
            </Link>
          </li>
          <li>
            <Link href="#controlling-playhead">
              6.2 Controlling Playhead
            </Link>
          </li>
          <li>
            <Link href="#setting-loop">
              6.3 Setting Loop
            </Link>
          </li>

          <li>
            <Link href="#exporting">
              7. EXPORTING
            </Link>
          </li>
          <li>
            <Link href="#exporting-audio">
              7. Exporting Audio
            </Link>
          </li>
        </ul>
      </div>
      

      
      {/*  Project creation and saving. */}
      <div id="project-creation" className="textblobregular border border-solid">
        <h1>PROJECT CREATION, SAVING, & LOADING</h1>
        <p>
          The SAT is a DAW like many others which allows users to create,
          save, and load projects of work. Currently, the SAT allows the
          user to work with files on their machine (either on their disk
          or some other cloud storage system accessible through the file 
          dialog).
        </p>
        <br></br>
        <div id="creating-projects">
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

        <div id="saving-projects">
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
          1.1 Press CTRL + 'S' keys together OR 
          Press 'E' key
          <br></br>
          2. OR using dropdown:
          <br></br>
          2.1 Select the 'File' dropdown
          <br></br>
          2.2 In opened dropdown, click 
          'Save Project'
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div id="save-project-as-new">
          <h2>Save Project As New</h2>
          The user can create a copy of the project opened with an 
          updated name.
          <br></br>
          <br></br>
          <h3>In an opened project:</h3>
          1. Using a shortcut:
          <br></br>
          1.1 Press CTRL + SHIFT + 'S' keys 
          together OR Press CTRL + 'E' keys together
          <br></br>
          2. OR using dropdown:
          <br></br>
          2.1 Select the "File" dropdown
          <br></br>
          2.2 In opened dropdown, click 
          "Save Project As"
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div id="loading-projects">
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
      <div id="movement-and-looking" 
        className="textblobregular border border-solid">
        <h1>MOVEMENT & LOOKING</h1>
        <p>
          Once loaded into a project, the user can move and look around
          in the space they are loaded in freely.
        </p>
        <br></br>
        <br></br>

        <div id="movement">
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

        <div id="looking">
          <h2>Looking</h2>
          The user can look around in the space using the mouse.
          <br></br>
          <br></br>
          <h3>In an opened project:</h3>
          1. Click and hold the right mouse button (AKA Mouse 2)
          <br></br>
          2. Drag towards the direction to look at with the mouse
          <br></br>
          3. To stop looking, let go of the the right mouse button
          <br></br>
          <br></br>
          <br></br>
        </div>
        
      </div>

      {/*  Audio output placement. */}
      <div id="audio-output-placement" 
        className="textblobregular border border-solid">
        <h1>AUDIO OUTPUT PLACEMENT</h1>
        <p>
          Audio Outputs let the user emit sound from an object in the 
          space. The user can place (by default snapping to the floor)
          and move them around freely as well.
        </p>
        <br></br>
        <br></br>
        <div id="placing-outputs">
          <h2>Placing Outputs</h2>
          The user can place audio outputs.
          <br></br>
          <br></br>
          <h3>In an opened project:</h3>
          1. Select the audio output icon
          <br></br>
          2. Move the mouse onto the space's floor
          <br></br>
          3. Click the left mouse button (AKA mouse 1)
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div id="moving-outputs">
          <h2>Moving Outputs</h2>
          The user can move the outputs around on different axes
          using the handles that appear with the selected output.
          <br></br>
          <br></br>
          <h3>In an opened project:</h3>
          1. Click on an audio output in the space OR click on the
          source in the interface to select it (the handles will then 
          appear)
          <br></br>
          2. Click on any of the arrow handles and drag to move the 
          output strictly on the associated axis, OR click and drag 
          on either of the two square handles to move on two axes at the 
          same time
          <br></br>
          3. To stop selecting an audio output, select the selected
          audio output source in the interface
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div id="deleting-outputs">
          <h2>Deleting Outputs</h2>
          The user can delete an audio output from the space.
          <br></br>
          <br></br>
          <h3>In an opened project with already placed audio outputs:</h3>
          1. Click on an audio output in the space OR click on the
          source in the interface to select it (the handles will then 
          appear)
          <br></br>
          2. Select the trash icon in the interface
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>

      {/*  Importing Audio and managing audio clip pool. */}
      <div id="importing-audio-and-managing-audio-clip-pool" 
        className="textblobregular border border-solid">
        <h1>IMPORTING AUDIO & MANAGING AUDIO CLIP POOL</h1>
        <p>
          In order to make sound, the user needs to import some
          audio files into the project. The audio is then cached
          in the project save directory so the paths of the original
          audio files don't matter.
        </p>
        <br></br>
        <br></br>
        <div id="importing-audio">
          <h2>Importing Audio</h2>
          The user can import audio from their folder search.
          <br></br>
          <br></br>
          <h3>In an opened project:</h3>
          1. Select the "Open Audio Clip Pool" button
          <br></br>
          2. Select the "Import Audio" button
          <br></br>
          3. From the file browser dialog, select a valid .mp3, .wav, 
          or .ogg file
          <br></br>
          4. Select the "Open" button in the file browser dialog
          <br></br>
          5. To close the clip pool, select the "Close" button in
          the clip pool
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div id="preview-imported-audio">
          <h2>Previewing Imported Audio</h2>
          The user can preview the imported audio in the clip pool.
          <br></br>
          <br></br>
          <h3>
            In an opened project with the clip pool open and at least
            one audio file imported:
          </h3>
          1. Select the play/pause button to hear the audio file played
          back (NOTE THAT PREVIEW CURRENTLY DOESN'T STOP WHEN CLIP POOl
          IS CLOSED)
          <br></br>
          2. Select the handle on the slider to navigate to a different
          point in time in the imported audio file
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div id="deleting-imported-audio">
          <h2>Deleting Imported Audio</h2>
          The user can delete the imported audio (this will delete
          any track clips that use that imported audio)
          <br></br>
          <br></br>
          <h3>
            In an opened project with the clip pool open and at least
            one audio file imported:
          </h3>
          1. Select the trash icon next to the imported file to be 
          deleted
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>

      {/*  Trackclip management. */}
      <div id="track-clip-placement-and-managing-track-clips" 
        className="textblobregular border border-solid">
        <h1>TRACK CLIP PLACEMENT & MANAGING TRACK CLIPS</h1>
        <p>
          Track clips represent an imported audio file with a time 
          to play at on the timeline, how long it should play for, 
          and where it should start playing from (relative to the file's
          own time). The user can place these track clips on the timeline
          with a source selected so that the sound of the clip is played
          from that output when the playhead reaches the track clip.
        </p>
        <br></br>
        <br></br>
        <div id="placing-track-clip">
          <h2>Placing Track Clip</h2>
          The user can place these clips onto the timeline with
          a specific output selected so that it's played out of
          that output in the space.
          <br></br>
          <br></br>
          <h3>
            In an opened project with the clip pool open, at least
            one audio file imported, and at least one audio output
            placed:
          </h3>
          1. Select the audio output to have the track clip be attached
          to
          <br></br>
          2. Hold Left click (AKA Mouse 1) and drag on the waveform 
          next to the imported audio to place onto the timeline 
          (whichever layer desired)
          <br></br>
          3. Track clips can be moved by holding left click and dragging
          to around (when further in time means it will be triggered at
          that time)
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div id="finetuning-track-clip-start">
          <h2>Finetuning Track Clip Start</h2>
          The user can enter a time for a specific track clip to
          start through a dialog.
          <br></br>
          <br></br>
          <h3>
            In an opened project with the clip pool open, at least
            one audio file imported, at least one audio output
            placed, and at least one track clip placed:
          </h3>
          1. Right click on the track clip to be edited to open the
          dialog
          <br></br>
          2. Select the "Finetune Clip Start" option
          <br></br>
          3. Enter a new time for the clip to start into the textbox 
          (as a time in seconds)
          <br></br>
          4. Select the "Apply" button or press ENTER
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div id="trimming-track-clip">
          <h2>Trimming Track Clip</h2>
          The user can edit the duration and start of the clip time
          (eg. start playing in the middle of the original file, 
          cutt off after some number of seconds).
          <br></br>
          <br></br>
          <h3>
            In an opened project with the clip pool open, at least
            one audio file imported, at least one audio output
            placed, and at least one track clip placed:
          </h3>
          1. Right click on the track clip to be edited to open the
          dialog
          <br></br>
          2. Select the "Trim Clip" option
          <br></br>
          3. Enter the trim start and/or trim end time in seconds
          relative to the clip itself (eg. keep start of clip: 
          trim start = 0)
          <br></br>
          4. Select "Apply Trim" to confirm
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div id="deleting-track-clip">
          <h2>Deleting Track Clip</h2>
          The user can delete track clips.
          <br></br>
          <br></br>
          <h3>
            In an opened project with the clip pool open, at least
            one audio file imported, at least one audio output
            placed, and at least one track clip placed:
          </h3>
          1. Right click on the track clip to be edited to open the
          dialog
          <br></br>
          2. Select the "Delete Clip" option
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>

      {/*  Controlling timeline. */}
      <div id="controlling-timeline" 
        className="textblobregular border border-solid">
        <h1>CONTROLLING TIMELINE</h1>
        <p>
          The timeline is how a user can control the time of the 
          project, similar to other DAWs. The user can play/pause/reset
          the time. This time is visually represented to the playhead,
          a line the spans the timeline (also displayed in text above 
          timeline). They can also set loops so that a time period is
          repeated.
        </p>
        <br></br>
        <br></br>
        <div id="playing-and-pausing">
          <h2>Playing & Pausing</h2>
          The user can play and pause the time.
          <br></br>
          <br></br>
          <h3>
            In an opened project:
          </h3>
          1. Press SPACE or select the play icon to play
          forwards
          <br></br>
          2. While it's playing, press SPACE again or select
          the pause icon to pause
          <br></br>
          3. Select the reset icon to stop playing and set the time
          back to 0
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div id="controlling-playhead">
          <h2>Controlling Playhead</h2>
          The user can grab the visual representation of the time
          and move it to the new time as desired.
          <br></br>
          <br></br>
          <h3>
            In an opened project:
          </h3>
          1. Left click (AKA Mouse 1) on the playhead triangle
          <br></br>
          2. Drag to new position in timeline
          <br></br>
          3. If the timeline is already playing, it will pause until
          the playhead is let go and then continue playing
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div id="setting-loop">
          <h2>Setting Loop</h2>
          The user can set a loop period for the timeline.
          <br></br>
          <br></br>
          <h3>
            In an opened project:
          </h3>
          1. Left click (AKA Mouse 1) on the text next to the loop icon
          to open the loop dialog
          <br></br>
          2. Enter a start and end point in seconds
          <br></br>
          3. Confirm the loop by selecting the "Confirm Loop" button
          <br></br>
          4. Toggle the loop by pressing the 'T' key
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>

      {/*  Exporting. */}
      <div id="exporting" 
        className="textblobregular border border-solid">
        <h1>EXPORTING</h1>
        <p>
          The user can export the project as a WAV as if it
          were a live recording in a space.
        </p>
        <br></br>
        <br></br>
        <div id="exporting-audio">
          <h2>Exporting Audio</h2>
          The user can export the audio that is being heard
          <br></br>
          <br></br>
          <h3>
            In an opened project:
          </h3>
          1. Press the 'R' key or click on the record icon to start 
          recording
          <br></br>
          2. When audio is recording, everything is picked up by the
          listener, and the user has direct control over what plays when
          in the resultant export
          <br></br>
          3. Press the 'R' key or click on the record icon again to 
          stop the recording
          <br></br>
          4. In the save file dialog, name the file to whatever desired,
          and select the "Save" button
          <br></br>
          <br></br>
          <br></br>
          Tip: the listener can be placed and then picked up again using
          the 'F' key.
        </div>
      </div>

    </div>
  );
}