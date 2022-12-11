package migrations

import "gorm.io/gorm"

type Customers struct {
	ID        uint   `gorm:"primary key;autoIncrement" json:"id"`
	FirstName string `gorm:"primary key;autoIncrement;unique" json:"firstName"`
	LastName  string `gorm:"primary key;autoIncrement" json:"lastName"`
	Email     string `gorm:"primary key;autoIncrement" json:"email"`
	Password  string `gorm:"primary key;autoIncrement" json:"password"`
}

func MigrateCustomer(db *gorm.DB) error {
	err := db.AutoMigrate(&Customers{})
	return err
}
