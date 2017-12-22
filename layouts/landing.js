module.exports = (
  `
    <div>
      <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet">
      <style>
        body, html {
          font-family: 'Space Mono';
        }
        h2 {
          font-family: 'Space Mono', monospace;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .content {
          padding-top: 30px;
        }
        a {
          color: #000;
        }
        svg {
          width: 30px;
          height: 30px;
        }
        .nounderline {
          text-decoration: none;
        }
      </style>
      <div class='container'>
        <h2>
          <a class="nounderline" href="https://github.com/the-couch/hooked">
            hooked.
            <svg aria-labelledby="simpleicons-github-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-github-icon">GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
        </h2>
        <div class='content'>
          <p><strong>What is it?</strong></p>
          <p>A simple webhook service that maps data from Contentful to Shopify. This service runs as a middleman waiting for content updates in Contentful. We listen to on publish event changes in order to push json data back into various Shopify sites.</p>
          <p><strong>Whos using it?</strong></p>
          <p>I made this repo public in order to allow other people to implement this type of service
            as well as to replicate it or at least learn from the concept. I believe metafields in
            Shopify still have a long way to come and the editors that exist currently leave a lot to
            be improved on. I think services like Contentful and Prismic are a lot more robust and user friendly
            in terms of content production and allows for a better production experience.</p>
          <p>Currently this repo powers a connection for one of these hybrid sites, I will add
            to the list of sites that are using this as we continue to build unique Shopify experiences.
            You will of course be able to see exactly what we're doing. You can also read the <a href="https://medium.com/the-couch/building-a-shopify-blog-with-contentful-d55ec2d32973">Medium article</a>
            about how to create a contentful powered blog experience.</p>
          <p><a href="https://woolandoak.com">Wool &amp; Oak</a></p>
        </div>
        <div class='content'>
          <p>Created by <a href="http://districtdomain.com">Kevin Green</a> and utilized by <a href="https://thecouch.nyc">The Couch</a></p>
        </div>
      </div>
    </div>
  `
)