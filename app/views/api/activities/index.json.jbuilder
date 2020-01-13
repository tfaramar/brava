json.activities do 
  @activities.each do |act|
    json.set! act.id do 
      json.extract! act, :id, :user_id, :title, :sport, :distance, :elevation, :elapsed_time, :route_id, :personal_record, :start_time, :kudo_ids
    end
  end
end

json.users do 
  @activities.each do |act|
    json.set! act.user.id do
      json.partial! 'api/users/user', user: act.user
    end
  end
end

json.kudos do
  @activities.each do |act|
    act.kudos.each do |kudo|
      json.set! kudo.id do
        json.extract! kudo, :id, :user_id, :activity_id
      end
    end
  end
end