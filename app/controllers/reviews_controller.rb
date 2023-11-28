class ReviewsController < ApplicationController

    def index
        if params[:user_id]
            user = User.find_by_id(params[:user_id])
            @reviews = user.reviews
        else
            @reviews = Review.all 
        end
            render json: @reviews, status: :ok
    end

    def show
        render json: @review, status: :ok
    end

    def update
        @review.update!(review_params)
        render json: @review, status: :ok
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def destroy
        @review.destroy
        head :no_content
    end

    private

    def review_find
      @review = Review.find(params[:id])
    end

    def review_params
        params.permit(:summary, :stars, :user_id, :carseat_id)
    end
        
end
