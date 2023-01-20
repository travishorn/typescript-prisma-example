# Typescript Prisma Example

Example project using Typescript and Prisma.

## Installation

Clone this repository

```sh
git clone https://github.com/travishorn/typescript-prisma-example
```

Change into the directory

```sh
cd typescript-prisma-example
```

Copy `.env.example` to `.env` (or create your own `.env` file based on the
template)

```sh
cp .env.example .env
```

Install dependencies

```sh
npm install
```

Migrate the database

```sh
npm db:migrate
```

## Development

Run the watcher which will execute `./src/index.ts` (shows teams and players in
database) and reloads on file change.

```sh
npm run dev
```

## License

The MIT License (MIT)

Copyright © 2023 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
