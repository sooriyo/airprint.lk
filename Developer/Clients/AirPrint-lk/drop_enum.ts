import { getPayload } from 'payload';
import configPromise from './src/payload.config';

async function run() {
    const payload = await getPayload({ config: configPromise })
    console.log('Got payload instance')

    // payload.db.drizzle is available if using postgres adapter
    try {
        await payload.db.drizzle.execute('DROP TYPE IF EXISTS "enum_footer_nav_items_link_type" CASCADE;');
        console.log('Successfully dropped old enum')
    } catch (e) {
        console.error('Error dropping enum:', e)
    }

    process.exit(0)
}

run()
