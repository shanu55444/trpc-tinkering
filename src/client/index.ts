import {AppRouter} from './../server';
import {createTRPCProxyClient, httpBatchLink} from '@trpc/client';

const trpc = createTRPCProxyClient<AppRouter>({
    links: [httpBatchLink({url: 'http://localhost:5561/'})],
});
async function main() {
    let resp = await trpc.health.query();
    console.log(resp);
}
main().catch((err) => console.log(err));
