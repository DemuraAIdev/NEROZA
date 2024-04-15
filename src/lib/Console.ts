const NRConsole = {
  info: (...args: unknown[]) => {
    console.info("\x1b[34m", "Info", "\x1b[0m", ...args, "\x1b[0m");
  },
  error: (...args: unknown[]) => {
    console.error("\x1b[31m", "Error", "\x1b[0m", ...args, "\x1b[0m");
  },
  warn: (...args: unknown[]) => {
    console.warn("\x1b[33m", "Warn", "\x1b[0m", ...args, "\x1b[0m");
  },
};

export default NRConsole;
