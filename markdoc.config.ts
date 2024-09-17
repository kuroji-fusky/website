import { component, defineMarkdocConfig } from "@astrojs/markdoc/config"

export default defineMarkdocConfig({
  tags: {
    layout: {
      render: component("./src/layouts/Layout"),
      attributes: {
        title: {
          type: String
        },
        description: {
          type: String
        }
      }
    }
  }
})
