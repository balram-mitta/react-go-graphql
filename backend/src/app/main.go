package main
import (
  "log"
  "net/http"
  "encoding/json"
)

type Article struct {
  Id      string `json:"Id"`
  Title   string `json:"Title"`
  Desc    string `json:"desc"`
  Content string `json:"content"`
}

Articles := []Article{
  Article{Title: "Hello", Desc: "Article Description", Content: "Article Content"},
  Article{Title: "Hello 2", Desc: "Article Description", Content: "Article Content"},
}

func rootHandler(w http.ResponseWriter, r *http.Request)  {
	res,_ := json.Marshal(map[string]string{"data":"hello world"})
	w.Header().Set("Content-Type", "application/json")
	w.Write(res)
}

func main() {
  http.Handle("/", http.HandlerFunc(rootHandler))
  log.Println("Now server is running on port 3000")
  http.ListenAndServe(":3000", nil)
}