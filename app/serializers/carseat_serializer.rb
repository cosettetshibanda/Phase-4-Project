class CarseatSerializer < ActiveModel::Serializer
  attributes :id, :name, :mode, :expiration, :price, :features, :img

  has_many :reviews 
 
end
