require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
    siteMetadata: {
        // You can overwrite values here that are used for the SEO component
        // You can also add new values here to query them like usual
        // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/gatsby-config.js
        siteTitle: `KNOH LOG`,
        siteTitleAlt: `노관옥 블로그`,
        siteHeadline: `Kwanok Blog - Gatsby Theme from @lekoarts`,
        siteUrl: `https://kwanok.github.io/`,
        siteDescription: `노관옥의 블로그`,
        siteLanguage: `ko`,
        siteImage: `/banner.png`,
        author: `@kwanok`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: `G-W2KZS1BK4S`,
                // Puts tracking script in the head instead of the body
                head: false,
                // enable ip anonymization
                anonymize: true,
            },
        },
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: [
                    `Nanum+Gothic\:400,700`
                ],
                display: "swap"
            },
        },
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            // See the theme's README for all available options
            options: {
                navigation: [
                    {
                        title: `Blog`,
                        slug: `/blog`,
                    },
                    {
                        title: `About`,
                        slug: `/about`,
                    },
                ],
                externalLinks: [
                    {
                        name: `Instagram`,
                        url: `https://www.instagram.com/kwanoknoh`,
                    },
                    {
                        name: `Notion`,
                        url: `https://cloq.notion.site`,
                    },
                ],
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
                short_name: `minimal-blog`,
                description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
                start_url: `/`,
                background_color: `#fff`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#6B46C1`,
                display: `standalone`,
                icons: [
                    {
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
                feeds: [
                    {
                        serialize: ({query: {site, allPost}}) =>
                            allPost.nodes.map((post) => {
                                const url = site.siteMetadata.siteUrl + post.slug
                                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`

                                return {
                                    title: post.title,
                                    date: post.date,
                                    excerpt: post.excerpt,
                                    url,
                                    guid: url,
                                    custom_elements: [{"content:encoded": content}],
                                }
                            }),
                        query: `
              {
                allPost(sort: { fields: date, order: DESC }) {
                  nodes {
                    title
                    date(formatString: "MMMM D, YYYY")
                    excerpt
                    slug
                  }
                }
              }
            `,
                        output: `rss.xml`,
                        title: `Minimal Blog - @lekoarts/gatsby-theme-minimal-blog`,
                    },
                ],
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        shouldAnalyseBundle && {
            resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
            options: {
                analyzerMode: `static`,
                reportFilename: `_bundle.html`,
                openAnalyzer: false,
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://kwanok.github.io',
                sitemap: 'https://kwanok.github.io/sitemap/sitemap-index.xml',
                policy: [{
                    userAgent: '*',
                    allow: '/'
                }]
            }
        },
        `gatsby-plugin-react-helmet`,
    ].filter(Boolean),
}
