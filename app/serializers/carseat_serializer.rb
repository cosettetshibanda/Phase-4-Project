class CarseatSerializer < ActiveModel::Serializer
  attributes :id, :name, :mode, :expiration, :price, :features, :img
 
end
