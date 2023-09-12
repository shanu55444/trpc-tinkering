import {publicProcedure, router} from './trpc';
import {z} from 'zod';
import {createHTTPServer} from '@trpc/server/adapters/standalone';

const PORT = 5561;

export const appRouter = router({
    health: publicProcedure.query(async () => {
        return 'healthy';
    }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({router: appRouter});

server.listen(PORT);
