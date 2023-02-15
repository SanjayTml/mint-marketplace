# Mint Marketplace

This is an example web application that allows visitors to view and search for NFTs by type, description, properties etc. It is a part of the solution for personal coding challenge provided by [Angry Dynomites Lab](https://www.angrydynomiteslab.com/). This project uses [Tailwind CSS](https://tailwindcss.com/) [(v3.2)](https://tailwindcss.com/blog/tailwindcss-v3-2) with Next.js for the frontend and PostgreSQL database for the backend provided by [Supabase](https://supabase.com). 

## How to run

- Clone the repository
- Install dependencies by running ```npm install```
- Configure the environment variables[see below]
- Start the application by running ```npm run dev```
- Open the application by going to ```http://localhost:3000``` or any other port it is being served to

## Dependencies

This application uses the following dependencies:

@supabase/supabase-js - A JavaScript client for interacting with Supabase
next.js - A framework for building server-rendered React applications
react - A JavaScript library for building user interfaces
react-dom - A package that provides DOM-specific methods for React

## How to configure Supabase

To use Supabase in this application, you'll need to create a new project and database. Then obtain you databse url and public-anon-key from settings tab in Supabase dashboard. Set the `DATABASE_URL` and `DATABASE_KEY` environment variables to the values you obtained and store it in a `.env.local` file.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## Next.js

([Documentation](https://nextjs.org/docs/deployment)).