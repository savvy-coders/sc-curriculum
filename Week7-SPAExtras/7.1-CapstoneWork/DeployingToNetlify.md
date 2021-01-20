# Deploying Your Site To Netlify

## 1. Sign-up or log-in to Netlify

<br>

## 2. Click "New site from Git"

![Select "New Site from Git"](img/Netlify_NewSiteFromGit.png)

<br>

## 3. Under "Continuous Deploy" select the GitHub icon

![Select the GitHub icon](img/Netlify_CreateNewSite_ContinuousDeploy1.png)

<br>

## 4. Under "Continuous Deploy: GitHub App" choose your repo

1.  Give Netlify access to your repo(s)
2.  Save
3.  Select a branch (`master`)

![Choose your GitHub repo](img/Netlify_CreateNewSite_ContinuousDeploy2.png)

<br>

## 5. Under "Basic Build setting" configure your deploy settings

    - Enter our build command: `npm run parcel-build`
    - Our publish directory is `./dist`
    - In the advanced settings, we can define our "hidden" environment variables

![Configure your deploy settings](img/Netlify_CreateNewSite_BasicBuildSettings.png)

<br>

## 6. Deploy the site and customize your domain name -- under 'site overview' -> 'site settings' -- while Netlify builds your site.

<br>

## 7. We now have a [live website](https://savvycoders-spa-example.netlify.com/) that anyone can access!

![Savvy Coders Example SAP website](img/SavvyCodersExampleSPA.png)
