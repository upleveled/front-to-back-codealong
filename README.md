# Welcome to the UpLeveled Back to Front Exercise

This exercise is designed to be a code alone workshop. Please feel free to ask any question when needed.

Remember we are in a safe environment

## Heroku setup Guide

1. Fork the repo.

- To do this click the `fork` button at the top-right corner of this webpage

<img src="https://user-images.githubusercontent.com/61600906/121862810-7b27de00-ccfb-11eb-9085-ed12e30a3a43.png" alt="fork repo button" width="400"/>

- Make sure the repo you are redirected have your github username as prefix

<img src="https://user-images.githubusercontent.com/61600906/121863381-1751e500-ccfc-11eb-96e3-fe306821e6e4.png" alt="fork repo button" width="400"/>

2. Deploy to heroku.

- Sign up or Log in to [heroku](https://id.heroku.com/login)
- Create a new app clicking the `New` button on the top-right corner of the webpage.

<img src="https://user-images.githubusercontent.com/61600906/121916076-1c328b00-cd34-11eb-854f-b37677a3d880.png" alt="fork repo button" width="400"/>

- Give the app a name and choose Europe as region

<img src="https://user-images.githubusercontent.com/61600906/121916417-687dcb00-cd34-11eb-8035-7ccbf89bd8f3.png" alt="fork repo button" width="700"/>

- Click `create app`.
- Use **GitHub** as deployment method, search for your forked repo and connect to it.

<img src="https://user-images.githubusercontent.com/61600906/121917042-fd80c400-cd34-11eb-8bcf-a2249a92fc0d.png" alt="fork repo button" width="700"/>

- Enable Automatic deploy and deploy `main` branch.

<img src="https://user-images.githubusercontent.com/61600906/122389401-31482d80-cf71-11eb-89d8-c009072913df.png" alt="fork repo button" width="700"/>

4. Setup Database on heroku.

- Move to the overview tab and click on configure Add-ons

<img src="https://user-images.githubusercontent.com/61600906/122390527-61440080-cf72-11eb-9a1d-c0ce34486ede.png" alt="fork repo button" width="700"/>

- Search for Heroku Postgres addon and select it.

<img src="https://user-images.githubusercontent.com/61600906/122391092-f3e49f80-cf72-11eb-84dd-db380ad68f49.png" alt="fork repo button" width="700"/>

- Choose the `Hobby Dev - Free` plan and click `submit order form` button.

<img src="https://user-images.githubusercontent.com/61600906/122391239-15de2200-cf73-11eb-941c-fce95e3d939b.png" alt="fork repo button" width="400"/>

## Local setup Guide

1. Clone the repo.

- To do this first copy the `url` of the repo, or get it from the download button in github.

<img src="https://user-images.githubusercontent.com/61600906/121905880-dd4c0780-cd2a-11eb-9ef2-3ea0542419e1.png" alt="fork repo button" width="400"/>

- In your terminal go to your projects directory and run this command:

```sh
 git clone <Repo URL>
```

<img src="https://user-images.githubusercontent.com/61600906/122393932-b46b8280-cf75-11eb-9a2a-a594a06368cc.png" alt="fork repo button"/>

- Move into the local repo directory running this command:

```sh
cd front-to-back-lecture-app/
```

- Install the dependencies with:

```sh
yarn install
```

- Open the project in vs-code with:

```sh
code .
```

- Start the development server with:

```sh
yarn dev
```

- In vs-code move to `pages/index.js` file to start with the exercise.
