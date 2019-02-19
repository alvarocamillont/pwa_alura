
self.addEventListener('fetch', (event) => {
  let pedido = event.request
  console.log('tentou rodar o service worker')
  let promiseResposta = caches.open("ceep-imagens").then(cache => {
    return cache.match(pedido).then(respostaCache => {
      let resposta = respostaCache ? respostaCache : fetch(pedido)
      return resposta
    })
  })

  event.respondWith(promiseResposta)
})

