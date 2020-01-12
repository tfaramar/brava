json.set! follow.id do
    json.user do
        json.extract! follow.followee, :id, :first_name, :last_name
    end
end