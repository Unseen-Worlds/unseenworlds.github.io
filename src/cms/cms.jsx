import { MdxControl, MdxPreview } from "netlify-cms-widget-mdx"
import React, { Component } from "react"
import { StyleSheetManager } from "styled-components"
import { Theme, LayoutComponents } from "../Theme"
import { FileSystemBackend } from "netlify-cms-backend-fs"
import CMS, { init } from "netlify-cms"

const isClient = typeof window !== "undefined"
const isDevelopment = process.env.NODE_ENV === "development"

if (isClient) {
  window.CMS_MANUAL_INIT = true
}

if (isDevelopment) {
  // Allows for local development overrides in cms.yaml
  window.CMS_ENV = "localhost_development"

  // Attach to the file system
  CMS.registerBackend("file-system", FileSystemBackend)
}

// @ts-check

// Custom components need refs for validation and thus must be a class.
// Additionally, after <Theme>, only one child is allowed.
// See https://github.com/netlify/netlify-cms/issues/1346

class MDXWidget extends Component {
  render() {
    return (
      <Theme>
        <MdxControl {...this.props} />
      </Theme>
    )
  }
}

// The preview window which renders MDX content.
// Docs: https://www.netlifycms.org/docs/customization/

const PreviewWindow = props => {
  const iframe = document.getElementsByTagName("iframe")[0]
  const iframeHeadElem = iframe.contentDocument.head

  const mdxProps = {
    components: LayoutComponents,
    scope: {},
    mdPlugins: [],
  }

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <MdxPreview mdx={mdxProps} {...props} />
    </StyleSheetManager>
  )
}

// Netlify collections that set `widget: mdx` will be able to use this custom
// widget. NOTE: The StyleSheet manager can *only* be injected into the Preview.
// Docs: https://www.netlifycms.org/docs/widgets/

CMS.registerWidget("mdx", MDXWidget, PreviewWindow)

// Start the CMS
init()
