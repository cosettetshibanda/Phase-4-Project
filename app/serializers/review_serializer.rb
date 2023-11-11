class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :stars, :summary, :user_id, :carseat_id
end
