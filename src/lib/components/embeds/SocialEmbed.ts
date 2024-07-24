import { LitElement, customElement, property, html } from "./LitImports"

@customElement("post-embed-wrapper")
export class SocialEmbed extends LitElement {
  @property({ type: String }) src = ""

  render() {
    return html``
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "post-embed-wrapper": HTMLElement
  }
}
