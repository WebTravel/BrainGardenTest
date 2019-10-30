# Prioritet project

## Deploying local sandbox:

* ```copy .env.dist into .env and configure it```
* ```docker-compose up -d```

## Entrypoints
* [http://localhost/](http://localhost/)


### Checking code style and running tests
Fix code style by running ESLint:
```bash
docker-compose exec node yarn eslint
```

Prettify code by running prettier:
```bash
docker-compose exec node yarn prettify
```
