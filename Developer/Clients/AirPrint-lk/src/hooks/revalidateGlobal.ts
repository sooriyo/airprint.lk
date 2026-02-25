import { revalidateTag } from 'next/cache'
import type { GlobalAfterChangeHook } from 'payload'

export const revalidateGlobal: GlobalAfterChangeHook = ({ doc, req: { payload } }) => {
    payload.logger.info(`Revalidating global: ${doc.globalType}`)
    revalidateTag(`global_${doc.globalType}`)
    return doc
}
