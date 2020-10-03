# Deploying Your Site To Netlify
1. Sign-up or log-in to Netlify
2. Click "New site from Git"
    1. Select the GitHub icon
    2. Choose your repo
        1. Give Netlify access to your repo(s)
        2. Save
    3. Configure your deploy settings
        * Select a branch (`master`)
        * Enter our build command: `npm run parcel-build`
        * Our publish directory is `./dist`
        * In the advanced settings, we can define our "hidden" environment variables
    4. Deploy the site and customize your domain name while Netlify builds your site.
    5. We now have a [live website](https://savvycoders-spa-example.netlify.com/) that anyone can access!
