package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"strings"
)

type Data struct {
	Data []string `json:"data"`
}

func main() {
	data, err := ioutil.ReadFile("data.txt")
	if err != nil {
		fmt.Println("Error reading file")
	}

	d := new(Data)
	for _, c := range strings.Split(string(data), "\n") {
		d.Data = append(d.Data, c)
	}

	fmt.Println("Length:", len(d.Data))

	ret, err := json.Marshal(d)
	if err != nil {
		fmt.Println("Fail to marsh data")
	}
	ioutil.WriteFile("data.json", ret, 0644)
}
