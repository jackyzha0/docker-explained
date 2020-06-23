package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	// new mux router
	r := mux.NewRouter()
	r.HandleFunc("/", HelloWorldHandler)
	http.Handle("/", r)

	// serve on port 8080
	http.ListenAndServe(":8080", r)
}

func HelloWorldHandler(w http.ResponseWriter, r *http.Request) {
	// return Hello World!
	w.Write([]byte("Hello World!"))
}
