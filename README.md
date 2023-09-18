This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
//secret key: sk_test_51NnLXdHahUokiXyYPBdjbam6RXcA6GaXv8Re7fONJRXqplPVyZqppmoTzaQFQSFer4x3lDBHDU3fW7lcCLT7hWA600vEzkubwB
// maandeeq: price_1NnLdDHahUokiXyYyvDhdUcc
// cabdulahi: price_1NnLetHahUokiXyYrs8ILgPP
// samiiro: price_1NnLg0HahUokiXyYwxGxZtBt

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

const insertData = async () => {
    const { data, error } = await supabase.from("Product").insert([
      {
        img: forniture1,
        desc: "Poland Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur animi impedit iste nemo! Ut, nam? Quos maiores suscipit repellendus accusantium ",
        name: "poland",
        price: 13,
      },
     