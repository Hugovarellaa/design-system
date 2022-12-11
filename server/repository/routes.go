package repository

import "github.com/gofiber/fiber/v2"

func (repo *Repository) SetupRoutes(app *fiber.App) {
	app.Get("/customers", repo.GetCustomers)
	app.Get("/customers/:id", repo.GetCustomerById)

	app.Post("/customers", repo.CreateCustomer)
	app.Put("/customers/:id", repo.UpdateCustomer)

	app.Delete("/customers/:id", repo.DeleteCustomer)
}
