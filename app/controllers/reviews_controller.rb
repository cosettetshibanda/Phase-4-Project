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

    def review_length
    
        # user = params[:name]
        # reviews = Review.all.map{|review| review.user}
        # sam.reviews
        # user = User.where("name = ?", params[:name])
        user = User.find_by(username: params[:name])
        userReviews = user.reviews.filter{|review| review.summary.split.count >= params[:number].to_i}
        render json: userReviews
        

    end

    # def findReviews
    #     reviews = Review.all.filter{|review| review.stars == params[:number].to_i}
    #     findCarseats = reviews.map{|review| review.carseat}
    #     render json: findCarseats
    # end

    private

    def review_find
      @review = @current_user.reviews.find(params[:id])
    end

    def review_params
        params.require(:review).permit(:summary, :stars, :carseat_id)
    end
        
end
