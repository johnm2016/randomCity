# randomCity

Simple web server replying to a request with a json object containing
* a suggetion of a random city to visit
* the hostname and ip of the machine handling the request

The only purpose of this project is to be used as a basis appication to demo scalability on a Docker Swarm cluster

# Usage

Install dependencies `npm install`

Start the server `npm start`

Send a couple of requests

```
$ curl http://localhost:8080
{"message":"venus [192.168.1.11] suggests to visit Taeppov"}
$ curl http://localhost:8080
{"message":"venus [192.168.1.11] suggests to visit Fuzahaser"}
$ curl http://localhost:8080
{"message":"venus [192.168.1.11] suggests to visit Ziwlaaw"}
```

I told you, there is not a lot happening here :)
