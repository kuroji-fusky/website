/* eslint-disable import/no-unused-modules */

export type UnpluginIconType = (
  props: astroHTML.JSX.SVGAttributes
) => astroHTML.JSX.Element

import AstroIcon from "~icons/brands/astro.svg?raw"
import FlutterIcon from "~icons/brands/flutter.svg?raw"
import RedisIcon from "~icons/brands/redis.svg?raw"
import MongodbIcon from "~icons/brands/mongodb.svg?raw"
import NextjsIcon from "~icons/brands/nextjs.svg?raw"
import SvelteIcon from "~icons/brands/svelte.svg?raw"
import TauriIcon from "~icons/brands/tauri.svg?raw"
import FastApiIcon from "~icons/brands/fastapi.svg?raw"

import SupabaseIcon from "~icons/brands/supabase.svg?raw"
import VercelIcon from "~icons/brands/vercel.svg?raw"
import AWSIcon from "~icons/brands/aws.svg?raw"
import DigitalOceanIcon from "~icons/brands/digitalocean.svg?raw"

import GithubIcon from "~icons/brands/github.svg?raw"

export {
  // Technologies
  AstroIcon,
  FlutterIcon,
  RedisIcon,
  MongodbIcon,
  NextjsIcon,
  SvelteIcon,
  TauriIcon,
  FastApiIcon,

  // Infra
  SupabaseIcon,
  VercelIcon,
  AWSIcon,
  DigitalOceanIcon,

  // Etc
  GithubIcon
}
