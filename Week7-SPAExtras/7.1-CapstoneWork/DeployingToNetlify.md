# Deploying Your Site To Netlify

### **Objective: -**

In this module we'll look at how to setup a website Frontend on Netlify. We will use out Practice SPA for this exercise.

Deploying to Netlify is a requirement for your capstone project, and you will have to do this with your project as well.

<br>

---

<br>

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

<br>

### You can read more about Netlify and how to Deploy a Front End Application with Netlify on freeCodeCamp at [https://www.freecodecamp.org/news/how-to-deploy-your-front-end-app/](https://www.freecodecamp.org/news/how-to-deploy-your-front-end-app/).

<br>

---

<br>

### **Summary: -**

In this module we learned how to setup a website Frontend on Netlify.

This process can be a little tricky as Netlify uses a strict environment and throws and error on every tiny issue.

However, once you get your site up and running you can be sure your frontend code base is syntactically error free.
