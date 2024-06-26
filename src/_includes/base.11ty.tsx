export interface BaseLayoutData {
  readonly title: string;
  readonly content: string;
}

export default function (data: BaseLayoutData) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{data.title}</title>
        <link href="/main.css" rel="stylesheet" />
      </head>
      <body className="bg-white px-4 py-6 antialiased dark:bg-slate-950">
        <main
          className="prose prose-slate prose-sky mx-auto dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></main>
      </body>
    </html>
  );
}
