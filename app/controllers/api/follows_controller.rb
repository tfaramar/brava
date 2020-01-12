class Api::FollowsController < ApplicationController
    before_action :find_user

    def create
        @follow = @user.followed_users.new(follower_id: current_user.id)
        if @follow.save
            render :show
        else
            render json: @follow.errors.full_messages, status: 400
        end
    end

    def destroy
        @follow = Follow.find(params[:id])
        if @follow.destroy
            render :show
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    private
    def find_user
        @user = Activity.find(params[:user_id])
    end 
end
