class CarseatsController < ApplicationController
    before_action :carseat_find, only: [:show]
  

    def index
        carseats = Carseat.all 
        render json: carseats, status: :ok
    end

    def show
        carseat = carseat_find
        render json: carseat, status: :ok
    end

    def update
        carseat = carseat_find
        carseat.update!(carseat_params)
        render json: carseat, status: :ok
    end

    def create
        carseat = Carseat.create!(carseat_params)
        render json: carseat, status: :created
    end

    def destroy
        carseat = carseat_find
        carseat.destroy
        head :no_content
    end

#     def mostExpensive
#         carseats = Carseat.order(price: :desc)

    
#         render json: carseats.limit(5)

        
#     end

#     def findMode
#         carseats = Carseat.all.filter{|carseat| carseat.mode.include?(params[:string])}
#         render json: carseats
#     end 

#     def budget
#         number = params[:number].to_i
#         carseats = Carseat.select{|carseat| carseat.price <= number }
#         # carseats = Carseat.all.filter{|carseat| carseat.price <= number}
#         budgetCarseatReviews = carseats.map{|carseat| carseat.reviews}
#         errorMessage = "no reviews found that fit in the budget of #{number}"
#         errorMessageJson = {customMessage: errorMessage}

#         if budgetCarseatReviews.any?
#             render json: budgetCarseatReviews.flatten
#         else
#             render json: errorMessageJson 
#         end

#         # render json: budgetCarseatReviews.flatten
#     end


# #     button on frontend that returns the five most expensive carseats

# # button 
# # route
# # controller

#     def popular_seats
    
#         carseats = Carseat.all.filter{|carseat| carseat.reviews.count == params[:number].to_i}
#         render json: carseats
#     end

    private

    def carseat_find
        Carseat.find(params[:id])
    end

    def carseat_params
        params.permit(:name, :mode, :expiration, :price, :features, :img)
    end
        
end
