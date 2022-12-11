package repository

import (
	"net/http"

	"github.com/Hugovarellaa/project-full-stack/database/migrations"
	"github.com/Hugovarellaa/project-full-stack/database/models"
	"github.com/gofiber/fiber/v2"
	"github.com/morkid/paginate"
	"gopkg.in/go-playground/validator.v9"
)

type ErrorResponse struct {
	FailedField string
	Tag         string
	Value       string
}

var validate = validator.New()

func ValidateStruct(customer models.Customer) []*ErrorResponse {
	var errors []*ErrorResponse
	err := validate.Struct(customer)
	if err != nil {
		for _, err := range err.(validator.ValidationErrors) {
			var element ErrorResponse
			element.FailedField = err.StructNamespace()
			element.Tag = err.Tag()
			element.Value = err.Param()
			errors = append(errors, &element)
		}
	}
	return errors
}

func (r *Repository) GetCustomers(context *fiber.Ctx) error {
	db := r.DB
	model := db.Model(&migrations.Customers{})

	pg := paginate.New(&paginate.Config{
		DefaultSize:        20,
		CustomParamEnabled: true,
	})

	page := pg.With(model).Request(context.Request()).Response(&[]migrations.Customers{})

	context.Status(http.StatusOK).JSON(&fiber.Map{
		"data": page,
	})
	return nil
}

func (r *Repository) GetCustomerById(context *fiber.Ctx) error {
	id := context.Params("id")
	customerModel := &migrations.Customers{}
	if id == "" {
		context.Status(http.StatusInternalServerError).JSON(&fiber.Map{"message": "ID cannot be empty"})
		return nil
	}

	err := r.DB.Where("id = ?", id).First(customerModel).Error
	if err != nil {
		context.Status(http.StatusBadRequest).JSON(&fiber.Map{"message": "Could not get the customer"})
		return err
	}
	context.Status(http.StatusOK).JSON(&fiber.Map{"message": "User id fetched successfully", "data": customerModel})
	return nil
}

func (r *Repository) CreateCustomer(context *fiber.Ctx) error {
	customer := models.Customer{}
	err := context.BodyParser(&customer)

	if err != nil {
		context.Status(http.StatusUnprocessableEntity).JSON(
			&fiber.Map{"message": "Request failed"})
		return err
	}
	erros := ValidateStruct(customer)
	if erros != nil {
		return context.Status(fiber.StatusBadRequest).JSON(erros)
	}

	if err := r.DB.Create(&customer).Error; err != nil {
		return context.Status(http.StatusBadRequest).JSON(
			&fiber.Map{"status": "error", "message": "Couldn't create customer", "data": err})
	}

	context.Status(http.StatusOK).JSON(fiber.Map{"message": "Customer created successfully", "data": customer})
	return nil
}

func (r *Repository) DeleteCustomer(context *fiber.Ctx) error {
	customerModel := migrations.Customers{}
	id := context.Params("id")
	if id == "" {
		context.Status(http.StatusInternalServerError).JSON(&fiber.Map{"message": "ID cannot be empty"})
		return nil
	}

	err := r.DB.Delete(customerModel, id)

	if err.Error != nil {
		context.Status(http.StatusBadRequest).JSON(&fiber.Map{"message": "could not delete customer"})
		return err.Error
	}

	context.Status(http.StatusOK).JSON(&fiber.Map{"message": "Customer delete successfully"})
	return nil
}

func (r *Repository) UpdateCustomer(context *fiber.Ctx) error {
	customer := models.Customer{}
	err := context.BodyParser(&customer)

	if err != nil {
		context.Status(http.StatusUnprocessableEntity).JSON(
			&fiber.Map{"message": "Request failed"})

		return err
	}
	errors := ValidateStruct(customer)
	if errors != nil {
		return context.Status(fiber.StatusBadRequest).JSON(errors)
	}

	db := r.DB
	id := context.Params("id")

	if id == "" {
		context.Status(http.StatusInternalServerError).JSON(&fiber.Map{"message": "ID cannot be empty"})
		return nil
	}
	if db.Model(&customer).Where("id = ?", id).Updates(&customer).RowsAffected == 0 {
		context.Status(http.StatusBadRequest).JSON(&fiber.Map{"message": "Could not get User with given id"})
	}

	return context.JSON(fiber.Map{"status": "success", "message": "User successfully updated"})
}
