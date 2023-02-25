# Checkpoint 1

## Table of Contents

- [What I did for the past few weeks](#what-i-did-for-the-past-few-weeks)
- [What I am currently working on](#what-i-am-currently-working-on)
- [What's my plan](#whats-my-plan)

## What I did for the past few weeks

In the past few weeks, I first learn about kubernetes and minikube, and set up deployment and pods with various tutorials. 
![fig_dashboard_kubernetes](checkpoint_readme_file/png/dashboard1.png)

Besides, I use opentelemetry to get simple trace with [NodeJS](https://opentelemetry.io/docs/instrumentation/js/getting-started/nodejs/). After getting simple trace information from opentelemetry, I tried [Aspecto](https://www.aspecto.io/), a free distributed tracing tool. I was able to get live strean traces with this tool, and can see the detail of these traces.
![Fig_aspecto_1](checkpoint_readme_file/png/distributedTracing1.png)
![Fig_aspecto_2](checkpoint_readme_file/png/distributedTracing2.png)

After, I implement [multiple nodes](https://minikube.sigs.k8s.io/docs/tutorials/multi_node/) on minikube with kubernetes, and deploy with dockerfile. Related file is in dockerize_minikube. 


## What I am curretly working on

I am currently working on getting Istio trace out with minikube. I am still stuck on bookinfo example in istio, which makes me try to explore other ways to track deployment and service.

Apart from using Istio, I am also trying OpenTelemetry. I followed these two tutorials, try to implement distributed tracing with OpenTelemetry Collector:

https://www.aspecto.io/blog/distributed-tracing-with-opentelemetry-collector-on-kubernetes/
https://www.aspecto.io/blog/opentelemetry-collector-guide/#Configuring-Your-Collector-to-Send-Data-to-an-Observability-Vendor

With these two tutorials, I was able to set up jaeger and open webpage of jaeger. But something went wrong between jaeger and server. I can only see jaeger itself on jaeger dashboard.
![Fig_jeager](checkpoint_readme_file/png/jeager.png)

## What's my plan

My plan is to keep try implement the bookinfo example on istio, and solve the problems between opentelemetry collector and server app.