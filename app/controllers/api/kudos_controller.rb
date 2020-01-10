class Api::KudosController < ApplicationController
    before_action :find_activity

    def create
        @kudo = @activity.kudos.new(user_id: current_user.id)
        if @kudo.save  
            render :show
        else
            render json: @kudo.errors.full_messages, status: 400
        end
    end

    def destroy
        @kudo = Kudo.find(params[:id])
        if @kudo.destroy
            render :show
        else
            render json: @kudo.errors.full_messages, status: 422
        end
    end

    private
    def find_activity
        @activity = Activity.find(params[:activity_id])
    end
end
