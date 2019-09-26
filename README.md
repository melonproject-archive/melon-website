# Docs is a premium documentation Jekyll theme

Desk was developed by [Ivan Chromjak](https://ivanchromjak.com) for [jekyll.plus](https://jekyll.plus/), theme [live demo](https://docs.jekyll.plus/) available.

## Installation

Install the dependencies with [Bundler](http://bundler.io/):

```bash
bundle install
```

Run the following to generate your site:
```bash
bundle exec jekyll serve
```

You can find more on [Deployment Methods](https://jekyllrb.com/docs/deployment-methods/) page on Jekyll website.

## Setup

### Site and author details
Add your site and author details in `_config.yml`:
```yaml
# Site title and description
title:              Docs
description:        Documentation Jekyll theme.
lang:               en

# Site subpath, e.g. /blog
baseurl:            ""

# Permalink URLs structure, for permalink style options see: https://jekyllrb.com/docs/permalinks/
permalink:          /:title/

# Site base hostname & protocol, e.g. http://example.com
url:                "https://docs.jekyll.plus"

# Site logo # e.g. logo.png, upload logo image file to /uploads/ folder
logo:               

navbar:
  search:           true;
  
# Default author settings
author:
    name:           Pete Seth
    title:          Lead Developer  
    avatar:         avatar-tom.png
```

## Customization

To modify the primary color, open `/_sass/theme/variables.scss` and replace the color values e.g.:

```scss
$global-primary-background:                   #05c896;
```

Further style customisation can be done in the following files:
```
/_sass/theme/mixins.scss
/_sass/theme/variables.scss
/assets/css/main.scss
```

## Development

Install [UIkit](https://getuikit.com/) font end framework dependency via Npm:
```bash
npm install
```
Enable live browser reload with the following:
```bash
bundle exec jekyll s --livereload
```

## Credits and Sources

- Google analytics https://www.google.com/analytics/
- Google maps https://www.google.com/maps
- UIkit front end framework https://getuikit.com/
- Jekyll CML https://jekyllrb.com/

## Support
Customer support is provided through our Envato profile page [contact form](https://themeforest.net/item/docs-responsive-documentation-manual-jekyll-theme/21131076/support) for up to six months from the purchase date and is provided Monday to Friday during the business week. We aim to answer all support requests daily, most are handled within 24h.

## Documentation
Full documentation can be found here: [https://docs.jekyll.plus/](https://docs.jekyll.plus/).

## Performance

You can test the demo site's TTFB (Time To First Byte) at [testmysite.io](https://testmysite.io/5b50abe51f12b74b81dd5442/jekyll-netlify-boilerplate.netlify.com)

## Getting started

Simply click the deploy button to get your own copy of the repository deployed to Netlify:

[![Deploy to Netlify t](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/whitesmith/melonport-website/tree/test-branch)

[![Deploy to Netlify m](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/whitesmith/melonport-website)
This will setup everything needed for running the CMS:

* A new repository in your GitHub account with the code
* Full Continuous Deployment to Netlify's global CDN network
* Control users and access with Netlify Identity
* Manage content with Netlify CMS

### Setup authentication

After deploying this project, Netlify Identity will add you as a CMS user and
will email you an invite. It is not necessary to accept this invite if you wish
to use an
[OAuth provider](https://www.netlify.com/docs/identity/#external-provider-login)
(e.g. Github) to manage authentication for your CMS.
It is recommended to use this method of authentication as it removes the need
for an email & password to log in to the CMS and is generally more secure. You
will need to add an OAuth provider in your Netlify app settings under
"Settings" > "Identity" > "External providers".

Next, navigate to `/admin` on your site, choose your OAuth provider from the
login box and you should then be logged into your CMS.

Now you're all set, and you can start editing content!

**Note:** if you switch the repo that was created to private, you'll need to regenerate your token,
as the token generated using the deploy to Netlify button can only access public repositories. To
regenerate your token, head to "Settings" in your Netlify site dashboard, go to the "Identity"
section, then scroll to "Services" where you'll see an "Edit settings" button. Click that and you'll
see a text link to "Generate access token in GitHub".
