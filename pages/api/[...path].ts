// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'

// type Data = {
//   name: string
// }

export const config = {
  api: {
    bodyParser: false
  }
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // dont't send cookies to API server
  req.headers.cookie = ''

  proxy.web(req, res, {
    target: 'https://js-post-api.herokuapp.com',
    changeOrigin: true,
    selfHandleResponse: false
  })
}
