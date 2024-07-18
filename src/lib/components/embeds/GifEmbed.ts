import { html, LitElement, customElement, property } from "./LitImports"

@customElement("agnostic-gif-embed-wrapper")
export class GifEmbed extends LitElement {
  @property({ type: String }) uri = "_wDYa2mTnlo"

  render() {
    return html`<div
        class="tenor-gif-embed"
        data-postid="9305331"
        data-share-method="host"
        data-aspect-ratio="1.50376"
        data-width="100%"
      >
        <a href="https://tenor.com/view/party-lets-party-dj-cat-dance-gif-9305331"
          >Party Lets Party GIF</a
        >from <a href="https://tenor.com/search/party-gifs">Party GIFs</a>
      </div>
      <script type="text/javascript" async src="https://tenor.com/embed.js"></script>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "agnostic-gif-embed-wrapper": HTMLElement
  }
}
