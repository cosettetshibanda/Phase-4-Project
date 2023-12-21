class Carseat < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true, uniqueness: true

    def popular_seats
        number = params[:number]
        carseats = Carseat.all
    end
    
end
