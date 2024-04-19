import { About } from "../apps/About";
import { CMD } from "../apps/Terminal";
import { VS } from "../apps/vs";
import { Calculator } from "../apps/Calculator";

export const renderWindow = (name) => {

    if (name === 'Name' ) return <About />;
    if (name === "About me") return <About />;
    if (name === "Terminal") return <CMD />;
    if (name === "VS Code") return <VS />;
    if (name === "Calculator") return <Calculator />
  };