class CarseatsController < ApplicationController
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
        carseat = carseat.create!(carseat_params)
        render json: carseat, status: :created
    end

    def destroy
        carseat = carseat_find
        carseat.destroy
        head :no_content
    end

    private

    def carseat_find
        carseat.find(params[:id])
    end

    def carseat_params
        params.permit(:name, :mode, :expiration, :price, :features, :img)
    end
        
end
