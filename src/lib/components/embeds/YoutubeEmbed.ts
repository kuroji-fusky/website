import { kebabCase } from "lodash-es"
import { html, LitElement, customElement, property } from "./LitImports"

@customElement("yt-embed-wrapper")
export class YoutubeEmbed extends LitElement {
  @property({ type: String, attribute: "video-id" }) videoId = ""
  @property({ type: String, attribute: "initial-data" }) initialData = "{}"
  @property({ type: Boolean, attribute: "shorts-layout" }) isYTShorts = false

  connectedCallback() {
    super.connectedCallback()

    // window.addEventListener("resize", () => {
    //   console.log("i'm growing")
    // })
  }

  render() {
    return html`<div style="position: relative; width: 100%; height: 0;padding-bottom: 56.25%;">
      <iframe
        src="https://www.youtube-nocookie.com/embed/${this.videoId}"
        frameborder="0"
        style="position: absolute; width: 100%;height: 100%; left: 0; top: 0; border-radius: 0.5rem;"
      ></iframe>
    </div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "yt-embed-wrapper": HTMLElement
  }
}
