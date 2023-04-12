# Building docker images

```
docker build -f filename . -t tagname
docker build -f back.Dockerfile . -t cooletijdgast/discord-web-backend
```

# Pushing docker image

```
docker push tagname
docker push cooletijdgast/discord-web-backend
```

# Starting the app
```
npm start
```