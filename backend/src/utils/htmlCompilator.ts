// import fs from "fs/promises";
// import path from "path";
// import Handlebars from "handlebars";

// const htmlCompilator = async (context: object)=>{

//      const html = await fs.readFile(path.resolve("src", "utils", "templates", "email.html"));

//      const compilator = Handlebars.compile(html.toString());

//      const htmlString = compilator(context);

//      return htmlString;
// }

// export default htmlCompilator;

import fs from "fs/promises";
import path from "path";
import ejs from "ejs";

const htmlCompilator = async (context: object) => {
    const templatePath = path.resolve("src", "utils", "templates", "email.ejs");
    const html = await fs.readFile(templatePath, "utf-8");

    const compilator = ejs.compile(html);
    const htmlString = compilator(context);

    return htmlString;
}

export default htmlCompilator;
