# Reproduction steps

1. Get a postgres database and add URL to your schema
2. `npm i`
3. `npx prisma db push --force-reset`
3. `npx vercel`
4. Publish to your personal account
5. Press enter (yes) until project is deploying
6. Inspect the Vercel build console
7. Head to the `/api` route in your browser
eg. `https://my-project.vercel.app/api`
8. You should see `{ ok: true }`
9. Now open the schema, uncomment name
10. `npx prisma db push` (no need to force reset)
11. Now open `index.js`, uncomment `name`
12. `npx vercel`
13. Inspect the Vercel build console
14. Head to the `/api` route in your browser
15. 💥 `{ "error": "Unknown arg 'name' in data.name for type UserCreateInput. Did you mean 'nick'?\n" }`
16. Deploy again but force clear the cache with `npx vercel --force`
17. Error is gone
