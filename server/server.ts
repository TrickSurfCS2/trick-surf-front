import path from 'path'
import express from 'express'

const app = express()
const __dirname = path.resolve()
const port = process.env.PORT ?? 3000

app.use('/', express.static(path.join(__dirname, 'dist')))
app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')))

app.listen(port, () => {
  console.log('\x1B[36m%s\x1B[0m', '---------------------------------------')
  console.log('\x1B[32m%s\x1B[0m', '🚀 Server started')
  console.log('\x1B[36m%s\x1B[0m', `✨ Listening on the port`, `${port}`)
  console.log('\x1B[36m%s\x1B[0m', '🚀 Node:', process.env.npm_config_user_agent)
  console.log('\x1B[36m%s\x1B[0m', '---------------------------------------')
})
