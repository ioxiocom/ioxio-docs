import IMAGES from "../images.json"
import { GUIDES } from "../urls"

export async function load({ url, route }) {
  return {
    path: url.pathname,
    route: route.id,
    guide: GUIDES.USING_DATA,
    images: IMAGES.USING_DATA,
  }
}
