class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :stars, :summary, :user_id, :carseat_id
  belongs_to :user
  belongs_to :carseat
end
