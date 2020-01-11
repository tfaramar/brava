@activities.each do |act|
  json.set! act.id do
    json.extract! act, :id, :title, :sport, :distance, :elevation, :elapsed_time, :route_id, :personal_record, :start_time
    json.user do
      json.partial! "api/users/user", user: act.user
    end
    json.kudos do
      act.kudos.each do |kudo|
        json.partial! "api/kudos/kudo", kudo: kudo
      end
    end
  end
end