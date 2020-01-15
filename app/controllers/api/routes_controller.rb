class Api::RoutesController < ApplicationController
    before_action :require_logged_in

    def create
        @route = Route.new(route_params)
        @route.user_id = current_user.id
        if @route.save
            render :show
        else
            render json: @route.errors.full_messages, status: 400
        end
    end

    def index
        @routes = Route.where(user_id: current_user.id)
            .order(created_at: :desc)
        render :index
    end

    def show
        @route = Route.find(params[:id])
        render :show
    end

    def destroy
        @route = Route.find(params[:id])
        if @route.user_id == current_user.id
            if @route.destroy
                render :show
            else
                render json: @route.errors.full_messages, status: 422
            end 
        else
            render json: ['You are not authorized to delete this entry.'], status: 401
        end
    end

    private
    def route_params
        params.require(:route).permit(:sport, :title, :coordinates)
    end
end
