const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Yiss Website',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root:
          'C:\\Users\\hp\\Dropbox\\Projects\\React\\YISS\\yiss-website\\.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Yiss Website',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\hp\\Dropbox\\Projects\\React\\YISS\\yiss-website',
          templates:
            'C:\\Users\\hp\\Dropbox\\Projects\\React\\YISS\\yiss-website\\node_modules\\docz-core\\dist\\templates',
          docz:
            'C:\\Users\\hp\\Dropbox\\Projects\\React\\YISS\\yiss-website\\.docz',
          cache:
            'C:\\Users\\hp\\Dropbox\\Projects\\React\\YISS\\yiss-website\\.docz\\.cache',
          app:
            'C:\\Users\\hp\\Dropbox\\Projects\\React\\YISS\\yiss-website\\.docz\\app',
          appPackageJson:
            'C:\\Users\\hp\\Dropbox\\Projects\\React\\YISS\\yiss-website\\package.json',
          gatsbyConfig:
            'C:\\Users\\hp\\Dropbox\\Projects\\React\\YISS\\yiss-website\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\hp\\Dropbox\\Projects\\React\\YISS\\yiss-website\\gatsby-browser.js',
          gatsbyNode:
            'C:\\Users\\hp\\Dropbox\\Projects\\React\\YISS\\yiss-website\\gatsby-node.js',
          gatsbySSR:
            'C:\\Users\\hp\\Dropbox\\Projects\\React\\YISS\\yiss-website\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\hp\\Dropbox\\Projects\\React\\YISS\\yiss-website\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\hp\\Dropbox\\Projects\\React\\YISS\\yiss-website\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\hp\\Dropbox\\Projects\\React\\YISS\\yiss-website\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\hp\\Dropbox\\Projects\\React\\YISS\\yiss-website\\.docz\\app\\index.html',
          db:
            'C:\\Users\\hp\\Dropbox\\Projects\\React\\YISS\\yiss-website\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
