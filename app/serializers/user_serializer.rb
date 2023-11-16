class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :image_url
  has_many :reviews
  has_many :carseats through, :reviews
end
