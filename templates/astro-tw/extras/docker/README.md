## Run in Docker

To run the application using Docker, you can use the following command:

```bash
  docker build -t {{name}} .
  docker run -p 80:80 {{name}}
```

This will build a Docker image from the current directory and then run it. The app will be available at http://localhost
