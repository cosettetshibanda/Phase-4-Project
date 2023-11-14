class CarseatSerializer < ActiveModel::Serializer
  attributes :id, :name, :type, :expiration, :price, :features, :img
end
