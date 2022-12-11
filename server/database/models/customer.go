package models

type Customer struct {
	FirstName string `json:"first_name" validate:"required,min=3,max=40"`
	LastName  string `json:"last_name" validate:"required,min=3,max=40"`
	Email     string `json:"email" validate:"required,min=3,max=40"`
	Password  string `json:"password" validate:"required,min=3,max=40"`
}
