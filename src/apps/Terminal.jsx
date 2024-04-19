import { useEffect, useRef, useState } from "react";
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
  POKEMON,
  BSB,
  TESLA,
} from "../const/terminalConst";
import "../terminal.css";

export const CMD = () => {

  const terminalRef = useRef(null);
  const fitAddon = new FitAddon();
  const terminal = useRef(null);

  let root = ''
  let file = ''

  useEffect(() => {
    if (terminalRef.current) {
      terminal.current = new Terminal({
        cursorBlink: true,
        cursorStyle: "bar",
        rows: 500,
      });
      terminal.current.open(terminalRef.current);
      terminal.current.loadAddon(fitAddon);
      terminal.current.loadAddon(new WebLinksAddon());

      terminal.current.write(
        'Thanks for using my Terminal, type "help" for a list of commands.\r\n'
      );
      terminal.current.write(PROMPT);
      terminal.current.onData(handleInput);

      setTimeout(() => {
        fitAddon.fit();
      },450);
       
      return () => {
        terminal.current.dispose();
      };
    }
  }, []);

  const handleInput = (e) => {
    const CURRENT_LINE = terminal.current.buffer.active.cursorY; 
    const CURRENT_COL = terminal.current.buffer.active.cursorX;
    const LINE_BEFORE_SCROLL = terminal.current.buffer.active.baseY
    const LINE = CURRENT_LINE + LINE_BEFORE_SCROLL

    if (e === "\r") {
      const command = terminal.current.buffer.active
        .getLine(LINE)
        .translateToString()
        .slice(PROMPT.length + root.length)
        .toLowerCase()
        .trim(); 
      handleCommand(command);
      terminal.current.scrollToBottom()
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
      terminal.current.write(`\r\nList of files and folders:\r\n`);
      FILE_LIST.forEach((file) => {
        terminal.current.write(`        - ${file}   \r\n`);
      });
    } else if (command === "ls" && root === "about > ") {
      terminal.current.write(`\r\nList of files and folders:\r\n`);
      ABOUT_FILES.forEach((file) => {
        terminal.current.write(`        - ${file}   \r\n`);
      });
    } else if (command === "ls" && root === "projects > ") {
      terminal.current.write(`\r\nList of files and folders:\r\n`);
      PROJECTS_FILES.forEach((file) => {
        terminal.current.write(`        - ${file}   \r\n`);
      });
    } else if (command.startsWith("cd")) {
      root = command.slice(3).toLowerCase() + " > ";
      if (root === "about > " || root === "projects > ") {
        terminal.current.write(`\r` + PROMPT + root);
      } else {
        terminal.current.write(
          `\r` +
            `Directory or file not found, please try again or type "help" for a list of commands.\r\n`
        );
        root = '';
      }
    } else if (command.startsWith("cat") && root === "") {
      file = command.slice(4).toLowerCase();
      if (file === "facts.txt") {
        terminal.current.write(`\r` + FACT + `\r\n`);
      } else {
        terminal.current.write(
          `\rFile not found, please try again or type "help" for a list of commands.\r\n`
        );
      }
    } else if (command.startsWith("cat") && root === "about > ") {
      file = command.slice(4).toLowerCase()
      if (file === "me.txt") {
        terminal.current.write(`\r` + ABOUT + `\r\n`);
      } else if (file === "contact.txt") {
        terminal.current.write(`\r` + CONTACT + `\r\n`);
      } else if (file === "important.txt") {
        terminal.current.write(`\r` + TROLL + `\r\n`);
      } else {
        terminal.current.write(
          `\rFile not found, please try again or type "help" for a list of commands.\r\n`
        );
        file = '';
      }
    } else if (command.startsWith("cat") && root === "projects > ") {
      file = command.slice(4).toLowerCase()
      if (file === "tesla.txt") {
        terminal.current.write(`\r` + TESLA + `\r\n`);
      } else if (file === "rodricraft.txt") {
        terminal.current.write(`\r` + RODRICRAFT + `\r\n`);
      } else if (file === "pokedex.txt") {
        terminal.current.write(`\r` + POKEMON + `\r\n`);
      } else if (file === "bidsellbuy.txt") {
        terminal.current.write(`\r` + BSB + `\r\n`);
      } else {
        terminal.current.write(
          `\rFile not found, please try again or type "help" for a list of commands.\r\n`
        );
        file = '';
      }
    } else if (command === "reset") {
      terminal.current.clear();
      terminal.current.write(
        '\rThanks for using my Terminal, type "help" for a list of commands.\r\n'
      );
      root = ''
      file = ''
    } else if (command === "clear") {
      terminal.current.clear();
      terminal.current.write("\rSuccessfully cleared.\r\n");
    } else {
      terminal.current.write(
        `\r\nInvalid command, type "help" for a list of commands.\r\n`
      );
    }
    terminal.current.write("\r" + PROMPT + root);
    console.log(command)
  };

 
  return (
    <div ref={terminalRef} className="h-full w-full bg-gray-800/90 "></div>
   
  );
};
