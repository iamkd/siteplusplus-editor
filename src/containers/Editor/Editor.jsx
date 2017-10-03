import React from "react";
import ReactDOM from "react-dom";
import { Card, CardText } from "material-ui/Card";

// The editor core
import Editor, { Editable, createEmptyState } from "ory-editor-core";
import "ory-editor-core/lib/index.css"; // we also want to load the stylesheets

// Require our ui components (optional). You can implement and use your own ui too!
import { Trash, DisplayModeToggle, Toolbar } from "ory-editor-ui";
import "ory-editor-ui/lib/index.css";

// Load some exemplary plugins:
import slate from "ory-editor-plugins-slate"; // The rich text area plugin
import "ory-editor-plugins-slate/lib/index.css"; // Stylesheets for the rich text area plugin
import parallax from "ory-editor-plugins-parallax-background"; // A plugin for parallax background images
import "ory-editor-plugins-parallax-background/lib/index.css"; // Stylesheets for parallax background images
import video from "ory-editor-plugins-video"; // The rich text area plugin
import spacer from "ory-editor-plugins-spacer";
import image from "ory-editor-plugins-image";
import content from "./content.js";
// Define which plugins we want to use. We only have slate and parallax available, so load those.
const plugins = {
  content: [slate(), video, spacer, image], // Define plugins for content cells
  layout: [parallax({ defaultPlugin: slate() })] // Define plugins for layout cells
};

// Creates an empty editable

// Instantiate the editor
const editor = new Editor({
  plugins,
  // pass the content state - you can add multiple editables here
  editables: [content[0]]
});

class App extends React.Component {
  render() {
    return (
      <Card>
        <Editable editor={editor} id={content[0].id} />
        <Trash editor={editor} />
        <DisplayModeToggle editor={editor} />
        <Toolbar editor={editor} />
      </Card>
    );
  }
}

export default App;
