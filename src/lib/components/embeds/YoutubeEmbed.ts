import { html, LitElement, customElement, property } from "./LitImports"

@customElement("yt-embed-wrapper")
export class YoutubeEmbed extends LitElement {
  @property({ type: String }) videoId = "_wDYa2mTnlo"
  @property({ type: Boolean }) isShorts = false

  render() {
    return html`<div style="position: relative; width: 100%; height: 0;padding-bottom: 56.25%;">
        <iframe
          src="https://www.youtube-nocookie.com/embed/${this.videoId}"
          frameborder="0"
          style="position: absolute; width: 100%;height: 100%; left: 0; top: 0; border-radius: 0.5rem;"
        ></iframe>
      </div>
      <div></div> `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "yt-embed-wrapper": HTMLElement
  }
}
