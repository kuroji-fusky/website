import { html, css, LitElement } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("yt-embed-wrapper")
export class YoutubeEmbed extends LitElement {
  @property({ type: String, attribute: "video-id" }) videoId = ""
  @property({ type: Boolean, attribute: "is-shorts" }) isYTShorts = false

  static styles = css`
    .has-shorts {
      --responsive-locked-height: 66.5%;
      --responsive-anchor: calc(var(--responsive-locked-height) * 1.5);
      --responsive-width: calc(var(--responsive-locked-height) / 2);
    }
    .yt {
      position: relative;
      width: var(--responsive-width, 100%);
      height: 0;
      padding-bottom: var(--responsive-locked-height, 50.75%);
    }
    .yt iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: var(--responsive-anchor, 0);
      border-radius: 0.5rem;
    }
  `

  render() {
    return html`
      <div class="yt${this.isYTShorts ? " has-shorts" : ""}">
        <iframe
          src="https://www.youtube-nocookie.com/embed/${this.videoId}"
          frameborder="0"
          class="${this.isYTShorts ? "has-shorts" : ""}"
        ></iframe>
        <span style="display: none;">
          <slot></slot>
        </span>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "yt-embed-wrapper": HTMLElement
  }
}
