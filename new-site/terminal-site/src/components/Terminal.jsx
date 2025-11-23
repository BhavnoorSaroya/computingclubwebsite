import { useState, useEffect, useRef } from "react";
import { commands } from "../commands";
import { bootMessages, BOOT_DELAY } from "../bootSequence";

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const termRef = useRef(null);

  const runLine = (text) => setHistory((h) => [...h, { type: "line", text }]);

  const runCommand = (command) => {
    const [cmd, ...args] = command.split(" ");
    const fn = commands[cmd];

    if (!fn) {
      runLine(`$ ${command}`);
      runLine(`Command not found: ${cmd}`);
      return;
    }

    const output = fn(args.join(" "));

    if (output === "CLEAR") return setHistory([]);
    if (output === "TOGGLE_MATRIX")
      return document.body.classList.toggle("matrix-bg");
    if (output === "RELOAD") window.location.reload();

    runLine(`$ ${command}`);
    runLine(output);
  };

  const runCommandSilent = (command) => {
    const [cmd, ...args] = command.split(" ");
    const fn = commands[cmd];

    // if (!fn) {
    //   runLine(`$ ${command}`);
    //   runLine(`Command not found: ${cmd}`);
    //   return;
    // }

    const output = fn(args.join(" "));

    // if (output === "CLEAR") return setHistory([]);
    // if (output === "TOGGLE_MATRIX")
    //   return document.body.classList.toggle("matrix-bg");

    // runLine(`$ ${command}`);
    runLine(output);
  };

  useEffect(() => {
    (async () => {
      for (const msg of bootMessages) {
        runLine(msg);
        await new Promise((r) => setTimeout(r, BOOT_DELAY));
      }
      setBooted(true);

      // Auto-run commands after boot:
      await new Promise((r) => setTimeout(r, 800));
      runCommand("clear");

      runCommandSilent("logo");

      await new Promise((r) => setTimeout(r, 800));
      runCommand("about");

      // await new Promise((r) => setTimeout(r, 400));
      // runCommand("events");

      await new Promise((r) => setTimeout(r, 400));
      runCommand("contact");

      await new Promise((r) => setTimeout(r, 400));
      runCommand("help");
    })();
  }, []);

  useEffect(() => {
    termRef.current.scrollTop = termRef.current.scrollHeight;
  }, [history]);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    }
  };

  return (
    <div className="terminal" ref={termRef}>
      {history.map((h, i) => (
        <div
          style={{ whiteSpace: "pre-wrap" }}
          dangerouslySetInnerHTML={{ __html: h.text }}
        ></div>

        // <div key={i} style={{ whiteSpace: "pre-wrap" }}>
        //   {h.text}
        // </div>
      ))}

      {booted && (
        <div className="prompt">
          <span>$&nbsp;</span>
          <input
            autocapitalize="off"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            className="input-line"
          />
        </div>
      )}
    </div>
  );
}
