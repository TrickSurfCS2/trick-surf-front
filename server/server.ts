/* eslint-disable no-console */
import path from 'node:path'

import express from 'express'
import { collectDefaultMetrics, register } from 'prom-client'

import type { NextFunction, Request, Response } from 'express'

const app = express()
const __dirname = path.resolve()
const port = process.env.PORT ?? 3000

collectDefaultMetrics({ register })
app.get('/metrics', async (_: Request, res: Response, next: NextFunction) => {
  try {
    res.setHeader('Content-Type', register.contentType)
    return res.send(await register.metrics())
  }
  catch (err) {
    next(err)
  }
})

app.use('/', express.static(path.join(__dirname, 'dist-client')))
app.get('*', (_: Request, res: Response) =>
  res.sendFile(path.join(__dirname, 'dist-client', 'index.html')))

app.listen(port, () => {
  console.log('\x1B[36m%s\x1B[0m', '---------------------------------------')
  console.log('\x1B[32m%s\x1B[0m', '🚀 Server started')
  console.log('\x1B[36m%s\x1B[0m', `✨ Listening on the port`, `${port}`)
  console.log('\x1B[36m%s\x1B[0m', '💿 Node:', process.env.npm_config_user_agent)
  console.log('\x1B[36m%s\x1B[0m', '---------------------------------------')
})
