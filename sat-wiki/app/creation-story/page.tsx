/* 
* FILE          : creation-story\page.tsx
* PROJECT       : Spatial Audio Toollkit
* PROGRAMMER    : Gagana "Gage" Hettiarachchige
* FIRST VERSION : 2025-04-10
* DESCRIPTION   :
*   This file is the creation story article of the wiki.
*/

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="textblob">
      Unity
      <br></br>
      <br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;When dealing with Git for Unity, 
      often after git pulling certain components and scripts become detached. 
      This was caused by the fact that GitHub’s default gitignore file 
      by default ignores meta files from Unity, which is what is used by Unity 
      to tell what scripts are attached to what GameObjects. 
      The solution was to just to update the gitingore so that it wasn’t 
      ignoring it, which fixed it. Another problem that was constantly 
      and something we couldn’t avoid while working on it was the fact 
      that the unity file (the scene) is a difficult to read binary file at its
      core, so when there were conflicts and diffs it was basically 
      impossible to resolve those, because trying to deal with diffs manually 
      would cause the project to not load the scene correctly 
      (even accepting all entire incoming changes would cause Unity to 
      freakout). Scenes would change based on new/edited GameObjects in 
      that scene or changes to the interface (Canvas). The new/edited 
      GameObjects weren’t that difficult to deal with and would rarely 
      cause issues since we generate most of the GameObjects through code 
      when the scene starts. Most of the issues came from canvas changes, 
      i.e. the interface of that scene. Since we edited and tweaked the 
      interface a lot, we switched to using Unity’s UI Toolkit rather than 
      Canvas. UI Toolkit uses a uxml for displaying elements 
      (similar to things like WPF). The good thing about UI Toolkit is 
      that the diffs are actually resolvable, since changes in the uxml 
      markup file are easier to distinguish between changes and its also 
      really easy to use and build and styles with. If there were any 
      changes that needed to be made to the scene, we would have to let 
      everybody know if were making any changes. 
      <br></br>
      <br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;Another thing with Unity is that there were a few packages that 
      were helpful to install for functionality (documented in licences doc). 
      We got StandaloneFileBrowser, because Unity doesn’t provide a file dialog
      system like WinForms/WPF. We tried using EditorUtility file browsing 
      methods which worked, but only in the editor (because we didn’t realize
      that the class is designed for building Unity extensions, 
      and don't work when compiled into a build).
      </p>
    </div>
  );
}