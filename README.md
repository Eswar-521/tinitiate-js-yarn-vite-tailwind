# Project Initialization
- To set up a Js + yarn + Vite + Tailwind CSS project using Yarn


## Create a vite Project

```sh
yarn create vite js-yarn-vite-tailwind
```

## Navigate into the project
```sh
cd js-yarn-vite-tailwind
```

## Install Dependencies
```sh
yarn
```

## Install Tailwind CSS
```sh
npm install tailwindcss @tailwindcss/vite
```

## Configure the Vite plugin
- Add the @tailwindcss/vite plugin to your Vite configuration.
```sh
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
})
```

## Import Tailwind Css
- Add an @import to your CSS file that imports Tailwind CSS.

```sh
@import "tailwindcss";
```

## Start Your build process
```sh
npm run dev
```