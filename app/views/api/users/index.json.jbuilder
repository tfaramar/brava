@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :email, :first_name, :last_name, :city, :state, :country
    json.photoUrl url_for(user.photo)
  end
end