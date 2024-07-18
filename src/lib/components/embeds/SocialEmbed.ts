import { LitElement, customElement, property, html } from "./LitImports"

@customElement("agnostic-social-embed-wrapper")
export class SocialEmbed extends LitElement {
  @property({ type: String }) src = ""

  render() {
    return html``
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "agnostic-social-embed-wrapper": HTMLElement
  }
}
