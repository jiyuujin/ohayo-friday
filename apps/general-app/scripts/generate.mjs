import path from 'path'
import fs from 'fs'
import puppeteer from 'puppeteer'
import frontMatter from 'front-matter'

const postsDirectory = path.join(process.cwd(), 'src/pages/posts')

async function getPostReaction(filename) {
  let result = ''

  const res = await fs.readFileSync(path.join(postsDirectory, `${filename}`), 'utf8')
  const _data = frontMatter(res)
  const data = _data.attributes
  result = data.reaction
  return result
}

async function main() {
  const postFiles = fs.readdirSync(postsDirectory)

  for (const mdFilename of postFiles) {
    const title = await getPostReaction(mdFilename)
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    const page = await browser.newPage()
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'ja-JP',
    })

    try {
      await page.goto('file:///' + path.join(process.cwd(), 'scripts/reaction-preview.html'))

      await page.$eval(
        'h1',
        (el, title) => {
          el.innerHTML = title
        },
        title,
      )

      await page.screenshot({
        path: `public/og/${mdFilename.replace('.md', '')}.png`,
        clip: { x: 0, y: 0, width: 840, height: 840 },
      })
    } catch (e) {
      console.error(e)
    }

    await browser.close()
  }
}

main()
