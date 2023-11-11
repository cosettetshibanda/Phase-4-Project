class ReviewsController < ApplicationController

    def index
        reviews = Review.all 
        render json: reviews, status: ;ok
    end

    def show
        review = review_find
        render json: review, status: :ok
    end

    def update
        review = review_find
        review.update!(review_params)
        render json: review, status: :ok
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def destroy
        review = review_find
        review.destroy
        head :no_content
    end

    private

    def review_find
        Review.find(params[:id])
    end

    def review_params
        params.permit(:summary, :stars, :user_id, carseat_id)
    end
        
end
