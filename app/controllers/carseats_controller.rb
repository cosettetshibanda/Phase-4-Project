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

    def popular_seats
        carseats = Carseat.all.filter {|carseat| carseat.reviews.count >= params[:number].to_i}
        render json: carseats
        # Carseat.all.map {|carseat| carseat.reviews}
        # Carseat.all.map{|carseat| carseat.reviews.count}
        # Carseat.all.filter do |carseat|
        #  carseat.reviews.count >= params[:number]
        #     carseat
        # end
    end

    private

    def carseat_find
        Carseat.find(params[:id])
    end

    def carseat_params
        params.permit(:name, :mode, :expiration, :price, :features, :img)
    end
        
end
