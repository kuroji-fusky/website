<h1 align="center">
  <a href="https://kurojifusky.com">
    <img alt="kuroji fusky website source code" src="https://github.com/kuroji-fusky/kurojifusky.com/assets/94678583/e9d6cb23-7061-45f1-8a4f-b45b20617cb6">
  </a>
  <a href="https://kurojifusky.com">kurojifusky.com</a>
</h1>

The source code of my personal website! Written in Astro + Vue

## APIs used

- Contentful
- YouTube Data API

## Running the abominations locally

### Prerequisties

- Go v1.20 or higher
- Node.js v20 or higher (LTS recommended)
- Yarn

### Setup and installation

- This repo contains submodules and clone it with the following along with its corresponding submodules:

  ```console
  git clone https://github.com/kurojifusky/kurojifusky.com --recurse-submodules
  cd kurojifusky.com
  ```

- Install dependencies with `yarn`:

  ```ps1
  yarn install # or yarn
  ```

- (Optional) In the `kuro-api` directory, run `main.go` normally and it would download the required
  dependencies if not available:

  ```console
  cd kuro-api
  go run main.go
  ```

## Copyright

© 2021-2024 Kerby Keith Aquino
