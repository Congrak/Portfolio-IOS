import { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { WebLinksAddon } from "xterm-addon-web-links";
import {
  PROMPT,
  FILE_LIST,
  ABOUT_FILES,
  PROJECTS_FILES,
  FACT,
  ABOUT,
  HELP,
  CONTACT,
  TROLL,
  RODRICRAFT,
  WHIZZLINK,
  ICONDEX,
  TINTSATHOME,
} from "../const/terminalConst";
import "../terminal.css";

export const CMD = () => {
  const terminalRef = useRef(null);
  const fitAddon = new FitAddon();
  const terminal = useRef(null);

  let root = '';
  let file = '';

  useEffect(() => {
    if (terminalRef.current) {
      terminal.current = new Terminal({
        cursorBlink: true,
        cursorStyle: "bar",
        theme: {
          background: "#1E1E1E",
          foreground: "#CCCCCC",
          cursor: "#CCCCCC",
        },
      });
      terminal.current.open(terminalRef.current);
      terminal.current.loadAddon(fitAddon);
      terminal.current.loadAddon(new WebLinksAddon());

      terminal.current.write(
        '\r\n  Welcome to Rodrigo\'s Terminal 🐧\r\n  Type "help" to see available commands.\r\n\r\n'
      );
      terminal.current.write(PROMPT);
      terminal.current.onData(handleInput);

      setTimeout(() => {
        fitAddon.fit();
      }, 450);

      return () => {
        terminal.current.dispose();
      };
    }
  }, []);

  const handleInput = (e) => {
    const CURRENT_LINE = terminal.current.buffer.active.cursorY;
    const CURRENT_COL = terminal.current.buffer.active.cursorX;
    const LINE_BEFORE_SCROLL = terminal.current.buffer.active.baseY;
    const LINE = CURRENT_LINE + LINE_BEFORE_SCROLL;

    if (e === "\r") {
      const command = terminal.current.buffer.active
        .getLine(LINE)
        .translateToString()
        .slice(PROMPT.length + root.length)
        .toLowerCase()
        .trim();
      handleCommand(command);
      terminal.current.scrollToBottom();
    } else if (e === "\x7f") {
      if (CURRENT_COL >= PROMPT.length + root.length) {
        terminal.current.write("\b \b");
      }
    } else {
      terminal.current.write(e);
    }
  };

  const handleCommand = (command) => {
    if (command === "help") {
      terminal.current.write(HELP);
    } else if (command === "..") {
      root = '';
      terminal.current.write(`\r\n`);
    } else if (command === "ls" && root === "") {
      terminal.current.write(`\r\n`);
      FILE_LIST.forEach((f) => {
        terminal.current.write(`    ${f}\r\n`);
      });
    } else if (command === "ls" && root === "about > ") {
      terminal.current.write(`\r\n`);
      ABOUT_FILES.forEach((f) => {
        terminal.current.write(`    ${f}\r\n`);
      });
    } else if (command === "ls" && root === "projects > ") {
      terminal.current.write(`\r\n`);
      PROJECTS_FILES.forEach((f) => {
        terminal.current.write(`    ${f}\r\n`);
      });
    } else if (command.startsWith("cd")) {
      const dir = command.slice(3).toLowerCase();
      root = dir + " > ";
      if (dir === "about" || dir === "projects") {
        terminal.current.write(`\r` + PROMPT + root);
      } else {
        terminal.current.write(
          `\r\n  Directory not found. Try: cd about  |  cd projects\r\n`
        );
        root = '';
      }
    } else if (command.startsWith("cat") && root === "") {
      file = command.slice(4).toLowerCase();
      if (file === "facts.txt") {
        terminal.current.write(FACT);
      } else {
        terminal.current.write(`\r\n  File not found. Type "ls" to list files.\r\n`);
      }
    } else if (command.startsWith("cat") && root === "about > ") {
      file = command.slice(4).toLowerCase();
      if (file === "me.txt") {
        terminal.current.write(ABOUT);
      } else if (file === "contact.txt") {
        terminal.current.write(CONTACT);
      } else if (file === "important.txt") {
        terminal.current.write(TROLL);
      } else {
        terminal.current.write(`\r\n  File not found. Type "ls" to list files.\r\n`);
        file = '';
      }
    } else if (command.startsWith("cat") && root === "projects > ") {
      file = command.slice(4).toLowerCase();
      if (file === "tintsathome.txt") {
        terminal.current.write(TINTSATHOME);
      } else if (file === "whizzlink.txt") {
        terminal.current.write(WHIZZLINK);
      } else if (file === "icondex.txt") {
        terminal.current.write(ICONDEX);
      } else if (file === "rodricraft.txt") {
        terminal.current.write(RODRICRAFT);
      } else {
        terminal.current.write(`\r\n  File not found. Type "ls" to list files.\r\n`);
        file = '';
      }
    } else if (command === "reset") {
      terminal.current.clear();
      terminal.current.write(
        '\r\n  Welcome to Rodrigo\'s Terminal 🐧\r\n  Type "help" to see available commands.\r\n\r\n'
      );
      root = '';
      file = '';
    } else if (command === "clear") {
      terminal.current.clear();
    } else if (command === "") {
      // blank enter
    } else {
      terminal.current.write(
        `\r\n  Command not found: "${command}". Type "help" for available commands.\r\n`
      );
    }
    terminal.current.write("\r\n" + PROMPT + root);
  };

  return (
    <div ref={terminalRef} className="h-full w-full overflow-hidden"></div>
  );
};