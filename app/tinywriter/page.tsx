"use client";

/*

tinywriter: you can only type a little of your text at a time.

the editor is a single line that fades out stuff before what
you typed; once you hit the end of the line, the text you wrote
disappeears somehow, perhaps by fading out, or only showing one
line of what you write at a time, etcetera. progress is autosaved
after not typing for 2(?) seconds -- in a browser to localStorage;
otherwise, to a local .txt file.

the file name is indicated at the top. 

as you type, things happen in the background: the most basic version
is something like vscode's minimap, where text is displayed on the
right side of the screen in 1px(?) monospace font, so you can
vaguely see how much you've written, but you can't make out the
specifics. other ideas include:

- a vial of sand, where every word adds a grain that drops down to
  the bottom of the vial and slowly pile up
- a pipe at the top of the screen that drips water per word, which
  eventually sloshes around at the bottom, or starts ebbing waves.
  more words causes sun rays, which evaporates the water, or something
- a forest in the background:
  - fall version shows green trees; each word turns one of the leaves
    a shade of red, orange or yellow
  - spring version, where flowers and animals start slowly appearing
  - I could have 4 seasons in a cycle where words progress the seasons 
- a game of life where every 100(?) words starts the clock, so pixels
  don't die too fast
- something that slowly builds up ambient music that changes over time.
  imagine every N words (configurable) adds a new element to a stack,
  and after long enough, that element disappears as new items are added.
  each element shows a slight color change in the background as it's live
- gamifying it where writing enough words feeds a pet, or unlocks a pet,
  or something similar

^ each of these can have descriptors, which are displayed optionally --
in fact, the user might be warned that "part of the fun is not knowing".

I have to find a way for some animations to convey that their words
are not limited. think of ways to animate cycles.

worth taking a look at https://brm.io/matter-js/

*/

import { Box, Container, Divider, TextField, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import Minimap from "./components/Minimap";

export default function TinyWriter() {
  const theme = useTheme();
  const [text, setText] = useState("");

  const handleUserKeyPress = (event: KeyboardEvent) => {
    const { key } = event;

    if (key === "space") {
      console.log("hello");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
        <Box sx={{ flex: 8, display: "flex", alignItems: "center" }}>
          <TextField
            variant="outlined"
            onChange={(e) => setText(e.target.value)}
            sx={{ input: { color: "white" }, width: "100%" }}
          />
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderColor: "white" }}
        />
        <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
          <Minimap text={text} />
        </Box>
      </Box>
    </Container>
  );
}
