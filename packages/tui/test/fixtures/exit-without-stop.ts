import { ProcessTerminal } from "../../src/terminal.ts";
import { TuiAltScreen } from "../../src/tui-alt-screen.ts";
import { TuiMainScreen } from "../../src/tui-main-screen.ts";

const tui =
	process.argv[3] === "regular"
		? new TuiMainScreen(new ProcessTerminal())
		: new TuiAltScreen(new ProcessTerminal(), false, undefined, { mouse: true });
tui.start();
if (process.argv[2] === "stop") tui.stop({ preserveScreen: true });
process.exit(0);
