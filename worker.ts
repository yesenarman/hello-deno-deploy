addEventListener('fetch', (event) => {
  event.respondWith(new Response('Hello Deno Deploy', {
    headers: {
      'content-type': 'text/plain'
    }
  }));
});
