class ReviewsController < ApplicationController
    before_action :find_review, only: [:show, :update, :destroy]
    before_action only: [:update, :destroy] do 
        authorize_user_resource(@review.user_id)

    def index
        if paramss[:user_id]
            user = User.find_by_id(params[:user_id])
            @reviews = user.reviews
        else
            @reviews = Review.all 
        end
            render json: @reviews, status: ;ok
    end

    def show
        render json: @review, status: :ok
    end

    def update
        @review.update!(review_params)
        render json: @review, status: :ok
    end

    def create
        review = current_user.reviews.create!(review_params)
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
        params.permit(:summary, :stars, :user_id, carseat_id)
    end
        
end
