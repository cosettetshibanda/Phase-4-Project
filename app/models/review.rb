class Review < ApplicationRecord
    belongs_to :user
    belongs_to :carseat

    validates_uniqueness_of :carseat_id, scope: :user_id
    validates :stars, presence: true, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
end
