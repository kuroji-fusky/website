import type {
  ShowcaseInfrasLiteral,
  ShowcaseTechnologiesLiteral
} from "../content/config"

import AstroIcon from "~icons/brands/astro.svg?raw"
import FlutterIcon from "~icons/brands/flutter.svg?raw"
import RedisIcon from "~icons/brands/redis.svg?raw"
import MongodbIcon from "~icons/brands/mongodb.svg?raw"
import NextjsIcon from "~icons/brands/nextjs.svg?raw"
import SvelteIcon from "~icons/brands/svelte.svg?raw"
import TauriIcon from "~icons/brands/tauri.svg?raw"
import FastApiIcon from "~icons/brands/fastapi.svg?raw"
import PlasmoIcon from "~icons/brands/plasmo.svg?raw"

import SupabaseIcon from "~icons/brands/supabase.svg?raw"
import VercelIcon from "~icons/brands/vercel.svg?raw"
import AWSIcon from "~icons/brands/aws.svg?raw"
import DigitalOceanIcon from "~icons/brands/digitalocean.svg?raw"

import type { UnpluginIconType } from "$lib/icons"

const iconCollection: Record<
  ShowcaseTechnologiesLiteral | ShowcaseInfrasLiteral,
  UnpluginIconType | string
> = {
  astro: AstroIcon,
  flutter: FlutterIcon,
  plasmo: PlasmoIcon,
  fastapi: FastApiIcon,
  tauri: TauriIcon,
  redis: RedisIcon,
  mongodb: MongodbIcon,
  nextjs: NextjsIcon,
  sveltekit: SvelteIcon,
  aws: AWSIcon,
  digitalocean: DigitalOceanIcon,
  docker: "docker",
  gcp: "gcp",
  vercel: VercelIcon,
  supabase: SupabaseIcon
}

export default iconCollection
