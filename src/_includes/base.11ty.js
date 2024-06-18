export default function (data) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
    <link href="/main.css" rel="stylesheet" />
</head>
<body class="antialiased bg-white dark:bg-slate-950">
    ${data.content}
</body>
</html>`;
}
