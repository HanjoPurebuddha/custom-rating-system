# clj chatbot ui

A chatbot UI using OpenAI and clojure. This is a clone of [chatbot-ui](https://github.com/mckaywrigley/chatbot-ui) built in [electric](https://github.com/hyperfiddle/electric) and [datahike](https://github.com/replikativ/datahike).

## Run the application



`yarn` to install Tailwind and other javasscript dependencies

`npm install -g yarn`

`yarn build:tailwind:dev` to build the css watch and build

We are using a branch of Datahike so you will have to prepare the library first.

`clj -X:deps prep`


```
$ clj -A:dev -X user/main

Starting Electric compiler and server...
shadow-cljs - server version: 2.20.1 running at http://localhost:9630
shadow-cljs - nREPL server started on port 9001
[:app] Configuring build.
[:app] Compiling ...
[:app] Build completed. (224 files, 0 compiled, 0 warnings, 1.93s)

👉 App server available at http://0.0.0.0:8080
```
