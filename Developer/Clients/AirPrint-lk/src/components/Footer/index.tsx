import type { Footer as FooterType } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { FooterClient } from './index.client'

export async function Footer() {
  let footer: FooterType | null = null

  try {
    footer = await getCachedGlobal('footer', 1)()
  } catch (error) {
    console.error('Error fetching footer global:', error)
  }

  // We pass footer even if null, FooterClient now handles it with fallbacks
  return <FooterClient footer={footer as FooterType} />
}
