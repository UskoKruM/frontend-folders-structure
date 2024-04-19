//JavaScript
import { EVENT_LOAD } from "./utils/consts.js";

//Components
import { TableProgrammersRow } from "./components/TableProgrammersRow.js";

//Data
import programmers from "./../data/programmers.json" assert { type: "json" };

//Utils
import { generateUUID } from "./utils/content/random.js";

const initialLoad = () => {
    for (let programmer of programmers) {
        const languages = programmer.languages.toString().replaceAll(",", " | ");
        const score = (Math.random() * 5 + 5).toFixed(2);

        const tableProgrammersRow = new TableProgrammersRow({
            values: [generateUUID(), programmer.name, languages, score]
        });
        document.getElementById("tableProgrammers_Body").appendChild(tableProgrammersRow.render());
    }
};

window.addEventListener(EVENT_LOAD, () => {
    initialLoad();
});
