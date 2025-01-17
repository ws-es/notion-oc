import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '257bfecedbe442c0b907198e278e0c24',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '时代流明wiki',
  domain: 'wiki.erat.top',
  author: '冬至夕雪',

  // open graph metadata (optional)
  description: '时代流明设定百科',

  // social usernames (optional)
  // twitter: '#',
  // github: 'ws-es',
  // bilibili: '687417413',
  website: 'www.erat.top',
  email: 'dzxx2020@hotmail.com',
  // linkedin: '#',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  // defaultPageIcon: "https://www.erat.top/img/favicon.png",
  // defaultPageCover: "#",
  // defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
   navigationStyle: 'default',
  // navigationStyle: 'custom'
   navigationLinks: [
     {
       title: 'About',
       pageId: '5e88340aff4b48998526e20e45b462b5'
     }
   ]
})
