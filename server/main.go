package main

import (
	"github.com/Hugovarellaa/project-full-stack/bootstrap"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	bootstrap.InitializeApp(app)
}
