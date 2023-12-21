class ReviewsController < ApplicationController
    before_action :review_find, only: [:update, :destroy]


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
        @review.update(review_params)
        render json: @review, status: :ok
    end

    def create
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def destroy
        @review.destroy
        head :no_content
    end

    private

    def review_find
      @review = @current_user.reviews.find(params[:id])
    end

    def review_params
        params.require(:review).permit(:summary, :stars, :carseat_id)
    end
        
end
