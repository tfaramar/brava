class Api::ActivitiesController < ApplicationController
    before_action :require_logged_in

    def create
        @activity = Activity.new(activity_params)
        @activity.user_id = current_user.id
        if @activity.save
            render :show
        else
            render json: @activity.errors.full_messages, status: 400
        end
    end

    def destroy
        @activity = Activity.find(params[:id])
        if @activity.user_id == current_user.id
            if @activity.destroy
                render :show
            else
                render json: @activity.errors.full_messages, status: 422
            end 
        else
            render json: ['You are not authorized to delete this entry.'], status: 401
        end
    end

    def index
        @ids = [current_user.id]
        if !params[:my_feed]
            current_user.followees.each { |u| @ids.push(u.id) }
        end
        @activities = Activity.where(user_id: @ids)
            .order(created_at: :desc)
            .limit(5)
            .offset(params[:offset])
        render :index
    end

    def update 
        @activity = Activity.find(params[:id])
        if @activity.user_id == current_user.id
            if @activity.update(activity_params)
                render :show
            else
                render json: @activity.errors.full_messages, status: 400
            end
        else
            render json: ['You are not authorized to revise this entry.'], status: 401
        end
    end

    def show
        @activity = Activity.find(params[:id])
        render :show
    end

    private
    def activity_params
        params.require(:activity).permit(:sport, :title, :distance, :elevation, :elapsed_time, :personal_record, :route_id, :start_time)
    end
end
