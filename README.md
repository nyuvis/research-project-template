# Project Template

This is a template repository for research projects in our group. It outlines what projects should contain to make them known people, easy to adopt, and verifiable. This template summarizes what should be included in your project's repository.

This template contains a basic [Flask](https://flask.palletsprojects.com/) web app, which requests data from a server and visualizes it in a bar chart.

## Paper

You should include a link to your paper in arXiv. If you have given a talk, then you should also include a link to your presentation slides.

## Demo

If possible, you should have an online demo version of your work. In addition, you should have a link to a short video that showcases what you've done.

You can host the demo on our group servers or through another platform of your choice. If you want to use our servers, then see Josua's [app deployment guide](https://docs.google.com/document/d/1jcr5ZFF6AzPAbUheBl4QdO8bZBOXVao_FvLcWeXWMf0/edit?usp=sharing). If your demo has no server-side code, then you can use a static site host like [GitHub pages](https://pages.github.com), [Netlify](https://www.netlify.com), or [Vercel](https://vercel.com/).

TODO: add instructions for how to host a tool on our own servers.

## Installable Software and Documentation

You should include intstructions for how a user can run your software on their own.

### Docker

If you are making a web app, then one way to make it easy for other people to run and deploy your code is by using [Docker](https://www.docker.com), which let you package your app into [containers](https://www.docker.com/resources/what-container).

One benefit of using docker is that other people only need to have Docker installed to run your web app, regardless of what languages, technologies, or depencies your application uses.

The example app is based off of the popular [uwsgi-nginx-flask Docker image](https://hub.docker.com/r/tiangolo/uwsgi-nginx-flask/). To run the example app, clone this repository, start Docker Desktop, and then execute the command `docker-compose up`, and go to [http://127.0.0.1/](http://127.0.0.1/). You can stop the app with `docker-compose down`.

## Experimental Data

If experimental data is available, then your repo should include:
* Link to the registered design in [OSF](https://osf.io/)
* Details of the methodology and material used
* Collected data
* Scripts/code used to analyze the data


## License

This repo includes in the MIT open source license. You can choose a different one, but you should include some license before publically sharing your code. GitHub created a basic open source license guide [here](https://choosealicense.com).
