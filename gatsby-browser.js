// custom typefaces
import "typeface-lustria"
import "typeface-lora"
import "typeface-fira-code"

import "prismjs/themes/prism.css"
import "./cleaner.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

import React from "react"
import { ThemeContext } from "./src/theme/context"

export const wrapRootElement = ({ element }) => (
  <ThemeContext>{element}</ThemeContext>
)
