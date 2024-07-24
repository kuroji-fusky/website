import { html, css, LitElement, customElement, property } from "./LitImports"

@customElement("prism-code-renderer")
export class CodeBlockRenderer extends LitElement {
  @property({ type: String, attribute: "file-name" }) fileName = ""
  @property({ type: String }) language = ""

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
  `

  render() {
    return html`
      <div style="border-radius: 0.33rem; border: 1px solid white; padding: 0.75rem 1.25rem;">
        <div style="display: flex;">
          <span>${this.fileName}</span>
          <span>${this.language}</span>
        </div>
        <pre><slot></slot></pre>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "prism-code-renderer": HTMLElement
  }
}
