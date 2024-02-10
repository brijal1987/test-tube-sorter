This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Weird legal (business) requirements
Imagine a sample sorter: a machine that is responsible for placing a test tube into one of
many racks. This machine can recognize the test tube (read its id) and place it into the
specified rack. Here comes your task.
Write an application that will allow the user to insert a list of test tubes, and then it will assign
them to racks based on the following logic:
1. Each tube contains a material for a specific patient
2. It is illegal to place patients of the same age into the same rack
3. It is illegal to place patients working in the same company into the same rack
4. It is illegal to place patients who live in the same city district into the same rack
5. It is illegal to place patients with the same vision defect into the same rack
6. The number of racks is very limited

## Where is my test tube?
Imagine a gigantic laboratory network with many buildings in many locations, numerous
rooms, lab workers, equipment, storage compartments, etc. Your job is to create an
application where users will be able to track the placement of test samples.
## Getting Started

## Clone repository

```bash
git clone https://github.com/brijal1987/test-tube-sorter.git
cd test-tube-sorter
```

## Install Dependencies
```bash
npm install
```

## Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Run test case:
```bash
npm test
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
