import { Biography } from "../Views/Biography"
import { Skill } from "../Views/Skill"
import { Projects } from "../Views/Projects"
import { Studies } from "../Views/Studies"
import { Contact } from "../Views/Contact"
import { GetInTouch } from "../Views/Getintouch"

export const renderViews = ( type ) => {
  if (type === "Biography" || type === "") return <Biography />
  if (type === "Skill") return <Skill />
  if (type === "Projects") return <Projects />
  if (type === "Education") return <Studies />
  if (type === "Contact") return <Contact />
  if (type === "Get in touch") return <GetInTouch />
};
